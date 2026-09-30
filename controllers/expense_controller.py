from datetime import datetime
from flask import Blueprint, jsonify, request
from models import db
from models.expense import Expense
from helpers import to_float, to_str

expense_bp = Blueprint('expense_bp', __name__)

def generate_unique_eid():
    """Auto-generates guaranteed unique Expense ID (EXP-1001, EXP-1002...)."""
    existing = Expense.query.all()
    max_num = 1000
    for e in existing:
        if e.id and 'EXP-' in e.id:
            try:
                num = int(e.id.split('EXP-')[1])
                if num > max_num:
                    max_num = num
            except (ValueError, IndexError):
                pass
    return f"EXP-{max_num + 1}"

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
    
    eid = generate_unique_eid()
    exp_date = to_str(data.get('date')) or datetime.now().strftime('%Y-%m-%d')
    amount_val = to_float(data.get('amount'), 0.0)
    
    expense = Expense(
        id=eid,
        title=to_str(data.get('title'), 'Business Expense') or 'Business Expense',
        category=to_str(data.get('category'), 'Miscellaneous') or 'Miscellaneous',
        amount=amount_val,
        date=exp_date,
        payment_method=to_str(data.get('paymentMethod'), 'Cash') or 'Cash',
        notes=to_str(data.get('notes'), '')
    )
    db.session.add(expense)
    db.session.commit()
    
    return jsonify({"status": "success", "message": "Expense recorded successfully", "expense": expense.to_dict()}), 201

@expense_bp.route('/api/expenses/<eid>', methods=['PUT'])
def update_expense(eid):
    expense = Expense.query.get_or_404(eid)
    data = request.json or {}
    
    if 'title' in data: expense.title = to_str(data['title'], expense.title) or 'Business Expense'
    if 'category' in data: expense.category = to_str(data['category'], expense.category) or 'Miscellaneous'
    if 'amount' in data: expense.amount = to_float(data['amount'], expense.amount)
    if 'date' in data and data['date']: expense.date = to_str(data['date'], expense.date)
    if 'paymentMethod' in data: expense.payment_method = to_str(data['paymentMethod'], expense.payment_method)
    if 'notes' in data: expense.notes = to_str(data['notes'], expense.notes)
    
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
    total_expense = sum((e.amount or 0.0) for e in expenses)
    
    by_category = {}
    for e in expenses:
        cat = e.category or 'Miscellaneous'
        amt = e.amount or 0.0
        by_category[cat] = by_category.get(cat, 0.0) + amt
        
    return jsonify({
        "totalExpense": total_expense,
        "count": len(expenses),
        "byCategory": by_category
    })
