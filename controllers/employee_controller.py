from flask import Blueprint, jsonify, request
from models import db
from models.employee import Employee, LeaveRequest

employee_bp = Blueprint('employee_bp', __name__)

@employee_bp.route('/api/employees', methods=['GET'])
def get_employees():
    employees = Employee.query.all()
    return jsonify([e.to_dict() for e in employees])

@employee_bp.route('/api/employees', methods=['POST'])
def create_employee():
    data = request.json or {}
    name = data.get('name', '').strip()
    role = data.get('role', 'Sales Associate').strip()
    joined = data.get('joined', '2026-07-28').strip()
    attendance = data.get('attendance', 'Present').strip()
    performance = int(data.get('performance', 90))

    if not name:
        return jsonify({'error': 'Employee name is required'}), 400

    import random
    emp_id = f"e{random.randint(100, 999)}"
    emp = Employee(
        id=emp_id,
        name=name,
        role=role,
        joined=joined,
        attendance=attendance,
        performance=performance
    )
    db.session.add(emp)
    db.session.commit()
    return jsonify({'message': 'Employee created successfully', 'employee': emp.to_dict()}), 201

@employee_bp.route('/api/employees/<eid>', methods=['PUT'])
def update_employee(eid):
    emp = Employee.query.get_or_404(eid)
    data = request.json or {}
    emp.name = data.get('name', emp.name)
    emp.role = data.get('role', emp.role)
    emp.joined = data.get('joined', emp.joined)
    emp.attendance = data.get('attendance', emp.attendance)
    emp.performance = int(data.get('performance', emp.performance))
    if 'base_pay' in data: emp.base_pay = float(data.get('base_pay'))
    if 'allowance' in data: emp.allowance = float(data.get('allowance'))
    db.session.commit()
    return jsonify({'message': 'Employee updated successfully', 'employee': emp.to_dict()})

@employee_bp.route('/api/employees/<eid>/payroll', methods=['PUT'])
def update_employee_payroll(eid):
    emp = Employee.query.get_or_404(eid)
    data = request.json or {}
    emp.base_pay = float(data.get('base_pay', emp.base_pay or 30000.0))
    emp.allowance = float(data.get('allowance', emp.allowance or 2500.0))
    db.session.commit()
    return jsonify({'message': 'Payroll details updated successfully', 'employee': emp.to_dict()})

@employee_bp.route('/api/employees/<eid>', methods=['DELETE'])
def delete_employee(eid):
    emp = Employee.query.get_or_404(eid)
    db.session.delete(emp)
    db.session.commit()
    return jsonify({'message': 'Employee deleted successfully'})

@employee_bp.route('/api/leave-requests', methods=['GET'])
def get_leave_requests():
    leaves = LeaveRequest.query.all()
    return jsonify([l.to_dict() for l in leaves])

@employee_bp.route('/api/leave-requests', methods=['POST'])
def create_leave_request():
    data = request.json or {}
    name = data.get('name', '').strip()
    leave_type = data.get('type', 'Sick Leave').strip()
    dates = data.get('dates', '').strip()
    reason = data.get('reason', '').strip()

    if not name or not dates:
        return jsonify({'error': 'Employee name and dates are required'}), 400

    leave = LeaveRequest(
        employee_name=name,
        leave_type=leave_type,
        dates=dates,
        reason=reason,
        status='pending'
    )
    db.session.add(leave)
    
    # Update employee attendance to 'On Leave' if active
    emp = Employee.query.filter(Employee.name.ilike(f'%{name}%')).first()
    if emp:
        emp.attendance = 'On Leave'

    db.session.commit()
    return jsonify({'message': 'Leave request submitted successfully', 'leave': leave.to_dict()}), 201

@employee_bp.route('/api/leave-requests/<int:lid>/status', methods=['PUT'])
def update_leave_status(lid):
    leave = LeaveRequest.query.get_or_404(lid)
    data = request.json or {}
    new_status = data.get('status', 'approved').lower()
    leave.status = new_status
    
    emp = Employee.query.filter(Employee.name.ilike(f'%{leave.employee_name}%')).first()
    if emp:
        if new_status == 'approved':
            emp.attendance = 'On Leave'
        elif new_status in ['rejected', 'cancelled']:
            emp.attendance = 'Present'

    db.session.commit()
    return jsonify({'message': f'Leave request {new_status}', 'leave': leave.to_dict()})

@employee_bp.route('/api/leave-requests/<int:lid>/approve', methods=['PUT'])
def approve_leave(lid):
    leave = LeaveRequest.query.get_or_404(lid)
    leave.status = 'approved'
    db.session.commit()
    return jsonify(leave.to_dict())

@employee_bp.route('/api/leave-requests/<int:lid>', methods=['DELETE'])
def delete_leave_request(lid):
    leave = LeaveRequest.query.get_or_404(lid)
    db.session.delete(leave)
    db.session.commit()
    return jsonify({'message': 'Leave request deleted successfully'})
