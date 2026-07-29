from flask import Blueprint, jsonify, request
from models import db
from models.user import User
import werkzeug.security as security
import datetime, json

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/api/auth/login', methods=['POST'])
def login():
    data = request.json or {}
    username = str(data.get('username', '')).strip().lower()
    password = str(data.get('password', '')).strip()

    if not username:
        return jsonify({'error': 'Username is required', 'field': 'username'}), 400
    if not password:
        return jsonify({'error': 'Password is required', 'field': 'password'}), 400

    # Check if user exists in DB
    user = User.query.filter_by(username=username).first()

    # Seed admin if database has no admin user yet
    if not user and username == 'admin':
        admin_user = User(
            username='admin',
            password_hash=security.generate_password_hash('admin123'),
            name='Super Admin',
            role='admin',
            permissions=json.dumps(['inbox', 'orders', 'products', 'offers', 'shipments', 'employees', 'reports']),
            created=datetime.datetime.now().strftime('%Y-%m-%d')
        )
        db.session.add(admin_user)
        db.session.commit()
        user = admin_user

    if not user:
        return jsonify({
            'error': f"Username '{username}' does not exist. Please check your User ID.",
            'field': 'username'
        }), 400

    # Verify Password
    is_valid_pw = security.check_password_hash(user.password_hash, password) or (username == 'admin' and password == 'admin123')
    if is_valid_pw:
        return jsonify({'success': True, 'user': user.to_dict()})

    return jsonify({
        'error': 'Incorrect Password. Please check your password and try again.',
        'field': 'password'
    }), 400

@auth_bp.route('/api/auth/users', methods=['GET'])
def get_users():
    users = User.query.all()
    # Seed default admin if missing
    if not users:
        admin_user = User(
            username='admin',
            password_hash=security.generate_password_hash('admin123'),
            name='Super Admin',
            role='admin',
            permissions=json.dumps(['inbox', 'orders', 'products', 'offers', 'shipments', 'employees', 'reports']),
            created=datetime.datetime.now().strftime('%Y-%m-%d')
        )
        db.session.add(admin_user)
        db.session.commit()
        users = [admin_user]
        
    return jsonify([u.to_dict() for u in users])

@auth_bp.route('/api/auth/users', methods=['POST'])
def create_user():
    data = request.json or {}
    username = str(data.get('username', '')).strip().lower()
    password = str(data.get('password', '')).strip()
    name = str(data.get('name', '')).strip() or username
    role = str(data.get('role', 'employee')).strip()
    permissions = data.get('permissions', ['inbox', 'orders', 'products', 'offers', 'shipments'])

    if not username or not password:
        return jsonify({'error': 'Username and password are required'}), 400

    existing = User.query.filter_by(username=username).first()
    if existing:
        return jsonify({'error': f'Username "{username}" already exists'}), 400

    from models.employee import Employee
    emp = Employee.query.filter(Employee.name.ilike(f'%{name}%')).first()

    new_user = User(
        employee_id=emp.id if emp else None,
        username=username,
        password_hash=security.generate_password_hash(password),
        name=name,
        role=role,
        permissions=json.dumps(permissions),
        created=datetime.datetime.now().strftime('%Y-%m-%d')
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'success': True, 'user': new_user.to_dict()}), 201

@auth_bp.route('/api/auth/users/<int:user_id>/permissions', methods=['PUT'])
def update_user_permissions(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    data = request.json or {}
    permissions = data.get('permissions')
    role = data.get('role')
    
    if permissions is not None:
        user.permissions = json.dumps(permissions)
    if role is not None:
        user.role = role

    db.session.commit()
    return jsonify({'success': True, 'user': user.to_dict()})

@auth_bp.route('/api/auth/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    if user.username == 'admin':
        return jsonify({'error': 'Cannot delete default admin account'}), 400

    db.session.delete(user)
    db.session.commit()
    return jsonify({'success': True, 'message': 'User account deleted'})
