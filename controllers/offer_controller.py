import random
from flask import Blueprint, jsonify, request
from models import db
from models.offer import Offer, OfferItem

offer_bp = Blueprint('offer_bp', __name__)

@offer_bp.route('/api/offers', methods=['GET'])
def get_offers():
    offers = Offer.query.all()
    return jsonify([o.to_dict() for o in offers])

@offer_bp.route('/api/offers', methods=['POST'])
def create_offer():
    data = request.json or {}
    oid = f"o{Offer.query.count() + 1}{random.randint(100, 999)}"
    
    offer = Offer(
        id=oid,
        name=data.get('name', 'New Offer'),
        status=data.get('status', 'scheduled'),
        start=data.get('start', '2026-07-28'),
        end=data.get('end', '2026-08-15'),
        redemptions=0,
        revenue=0
    )
    db.session.add(offer)
    
    items_data = data.get('items', [])
    for item_data in items_data:
        item = OfferItem(
            offer_id=oid,
            product_id=item_data.get('productId'),
            discount_type=item_data.get('type', 'percent'),
            value=float(item_data.get('value', 0))
        )
        db.session.add(item)
        
    db.session.commit()
    return jsonify(offer.to_dict()), 201

@offer_bp.route('/api/offers/<oid>', methods=['PUT'])
def update_offer(oid):
    offer = Offer.query.get_or_404(oid)
    data = request.json or {}
    
    if 'name' in data: offer.name = data['name']
    if 'start' in data: offer.start = data['start']
    if 'end' in data: offer.end = data['end']
    if 'status' in data: offer.status = data['status']
    
    if 'items' in data:
        OfferItem.query.filter_by(offer_id=oid).delete()
        for item_data in data['items']:
            item = OfferItem(
                offer_id=oid,
                product_id=item_data.get('productId'),
                discount_type=item_data.get('type', 'percent'),
                value=float(item_data.get('value', 0))
            )
            db.session.add(item)

    db.session.commit()
    return jsonify(offer.to_dict())
