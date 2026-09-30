import uuid
from flask import Blueprint, jsonify, request
from models import db
from models.offer import Offer, OfferItem
from helpers import to_float, to_str

offer_bp = Blueprint('offer_bp', __name__)

def generate_unique_oid():
    """Generates guaranteed unique Offer ID."""
    existing = Offer.query.all()
    max_num = 100
    for o in existing:
        if o.id and 'OFF-' in o.id:
            try:
                num = int(o.id.split('OFF-')[1])
                if num > max_num:
                    max_num = num
            except (ValueError, IndexError):
                pass
    return f"OFF-{max_num + 1}"

@offer_bp.route('/api/offers', methods=['GET'])
def get_offers():
    offers = Offer.query.all()
    return jsonify([o.to_dict() for o in offers])

@offer_bp.route('/api/offers', methods=['POST'])
def create_offer():
    data = request.json or {}
    oid = generate_unique_oid()
    
    offer = Offer(
        id=oid,
        name=to_str(data.get('name'), 'New Offer') or 'New Offer',
        status=to_str(data.get('status'), 'scheduled') or 'scheduled',
        start=to_str(data.get('start'), '2026-07-28') or '2026-07-28',
        end=to_str(data.get('end'), '2026-08-15') or '2026-08-15',
        redemptions=0,
        revenue=0.0
    )
    db.session.add(offer)
    
    items_data = data.get('items', [])
    if isinstance(items_data, list):
        for item_data in items_data:
            if not isinstance(item_data, dict):
                continue
            item = OfferItem(
                offer_id=oid,
                product_id=to_str(item_data.get('productId')),
                discount_type=to_str(item_data.get('type'), 'percent') or 'percent',
                value=to_float(item_data.get('value'), 0.0)
            )
            db.session.add(item)
        
    db.session.commit()
    return jsonify(offer.to_dict()), 201

@offer_bp.route('/api/offers/<oid>', methods=['PUT'])
def update_offer(oid):
    offer = Offer.query.get_or_404(oid)
    data = request.json or {}
    
    if 'name' in data: offer.name = to_str(data['name'], offer.name) or 'New Offer'
    if 'start' in data and data['start']: offer.start = to_str(data['start'])
    if 'end' in data and data['end']: offer.end = to_str(data['end'])
    if 'status' in data: offer.status = to_str(data['status'], offer.status)
    
    if 'items' in data and isinstance(data['items'], list):
        OfferItem.query.filter_by(offer_id=oid).delete()
        for item_data in data['items']:
            if not isinstance(item_data, dict):
                continue
            item = OfferItem(
                offer_id=oid,
                product_id=to_str(item_data.get('productId')),
                discount_type=to_str(item_data.get('type'), 'percent') or 'percent',
                value=to_float(item_data.get('value'), 0.0)
            )
            db.session.add(item)

    db.session.commit()
    return jsonify(offer.to_dict())

@offer_bp.route('/api/offers/<oid>', methods=['DELETE'])
def delete_offer(oid):
    offer = Offer.query.get_or_404(oid)
    OfferItem.query.filter_by(offer_id=oid).delete()
    db.session.delete(offer)
    db.session.commit()
    return jsonify({'status': 'success', 'message': f'Offer {oid} deleted successfully'})
