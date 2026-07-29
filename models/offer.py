from . import db

class Offer(db.Model):
    __tablename__ = 'offers'

    id = db.Column(db.String(50), primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    status = db.Column(db.String(50), default='scheduled')  # active, scheduled, expired
    start = db.Column(db.String(20), nullable=False)
    end = db.Column(db.String(20), nullable=False)
    redemptions = db.Column(db.Integer, default=0)
    revenue = db.Column(db.Float, default=0)

    items = db.relationship('OfferItem', backref='offer', cascade='all, delete-orphan', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'status': self.status,
            'start': self.start,
            'end': self.end,
            'redemptions': self.redemptions,
            'revenue': self.revenue,
            'items': [item.to_dict() for item in self.items]
        }


class OfferItem(db.Model):
    __tablename__ = 'offer_items'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    offer_id = db.Column(db.String(50), db.ForeignKey('offers.id'), nullable=False)
    product_id = db.Column(db.String(50), nullable=False)
    discount_type = db.Column(db.String(20), nullable=False)  # 'percent' or 'flat'
    value = db.Column(db.Float, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'offerId': self.offer_id,
            'productId': self.product_id,
            'type': self.discount_type,
            'value': self.value
        }
