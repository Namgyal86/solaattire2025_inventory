import os
from flask import Flask, render_template, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

from models import db
from controllers.product_controller import product_bp
from controllers.order_controller import order_bp
from controllers.offer_controller import offer_bp
from controllers.shipment_controller import shipment_bp
from controllers.employee_controller import employee_bp
from controllers.report_controller import report_bp
from controllers.auth_controller import auth_bp
from controllers.expense_controller import expense_bp

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'sola_attire_secret_2026')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///thulo_studio.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize DB with App
db.init_app(app)

# Register Blueprints
app.register_blueprint(product_bp)
app.register_blueprint(order_bp)
app.register_blueprint(offer_bp)
app.register_blueprint(shipment_bp)
app.register_blueprint(employee_bp)
app.register_blueprint(report_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(expense_bp)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/health')
def health():
    return jsonify({"status": "healthy", "app": "Sola Attire Admin Console", "stack": "Python Flask MVC + SQLite"})

@app.route('/api/search')
def global_search():
    from models.product import Product
    from models.order import Order
    from models.shipment import Shipment
    from flask import request

    q = request.args.get('q', '').strip()
    if not q:
        return jsonify({"products": [], "orders": [], "shipments": []})
    
    products = Product.query.filter(Product.name.ilike(f'%{q}%') | Product.sku.ilike(f'%{q}%') | Product.category.ilike(f'%{q}%')).limit(5).all()
    orders = Order.query.filter(Order.id.ilike(f'%{q}%') | Order.customer.ilike(f'%{q}%') | Order.handle.ilike(f'%{q}%')).limit(5).all()
    shipments = Shipment.query.filter(Shipment.order_id.ilike(f'%{q}%') | Shipment.dest.ilike(f'%{q}%')).limit(5).all()

    return jsonify({
        "products": [p.to_dict() for p in products],
        "orders": [o.to_dict() for o in orders],
        "shipments": [s.to_dict() for s in shipments]
    })

@app.route('/api/sync-google-sheet', methods=['POST', 'GET'])
def sync_sheet():
    from services.sheet_sync import sync_google_sheet_data
    res = sync_google_sheet_data()
    return jsonify(res)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    port = int(os.getenv("PORT", 5000))
    print(f"Starting Sola Attire Python Flask MVC Application on http://localhost:{port}")
    app.run(host='0.0.0.0', port=port, debug=True)
