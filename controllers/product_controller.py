from flask import Blueprint, jsonify, request
from models import db
from models.product import Product, Variant

product_bp = Blueprint('product_bp', __name__)

@product_bp.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products])

@product_bp.route('/api/products', methods=['POST'])
def create_product():
    data = request.json or {}
    pid = data.get('id') or f"p{Product.query.count() + 1}"
    
    product = Product(
        id=pid,
        name=data.get('name', 'New Product'),
        sku=data.get('sku', f'TS-XX-{Product.query.count() + 100}'),
        category=data.get('category', 'Outerwear'),
        img=data.get('img', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop'),
        on_offer=data.get('onOffer', False),
        price=float(data.get('price', 0)),
        cost=float(data.get('cost', 0)),
        stocked_on=data.get('stockedOn', '2026-07-28'),
        next_restock=data.get('nextRestock', '2026-08-30')
    )
    
    db.session.add(product)
    
    variants_data = data.get('variants', [])
    for idx, vdata in enumerate(variants_data):
        vid = vdata.get('id') or f"v_{pid}_{idx+1}"
        variant = Variant(
            id=vid,
            product_id=pid,
            size=vdata.get('size', 'M'),
            color=vdata.get('color', 'Black'),
            stock=int(vdata.get('stock', 0)),
            reorder=int(vdata.get('reorder', 5))
        )
        db.session.add(variant)
        
    db.session.commit()
    return jsonify(product.to_dict()), 201

@product_bp.route('/api/products/<pid>', methods=['PUT'])
def update_product(pid):
    product = Product.query.get_or_404(pid)
    data = request.json or {}
    
    if 'name' in data: product.name = data['name']
    if 'sku' in data: product.sku = data['sku']
    if 'category' in data: product.category = data['category']
    if 'price' in data: product.price = float(data['price'])
    if 'cost' in data: product.cost = float(data['cost'])
    if 'stockedOn' in data and data['stockedOn']: product.stocked_on = data['stockedOn']
    if 'nextRestock' in data and data['nextRestock']: product.next_restock = data['nextRestock']
    if 'img' in data and data['img']: product.img = data['img']
    if 'onOffer' in data: product.on_offer = data['onOffer']
    
    if 'variants' in data:
        # Replace variants
        Variant.query.filter_by(product_id=pid).delete()
        for idx, vdata in enumerate(data['variants']):
            vid = vdata.get('id') or f"v_{pid}_{idx+1}"
            variant = Variant(
                id=vid,
                product_id=pid,
                size=vdata.get('size', 'M'),
                color=vdata.get('color', 'Black'),
                stock=int(vdata.get('stock', 0)),
                reorder=int(vdata.get('reorder', 5))
            )
            db.session.add(variant)

    db.session.commit()
    return jsonify(product.to_dict())
