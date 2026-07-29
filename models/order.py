from . import db
from datetime import datetime

class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.String(50), primary_key=True)
    customer = db.Column(db.String(150), nullable=False)
    handle = db.Column(db.String(100), nullable=False)
    offer_name = db.Column(db.String(150), nullable=True)
    offer_amount = db.Column(db.Float, default=0)
    status = db.Column(db.String(50), default='pending')  # pending, confirmed, shipped, delivered
    date = db.Column(db.String(20), nullable=False)
    total = db.Column(db.Float, nullable=False)

    items = db.relationship('OrderItem', backref='order', cascade='all, delete-orphan', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'customer': self.customer,
            'handle': self.handle,
            'offer': {'name': self.offer_name, 'amount': self.offer_amount} if self.offer_name else None,
            'status': self.status,
            'date': self.date,
            'total': self.total,
            'items': [item.to_dict() for item in self.items]
        }


class OrderItem(db.Model):
    __tablename__ = 'order_items'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    order_id = db.Column(db.String(50), db.ForeignKey('orders.id'), nullable=False)
    name = db.Column(db.String(150), nullable=False)
    variant = db.Column(db.String(100), nullable=False)
    qty = db.Column(db.Integer, nullable=False, default=1)
    price = db.Column(db.Float, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'orderId': self.order_id,
            'name': self.name,
            'variant': self.variant,
            'qty': self.qty,
            'price': self.price
        }
