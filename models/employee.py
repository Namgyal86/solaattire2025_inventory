from . import db

class Employee(db.Model):
    __tablename__ = 'employees'

    id = db.Column(db.String(50), primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    role = db.Column(db.String(100), nullable=False)
    joined = db.Column(db.String(20), nullable=False)
    attendance = db.Column(db.String(50), default='Present')  # Present, On Leave, Absent
    performance = db.Column(db.Integer, default=85)
    base_pay = db.Column(db.Float, default=30000.0)
    allowance = db.Column(db.Float, default=2500.0)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'role': self.role,
            'joined': self.joined,
            'attendance': self.attendance,
            'performance': self.performance,
            'base_pay': self.base_pay or 30000.0,
            'allowance': self.allowance or 2500.0
        }


class LeaveRequest(db.Model):
    __tablename__ = 'leave_requests'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    employee_id = db.Column(db.String(50), db.ForeignKey('employees.id'), nullable=True)
    employee_name = db.Column(db.String(150), nullable=False)
    leave_type = db.Column(db.String(100), nullable=False)
    dates = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(50), default='pending')  # pending, approved, rejected
    reason = db.Column(db.String(255), default='')

    # Relationship to Employee model
    employee = db.relationship('Employee', backref=db.backref('leave_requests', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'employee_id': self.employee_id,
            'name': self.employee_name,
            'type': self.leave_type,
            'dates': self.dates,
            'status': self.status,
            'reason': self.reason or ''
        }
