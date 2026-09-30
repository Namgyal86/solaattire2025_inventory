import uuid
from flask import Blueprint, jsonify, request
from models import db
from models.product import Product, Variant
from helpers import to_float, to_int, to_str

product_bp = Blueprint('product_bp', __name__)

def generate_unique_pid():
    """Generates a guaranteed non-colliding product ID."""
    existing_products = Product.query.all()
    max_num = 0
    for p in existing_products:
        if p.id:
            cleaned = p.id.lstrip('p_').lstrip('p')
            try:
                num = int(cleaned)
                if num > max_num:
                    max_num = num
            except ValueError:
                pass
    return f"p{max_num + 1}"

def generate_unique_sku():
    """Generates a guaranteed unique SKU fallback string."""
    while True:
        candidate = f"TS-PROD-{uuid.uuid4().hex[:6].upper()}"
        if not Product.query.filter_by(sku=candidate).first():
            return candidate

@product_bp.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products])

@product_bp.route('/api/products', methods=['POST'])
def create_product():
    data = request.json or {}
    
    # 1. Product ID generation
    req_id = to_str(data.get('id'))
    if req_id and not Product.query.get(req_id):
        pid = req_id
    else:
        pid = generate_unique_pid()
        
    # 2. SKU Handling & Duplicate Validation
    req_sku = to_str(data.get('sku'))
    if not req_sku:
        sku = generate_unique_sku()
    else:
        existing = Product.query.filter_by(sku=req_sku).first()
        if existing:
            return jsonify({'error': f'Product with SKU "{req_sku}" already exists.'}), 400
        sku = req_sku
        
    price_val = to_float(data.get('price'), 0.0)
    cost_val = to_float(data.get('cost'), 0.0)
    
    product = Product(
        id=pid,
        name=to_str(data.get('name'), 'New Product') or 'New Product',
        sku=sku,
        category=to_str(data.get('category'), 'Outerwear') or 'Outerwear',
        img=to_str(data.get('img'), 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop') or 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop',
        on_offer=bool(data.get('onOffer', False)),
        price=price_val,
        cost=cost_val,
        stocked_on=to_str(data.get('stockedOn'), '2026-07-28') or '2026-07-28',
        next_restock=to_str(data.get('nextRestock'), '2026-08-30') or '2026-08-30'
    )
    
    db.session.add(product)
    
    variants_data = data.get('variants', [])
    if isinstance(variants_data, list):
        for idx, vdata in enumerate(variants_data):
            if not isinstance(vdata, dict):
                continue
            vid = to_str(vdata.get('id')) or f"v_{pid}_{idx+1}_{uuid.uuid4().hex[:4]}"
            variant = Variant(
                id=vid,
                product_id=pid,
                size=to_str(vdata.get('size'), 'M') or 'M',
                color=to_str(vdata.get('color'), 'Black') or 'Black',
                stock=to_int(vdata.get('stock'), 0),
                reorder=to_int(vdata.get('reorder'), 5)
            )
            db.session.add(variant)
        
    db.session.commit()
    return jsonify(product.to_dict()), 201

@product_bp.route('/api/products/<pid>', methods=['PUT'])
def update_product(pid):
    product = Product.query.get_or_404(pid)
    data = request.json or {}
    
    if 'name' in data:
        product.name = to_str(data['name'], product.name) or product.name
        
    if 'sku' in data:
        new_sku = to_str(data['sku'])
        if new_sku and new_sku != product.sku:
            existing = Product.query.filter_by(sku=new_sku).first()
            if existing:
                return jsonify({'error': f'Product with SKU "{new_sku}" already exists.'}), 400
            product.sku = new_sku
        elif not new_sku:
            # If SKU is updated to empty string, retain existing or generate unique
            pass

    if 'category' in data: product.category = to_str(data['category'], product.category)
    if 'price' in data: product.price = to_float(data['price'], product.price)
    if 'cost' in data: product.cost = to_float(data['cost'], product.cost)
    if 'stockedOn' in data and data['stockedOn']: product.stocked_on = to_str(data['stockedOn'])
    if 'nextRestock' in data and data['nextRestock']: product.next_restock = to_str(data['nextRestock'])
    if 'img' in data and data['img']: product.img = to_str(data['img'])
    if 'onOffer' in data: product.on_offer = bool(data['onOffer'])
    
    if 'variants' in data and isinstance(data['variants'], list):
        Variant.query.filter_by(product_id=pid).delete()
        for idx, vdata in enumerate(data['variants']):
            if not isinstance(vdata, dict):
                continue
            vid = to_str(vdata.get('id')) or f"v_{pid}_{idx+1}_{uuid.uuid4().hex[:4]}"
            variant = Variant(
                id=vid,
                product_id=pid,
                size=to_str(vdata.get('size'), 'M') or 'M',
                color=to_str(vdata.get('color'), 'Black') or 'Black',
                stock=to_int(vdata.get('stock'), 0),
                reorder=to_int(vdata.get('reorder'), 5)
            )
            db.session.add(variant)

    db.session.commit()
    return jsonify(product.to_dict())

@product_bp.route('/api/products/<pid>', methods=['DELETE'])
def delete_product(pid):
    product = Product.query.get_or_404(pid)
    Variant.query.filter_by(product_id=pid).delete()
    db.session.delete(product)
    db.session.commit()
    return jsonify({'status': 'success', 'message': f'Product {pid} deleted successfully'})
