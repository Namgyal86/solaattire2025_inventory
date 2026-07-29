import random
from flask import Blueprint, jsonify, request
from models import db
from models.order import Order, OrderItem
from models.shipment import Shipment
from models.product import Product, Variant

order_bp = Blueprint('order_bp', __name__)

@order_bp.route('/api/orders', methods=['GET'])
def get_orders():
    orders = Order.query.order_by(Order.id.desc()).all()
    return jsonify([o.to_dict() for o in orders])

@order_bp.route('/api/orders/<oid>', methods=['GET'])
def get_order(oid):
    order = Order.query.get_or_404(oid)
    return jsonify(order.to_dict())

@order_bp.route('/api/orders', methods=['POST'])
def create_order():
    data = request.json or {}
    oid = f"ORD-{random.randint(1043, 1099)}"
    
    offer_info = data.get('offer') or {}
    offer_name = offer_info.get('name') if offer_info else None
    offer_amount = offer_info.get('amount', 0) if offer_info else 0
    
    order = Order(
        id=oid,
        customer=data.get('customer', 'Anonymous Customer'),
        handle=data.get('handle', '@customer'),
        offer_name=offer_name,
        offer_amount=offer_amount,
        status='pending',
        date=data.get('date', '2026-07-28'),
        total=float(data.get('total', 0))
    )
    db.session.add(order)
    
    items_data = data.get('items', [])
    for it in items_data:
        item = OrderItem(
            order_id=oid,
            name=it.get('name', 'Product'),
            variant=it.get('variant', 'Standard'),
            qty=int(it.get('qty', 1)),
            price=float(it.get('price', 0))
        )
        db.session.add(item)
        
        # Deduct variant stock if matching
        prod = Product.query.filter_by(name=it.get('name')).first()
        if prod:
            parts = it.get('variant', '').split('/')
            if len(parts) >= 2:
                size_str = parts[0].strip()
                color_str = parts[1].strip()
                var = Variant.query.filter_by(product_id=prod.id, size=size_str, color=color_str).first()
                if var and var.stock >= item.qty:
                    var.stock -= item.qty
                    
    # Also initialize shipment record for NCM
    pkg_str = ", ".join([f"{it.get('qty',1)}x {it.get('name','')}" for it in items_data]) or "Apparel / Clothes"
    shipment = Shipment(
        order_id=oid,
        customer=order.customer,
        phone=data.get('phone', '9847023226'),
        address=data.get('address', f"{data.get('destination', 'Kathmandu')}, Nepal"),
        ncm_tracking=None,
        dest=data.get('destination', 'KATHMANDU'),
        fbranch=data.get('fbranch', 'TINKUNE'),
        package_desc=pkg_str,
        cod=float(data.get('total', 0)),
        status='not-created',
        created=order.date
    )
    db.session.add(shipment)

    db.session.commit()
    return jsonify({'order': order.to_dict(), 'shipment': shipment.to_dict()}), 201

@order_bp.route('/api/orders/<oid>/status', methods=['PUT'])
def update_order_status(oid):
    order = Order.query.get_or_404(oid)
    data = request.json or {}
    new_status = data.get('status')
    if new_status:
        order.status = new_status
        # Update associated shipment status if matched
        shipment = Shipment.query.filter_by(order_id=oid).first()
        if shipment:
            if new_status == 'shipped' and shipment.status == 'not-created':
                shipment.status = 'in-transit'
            elif new_status == 'delivered':
                shipment.status = 'delivered'
        db.session.commit()
    return jsonify(order.to_dict())
