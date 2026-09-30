from flask import Blueprint, jsonify
from models import db
from models.order import Order, OrderItem
from models.product import Product
from models.offer import Offer
from models.expense import Expense

report_bp = Blueprint('report_bp', __name__)

@report_bp.route('/api/reports/summary', methods=['GET'])
def get_reports_summary():
    orders = Order.query.all()
    products = Product.query.all()
    offers = Offer.query.all()
    expenses = Expense.query.all()

    total_revenue = sum(o.total or 0.0 for o in orders)
    total_expenses = sum(e.amount or 0.0 for e in expenses)
    
    # Calculate COGS dynamically from actual SQL database order items
    total_cogs = 0.0
    for o in orders:
        for it in o.items:
            prod = Product.query.filter_by(name=it.name).first()
            if prod:
                total_cogs += (prod.cost or 0.0) * it.qty

    gross_profit = total_revenue - total_cogs
    gross_margin_pct = round((gross_profit / total_revenue) * 100) if total_revenue > 0 else 0
    net_profit = gross_profit - total_expenses
    offer_revenue = sum(o.revenue or 0.0 for o in offers)

    # Calculate unsold stock valuation (Cost & Retail)
    unsold_stock_cost = 0.0
    unsold_stock_retail = 0.0
    for p in products:
        for v in (p.variants or []):
            st = max(0, v.stock or 0)
            unsold_stock_cost += st * (p.cost or 0.0)
            unsold_stock_retail += st * (p.price or 0.0)

    # Net Available Cash Balance = Sales Revenue Inflow - Operating Expenses Outflow
    net_cash_balance = total_revenue - total_expenses

    return jsonify({
        'totalRevenue': total_revenue,
        'totalExpenses': total_expenses,
        'totalCOGS': total_cogs,
        'grossProfit': gross_profit,
        'netProfit': net_profit,
        'grossMarginPct': gross_margin_pct,
        'offerRevenue': offer_revenue,
        'unsoldStockCost': unsold_stock_cost,
        'unsoldStockRetail': unsold_stock_retail,
        'netCashBalance': net_cash_balance,
        'orderCount': len(orders),
        'productCount': len(products),
        'expenseCount': len(expenses)
    })
