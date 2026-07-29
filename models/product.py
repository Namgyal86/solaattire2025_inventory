from . import db
from datetime import datetime

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.String(50), primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    sku = db.Column(db.String(50), nullable=False, unique=True)
    category = db.Column(db.String(100), nullable=False)
    img = db.Column(db.Text, nullable=True)
    on_offer = db.Column(db.Boolean, default=False)
    price = db.Column(db.Float, nullable=False)
    cost = db.Column(db.Float, nullable=False)
    stocked_on = db.Column(db.String(20), nullable=True)
    next_restock = db.Column(db.String(20), nullable=True)

    variants = db.relationship('Variant', backref='product', cascade='all, delete-orphan', lazy=True)

    @property
    def margin_percentage(self):
        if not self.price or self.price == 0:
            return 0
        return round(((self.price - self.cost) / self.price) * 100)

    @property
    def profit_per_unit(self):
        return self.price - self.cost

    @property
    def total_stock(self):
        return sum(v.stock for v in self.variants)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'sku': self.sku,
            'category': self.category,
            'img': self.img,
            'onOffer': self.on_offer,
            'price': self.price,
            'cost': self.cost,
            'margin': self.margin_percentage,
            'profitPerUnit': self.profit_per_unit,
            'stockedOn': self.stocked_on,
            'nextRestock': self.next_restock,
            'variants': [v.to_dict() for v in self.variants]
        }


class Variant(db.Model):
    __tablename__ = 'variants'

    id = db.Column(db.String(50), primary_key=True)
    product_id = db.Column(db.String(50), db.ForeignKey('products.id'), nullable=False)
    size = db.Column(db.String(50), nullable=False)
    color = db.Column(db.String(50), nullable=False)
    stock = db.Column(db.Integer, default=0)
    reorder = db.Column(db.Integer, default=5)

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.product_id,
            'size': self.size,
            'color': self.color,
            'stock': self.stock,
            'reorder': self.reorder
        }
