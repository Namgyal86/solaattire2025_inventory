from . import db

class Shipment(db.Model):
    __tablename__ = 'shipments'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    order_id = db.Column(db.String(50), nullable=False, unique=True)
    customer = db.Column(db.String(150), nullable=False)
    phone = db.Column(db.String(50), nullable=True)
    address = db.Column(db.String(255), nullable=True)
    ncm_tracking = db.Column(db.String(100), nullable=True)  # NCM-XXXXX
    dest = db.Column(db.String(100), nullable=False)        # Destination Branch
    fbranch = db.Column(db.String(100), nullable=True, default='TINKUNE') # Pickup / Origin Branch
    package_desc = db.Column(db.String(255), nullable=True) # Package description
    cod = db.Column(db.Float, default=0.0)
    status = db.Column(db.String(50), default='not-created')  # not-created, in-transit, dispatched, delivered
    created = db.Column(db.String(20), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'order': self.order_id,
            'customer': self.customer,
            'phone': self.phone or '9847023226',
            'address': self.address or f"{self.dest}, Nepal",
            'ncm': self.ncm_tracking,
            'dest': self.dest,
            'fbranch': self.fbranch or 'TINKUNE',
            'package_desc': self.package_desc or 'Apparel / Clothes',
            'cod': self.cod if self.cod is not None else 0.0,
            'status': self.status,
            'created': self.created
        }

class CODTransfer(db.Model):
    __tablename__ = 'cod_transfers'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    request_id = db.Column(db.String(50), nullable=False, unique=True)
    bank_name = db.Column(db.String(100), nullable=False)
    account_name = db.Column(db.String(150), nullable=False)
    account_number = db.Column(db.String(50), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(50), default='Pending Bank Credit')
    remarks = db.Column(db.String(255), nullable=True)
    date = db.Column(db.String(30), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'request_id': self.request_id,
            'bank_name': self.bank_name,
            'account_name': self.account_name,
            'account_number': self.account_number,
            'amount': self.amount,
            'status': self.status,
            'remarks': self.remarks or '',
            'date': self.date
        }
