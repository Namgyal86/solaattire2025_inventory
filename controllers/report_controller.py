from flask import Blueprint, jsonify
from models import db
from models.order import Order, OrderItem
from models.product import Product
from models.offer import Offer

report_bp = Blueprint('report_bp', __name__)

@report_bp.route('/api/reports/summary', methods=['GET'])
def get_reports_summary():
    orders = Order.query.all()
    products = Product.query.all()
    offers = Offer.query.all()

    total_revenue = sum(o.total for o in orders)
    
    # Calculate COGS dynamically from actual SQL database order items
    total_cogs = 0
    for o in orders:
        for it in o.items:
            prod = Product.query.filter_by(name=it.name).first()
            if prod:
                total_cogs += prod.cost * it.qty

    gross_profit = total_revenue - total_cogs
    gross_margin_pct = round((gross_profit / total_revenue) * 100) if total_revenue > 0 else 0
    offer_revenue = sum(o.revenue for o in offers)

    return jsonify({
        'totalRevenue': total_revenue,
        'totalCOGS': total_cogs,
        'grossProfit': gross_profit,
        'grossMarginPct': gross_margin_pct,
        'offerRevenue': offer_revenue,
        'orderCount': len(orders),
        'productCount': len(products)
    })
