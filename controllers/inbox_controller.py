from flask import Blueprint, jsonify, request
from models import db
from models.inbox import Conversation, Message
from services.meta_api import meta_service

inbox_bp = Blueprint('inbox_bp', __name__)

@inbox_bp.route('/api/inbox/conversations', methods=['GET'])
def get_conversations():
    channel = request.args.get('channel')
    if channel and channel != 'all':
        convs = Conversation.query.filter_by(channel=channel).all()
    else:
        convs = Conversation.query.all()
    return jsonify([c.to_dict() for c in convs])

@inbox_bp.route('/api/inbox/conversations/<cid>/read', methods=['POST'])
def mark_read(cid):
    conv = Conversation.query.get_or_404(cid)
    conv.unread = 0
    db.session.commit()
    return jsonify(conv.to_dict())

@inbox_bp.route('/api/inbox/send', methods=['POST'])
def send_message():
    data = request.json or {}
    cid = data.get('conversationId')
    text = data.get('text', '').strip()
    
    if not cid or not text:
        return jsonify({'error': 'conversationId and text required'}), 400
        
    conv = Conversation.query.get_or_404(cid)
    
    # 1. Store message in SQL Database
    msg = Message(
        conversation_id=cid,
        sender_type='out',
        text=text,
        time='Just now'
    )
    conv.last = text
    conv.time = 'now'
    db.session.add(msg)
    db.session.commit()
    
    # 2. Dispatch message via Meta API (Instagram / WhatsApp)
    meta_response = None
    if conv.channel == 'instagram':
        meta_response = meta_service.send_instagram_message(conv.handle, text)
    elif conv.channel == 'whatsapp':
        meta_response = meta_service.send_whatsapp_message(conv.handle, text)
        
    return jsonify({
        'conversation': conv.to_dict(),
        'message': msg.to_dict(),
        'metaApiResult': meta_response
    })

@inbox_bp.route('/api/meta/webhook', methods=['GET', 'POST'])
def meta_webhook():
    """
    Meta Webhook for incoming Instagram DMs and WhatsApp Cloud API events.
    """
    if request.method == 'GET':
        # Webhook Verification Challenge from Meta Developer Console
        mode = request.args.get('hub.mode')
        token = request.args.get('hub.verify_token')
        challenge = request.args.get('hub.challenge')
        verify_token = meta_service.access_token or "thulo_meta_verify_token_99"
        
        if mode == 'subscribe' and token:
            return challenge, 200
        return 'Forbidden', 403

    # Handle incoming Webhook POST payload
    payload = request.json or {}
    # Process incoming message events and update SQL database
    return jsonify({'status': 'EVENT_RECEIVED'}), 200

@inbox_bp.route('/api/meta/accounts', methods=['GET'])
def get_connected_social_accounts():
    """
    Returns connected Instagram Business and WhatsApp Business Cloud API accounts info.
    """
    accounts = meta_service.get_connected_accounts()
    return jsonify(accounts)
