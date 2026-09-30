import random
from flask import Blueprint, jsonify, request
from models import db
from models.employee import Employee, LeaveRequest
from helpers import to_float, to_int, to_str

employee_bp = Blueprint('employee_bp', __name__)

def generate_unique_empid():
    """Generates guaranteed unique Employee ID (EMP-101, EMP-102...)."""
    existing = Employee.query.all()
    max_num = 100
    for e in existing:
        if e.id and 'e' in e.id.lower():
            try:
                cleaned = e.id.lower().replace('emp-', '').replace('e', '')
                num = int(cleaned)
                if num > max_num:
                    max_num = num
            except ValueError:
                pass
    return f"e{max_num + 1}"

@employee_bp.route('/api/employees', methods=['GET'])
def get_employees():
    employees = Employee.query.all()
    return jsonify([e.to_dict() for e in employees])

@employee_bp.route('/api/employees', methods=['POST'])
def create_employee():
    data = request.json or {}
    name = to_str(data.get('name'))
    role = to_str(data.get('role'), 'Sales Associate') or 'Sales Associate'
    joined = to_str(data.get('joined'), '2026-07-28') or '2026-07-28'
    attendance = to_str(data.get('attendance'), 'Present') or 'Present'
    performance = to_int(data.get('performance'), 90)

    if not name:
        return jsonify({'error': 'Employee name is required'}), 400

    emp_id = generate_unique_empid()
    emp = Employee(
        id=emp_id,
        name=name,
        role=role,
        joined=joined,
        attendance=attendance,
        performance=performance,
        base_pay=to_float(data.get('base_pay'), 30000.0),
        allowance=to_float(data.get('allowance'), 2500.0)
    )
    db.session.add(emp)
    db.session.commit()
    return jsonify({'message': 'Employee created successfully', 'employee': emp.to_dict()}), 201

@employee_bp.route('/api/employees/<eid>', methods=['PUT'])
def update_employee(eid):
    emp = Employee.query.get_or_404(eid)
    data = request.json or {}
    
    if 'name' in data: emp.name = to_str(data['name'], emp.name) or emp.name
    if 'role' in data: emp.role = to_str(data['role'], emp.role) or emp.role
    if 'joined' in data and data['joined']: emp.joined = to_str(data['joined'], emp.joined)
    if 'attendance' in data: emp.attendance = to_str(data['attendance'], emp.attendance)
    if 'performance' in data: emp.performance = to_int(data['performance'], emp.performance)
    if 'base_pay' in data: emp.base_pay = to_float(data['base_pay'], emp.base_pay or 30000.0)
    if 'allowance' in data: emp.allowance = to_float(data['allowance'], emp.allowance or 2500.0)
    
    db.session.commit()
    return jsonify({'message': 'Employee updated successfully', 'employee': emp.to_dict()})

@employee_bp.route('/api/employees/<eid>/payroll', methods=['PUT'])
def update_employee_payroll(eid):
    emp = Employee.query.get_or_404(eid)
    data = request.json or {}
    emp.base_pay = to_float(data.get('base_pay'), emp.base_pay or 30000.0)
    emp.allowance = to_float(data.get('allowance'), emp.allowance or 2500.0)
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
    name = to_str(data.get('name'))
    leave_type = to_str(data.get('type'), 'Sick Leave') or 'Sick Leave'
    dates = to_str(data.get('dates'))
    reason = to_str(data.get('reason'))

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
    new_status = to_str(data.get('status'), 'approved').lower()
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
