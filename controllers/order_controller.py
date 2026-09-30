import random
from datetime import datetime
from flask import Blueprint, jsonify, request
from models import db
from models.order import Order, OrderItem
from models.shipment import Shipment
from models.product import Product, Variant
from helpers import to_float, to_int, to_str

order_bp = Blueprint('order_bp', __name__)

def generate_unique_oid():
    """Calculates next guaranteed unique Order ID (e.g. ORD-1100, ORD-1101...)."""
    existing_orders = Order.query.all()
    max_num = 1099
    for o in existing_orders:
        if o.id and 'ORD-' in o.id:
            try:
                num = int(o.id.split('ORD-')[1])
                if num > max_num:
                    max_num = num
            except (ValueError, IndexError):
                pass
    return f"ORD-{max_num + 1}"

@order_bp.route('/api/orders', methods=['GET'])
def get_orders():
    orders = Order.query.order_by(Order.date.desc(), Order.id.desc()).all()
    return jsonify([o.to_dict() for o in orders])

@order_bp.route('/api/orders/<oid>', methods=['GET'])
def get_order(oid):
    order = Order.query.get_or_404(oid)
    return jsonify(order.to_dict())

@order_bp.route('/api/orders', methods=['POST'])
def create_order():
    data = request.json or {}
    
    oid = generate_unique_oid()
    
    offer_info = data.get('offer') if isinstance(data.get('offer'), dict) else {}
    offer_name = to_str(offer_info.get('name')) if offer_info else None
    offer_amount = to_float(offer_info.get('amount'), 0.0) if offer_info else 0.0
    
    now_str = datetime.now().strftime('%Y-%m-%d %H:%M')
    req_date = to_str(data.get('date'))
    if req_date and len(req_date) == 10:
        order_datetime = f"{req_date} {datetime.now().strftime('%H:%M')}"
    elif req_date:
        order_datetime = req_date
    else:
        order_datetime = now_str

    advance_val = to_float(data.get('advancePaid', data.get('advance_paid', 0.0)), 0.0)
    total_val = to_float(data.get('total', 0.0), 0.0)

    order = Order(
        id=oid,
        customer=to_str(data.get('customer'), 'Anonymous Customer') or 'Anonymous Customer',
        handle=to_str(data.get('handle'), '@customer') or '@customer',
        offer_name=offer_name,
        offer_amount=offer_amount,
        status=to_str(data.get('status'), 'confirmed') or 'confirmed',
        date=order_datetime,
        total=total_val,
        advance_paid=advance_val
    )
    db.session.add(order)
    
    items_data = data.get('items', [])
    if isinstance(items_data, list):
        for it in items_data:
            if not isinstance(it, dict):
                continue
            item = OrderItem(
                order_id=oid,
                name=to_str(it.get('name'), 'Product') or 'Product',
                variant=to_str(it.get('variant'), 'Standard') or 'Standard',
                qty=to_int(it.get('qty'), 1),
                price=to_float(it.get('price'), 0.0)
            )
            db.session.add(item)
            
            # Deduct variant stock automatically in SQLite inventory
            item_name = to_str(it.get('name'))
            prod = Product.query.filter_by(name=item_name).first() if item_name else None
            if not prod and it.get('productId'):
                prod = Product.query.get(to_str(it.get('productId')))
                
            if prod:
                v_raw = to_str(it.get('variant'))
                parts = v_raw.split('/')
                size_str = parts[0].strip() if len(parts) >= 1 else ''
                color_str = parts[1].strip() if len(parts) >= 2 else ''
                
                # Match exact variant by size and color
                var = Variant.query.filter_by(product_id=prod.id, size=size_str, color=color_str).first()
                if not var and size_str:
                    # Fallback: match by size
                    var = Variant.query.filter_by(product_id=prod.id, size=size_str).first()
                if not var:
                    # Fallback: pick first variant of product
                    var = Variant.query.filter_by(product_id=prod.id).first()
                    
                if var:
                    var.stock = max(0, var.stock - item.qty)
                        
    # Also initialize shipment record for NCM
    pkg_str = ", ".join([f"{to_int(it.get('qty'), 1)}x {to_str(it.get('name'))}" for it in items_data if isinstance(it, dict)]) or "Apparel / Clothes"
    shipment = Shipment(
        order_id=oid,
        customer=order.customer,
        phone=to_str(data.get('phone'), '9847023226') or '9847023226',
        address=to_str(data.get('address'), f"{to_str(data.get('destination'), 'Kathmandu')}, Nepal"),
        ncm_tracking=None,
        dest=to_str(data.get('destination'), 'KATHMANDU') or 'KATHMANDU',
        fbranch=to_str(data.get('fbranch'), 'TINKUNE') or 'TINKUNE',
        package_desc=pkg_str,
        cod=total_val,
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
    new_status = to_str(data.get('status'))
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

@order_bp.route('/api/orders/<oid>', methods=['PUT'])
def update_order(oid):
    order = Order.query.get_or_404(oid)
    data = request.json or {}

    if 'customer' in data: order.customer = to_str(data['customer'], order.customer)
    if 'handle' in data: order.handle = to_str(data['handle'], order.handle)
    if 'status' in data: order.status = to_str(data['status'], order.status)
    if 'total' in data: order.total = to_float(data['total'], order.total)
    if 'advancePaid' in data: order.advance_paid = to_float(data['advancePaid'], order.advance_paid)
    elif 'advance_paid' in data: order.advance_paid = to_float(data['advance_paid'], order.advance_paid)
    if 'date' in data and data['date']: order.date = to_str(data['date'], order.date)

    # Update associated shipment details if provided
    shipment = Shipment.query.filter_by(order_id=oid).first()
    if shipment:
        if 'customer' in data: shipment.customer = to_str(data['customer'], shipment.customer)
        if 'phone' in data: shipment.phone = to_str(data['phone'], shipment.phone)
        if 'address' in data: shipment.address = to_str(data['address'], shipment.address)
        if 'destination' in data: shipment.dest = to_str(data['destination'], shipment.dest)
        if 'fbranch' in data: shipment.fbranch = to_str(data['fbranch'], shipment.fbranch)
        if 'total' in data: shipment.cod = to_float(data['total'], shipment.cod)

    # Optional item updates if passed
    if 'items' in data and isinstance(data['items'], list):
        # Restore stock from old items before replacing
        for old_item in order.items:
            prod = Product.query.filter_by(name=old_item.name).first()
            if prod:
                parts = (old_item.variant or '').split('/')
                size_str = parts[0].strip() if len(parts) >= 1 else ''
                color_str = parts[1].strip() if len(parts) >= 2 else ''
                var = Variant.query.filter_by(product_id=prod.id, size=size_str, color=color_str).first() or \
                      Variant.query.filter_by(product_id=prod.id, size=size_str).first() or \
                      Variant.query.filter_by(product_id=prod.id).first()
                if var:
                    var.stock += old_item.qty

        # Clear old items
        OrderItem.query.filter_by(order_id=oid).delete()

        # Add new items & deduct stock
        items_data = data['items']
        for it in items_data:
            if not isinstance(it, dict):
                continue
            new_item = OrderItem(
                order_id=oid,
                name=to_str(it.get('name'), 'Product') or 'Product',
                variant=to_str(it.get('variant'), 'Standard') or 'Standard',
                qty=to_int(it.get('qty'), 1),
                price=to_float(it.get('price'), 0.0)
            )
            db.session.add(new_item)

            prod = Product.query.filter_by(name=new_item.name).first()
            if prod:
                parts = (new_item.variant or '').split('/')
                size_str = parts[0].strip() if len(parts) >= 1 else ''
                color_str = parts[1].strip() if len(parts) >= 2 else ''
                var = Variant.query.filter_by(product_id=prod.id, size=size_str, color=color_str).first() or \
                      Variant.query.filter_by(product_id=prod.id, size=size_str).first() or \
                      Variant.query.filter_by(product_id=prod.id).first()
                if var:
                    var.stock = max(0, var.stock - new_item.qty)

        if shipment:
            shipment.package_desc = ", ".join([f"{to_int(it.get('qty'),1)}x {to_str(it.get('name'))}" for it in items_data if isinstance(it, dict)]) or "Apparel / Clothes"

    db.session.commit()
    return jsonify({'status': 'success', 'message': 'Order updated successfully', 'order': order.to_dict()})

@order_bp.route('/api/orders/<oid>', methods=['DELETE'])
def delete_order(oid):
    order = Order.query.get_or_404(oid)

    # Restore variant inventory stock for all order items
    for item in order.items:
        prod = Product.query.filter_by(name=item.name).first()
        if prod:
            parts = (item.variant or '').split('/')
            size_str = parts[0].strip() if len(parts) >= 1 else ''
            color_str = parts[1].strip() if len(parts) >= 2 else ''
            var = Variant.query.filter_by(product_id=prod.id, size=size_str, color=color_str).first() or \
                  Variant.query.filter_by(product_id=prod.id, size=size_str).first() or \
                  Variant.query.filter_by(product_id=prod.id).first()
            if var:
                var.stock += item.qty

    # Delete OrderItems, Shipment, and Order
    OrderItem.query.filter_by(order_id=oid).delete()
    Shipment.query.filter_by(order_id=oid).delete()
    db.session.delete(order)

    db.session.commit()
    return jsonify({'status': 'success', 'message': f'Order {oid} deleted successfully & stock restored'})
