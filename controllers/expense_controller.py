from datetime import datetime
from flask import Blueprint, jsonify, request
from models import db
from models.expense import Expense

expense_bp = Blueprint('expense_bp', __name__)

@expense_bp.route('/api/expenses', methods=['GET'])
def get_expenses():
    expenses = Expense.query.order_by(Expense.date.desc(), Expense.id.desc()).all()
    return jsonify([e.to_dict() for e in expenses])

@expense_bp.route('/api/expenses/<eid>', methods=['GET'])
def get_expense(eid):
    expense = Expense.query.get_or_404(eid)
    return jsonify(expense.to_dict())

@expense_bp.route('/api/expenses', methods=['POST'])
def create_expense():
    data = request.json or {}
    
    # Auto-generate unique Expense ID (EXP-1001, EXP-1002...)
    existing = Expense.query.all()
    max_num = 1000
    for e in existing:
        if e.id and e.id.startswith('EXP-'):
            try:
                num = int(e.id.split('EXP-')[1])
                if num > max_num:
                    max_num = num
            except ValueError:
                pass
    eid = f"EXP-{max_num + 1}"
    
    exp_date = data.get('date') or datetime.now().strftime('%Y-%m-%d')
    
    expense = Expense(
        id=eid,
        title=data.get('title', 'Business Expense'),
        category=data.get('category', 'Miscellaneous'),
        amount=float(data.get('amount', 0.0)),
        date=exp_date,
        payment_method=data.get('paymentMethod', 'Cash'),
        notes=data.get('notes', '')
    )
    db.session.add(expense)
    db.session.commit()
    
    return jsonify({"status": "success", "message": "Expense recorded successfully", "expense": expense.to_dict()}), 201

@expense_bp.route('/api/expenses/<eid>', methods=['PUT'])
def update_expense(eid):
    expense = Expense.query.get_or_404(eid)
    data = request.json or {}
    
    if 'title' in data: expense.title = data['title']
    if 'category' in data: expense.category = data['category']
    if 'amount' in data: expense.amount = float(data['amount'])
    if 'date' in data: expense.date = data['date']
    if 'paymentMethod' in data: expense.payment_method = data['paymentMethod']
    if 'notes' in data: expense.notes = data['notes']
    
    db.session.commit()
    return jsonify({"status": "success", "message": "Expense updated successfully", "expense": expense.to_dict()})

@expense_bp.route('/api/expenses/<eid>', methods=['DELETE'])
def delete_expense(eid):
    expense = Expense.query.get_or_404(eid)
    db.session.delete(expense)
    db.session.commit()
    return jsonify({"status": "success", "message": "Expense deleted successfully"})

@expense_bp.route('/api/expenses/summary', methods=['GET'])
def get_expense_summary():
    expenses = Expense.query.all()
    total_expense = sum(e.amount for e in expenses)
    
    by_category = {}
    for e in expenses:
        by_category[e.category] = by_category.get(e.category, 0.0) + e.amount
        
    return jsonify({
        "totalExpense": total_expense,
        "count": len(expenses),
        "byCategory": by_category
    })
