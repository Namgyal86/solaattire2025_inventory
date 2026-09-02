from . import db
from datetime import datetime

class Expense(db.Model):
    __tablename__ = 'expenses'

    id = db.Column(db.String(50), primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(100), nullable=False, default='Miscellaneous')
    amount = db.Column(db.Float, nullable=False, default=0.0)
    date = db.Column(db.String(20), nullable=False)
    payment_method = db.Column(db.String(50), default='Cash')
    notes = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'category': self.category,
            'amount': self.amount,
            'date': self.date,
            'paymentMethod': self.payment_method,
            'notes': self.notes or '',
            'createdAt': self.created_at.strftime('%Y-%m-%d %H:%M') if self.created_at else self.date
        }
