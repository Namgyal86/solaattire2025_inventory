from . import db
import json

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    employee_id = db.Column(db.String(50), db.ForeignKey('employees.id'), nullable=True)
    username = db.Column(db.String(80), nullable=False, unique=True)
    password_hash = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(150), nullable=False)
    role = db.Column(db.String(50), default='employee') # 'admin' or 'employee'
    permissions = db.Column(db.Text, default='["inbox","orders","products","offers","shipments"]')
    created = db.Column(db.String(30), nullable=False)

    # Relationship to Employee model
    employee = db.relationship('Employee', backref=db.backref('user_account', uselist=False, lazy=True))

    def get_permissions_list(self):
        try:
            return json.loads(self.permissions) if self.permissions else []
        except Exception:
            return ["inbox", "orders", "products", "offers", "shipments"]

    def to_dict(self):
        return {
            'id': self.id,
            'employee_id': self.employee_id,
            'username': self.username,
            'name': self.name,
            'role': self.role,
            'permissions': self.get_permissions_list(),
            'created': self.created
        }
