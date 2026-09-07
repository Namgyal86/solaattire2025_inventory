from app import app
from models import db
from models.expense import Expense
from services.sheet_sync import sync_google_sheet_data

def seed_expenses():
    # Real Sola Attire Operational Expenses
    Expense.query.delete()
    
    real_expenses = [
        {
            'id': 'EXP-1001',
            'title': 'Store Rent & Property Utilities (May - Aug 2026)',
            'category': 'Rent & Utilities',
            'amount': 55000.0,
            'date': '2026-05-01',
            'payment_method': 'Bank Transfer',
            'notes': 'Physical store location rental & electricity/internet utilities'
        },
        {
            'id': 'EXP-1002',
            'title': 'Sales & Store Staff Salaries',
            'category': 'Salaries & Wages',
            'amount': 45000.0,
            'date': '2026-06-01',
            'payment_method': 'Bank Transfer',
            'notes': 'Monthly staff wages for store operations & order fulfillment'
        },
        {
            'id': 'EXP-1003',
            'title': 'Facebook & Instagram Meta Ad Boosting',
            'category': 'Marketing & Ads',
            'amount': 32000.0,
            'date': '2026-06-15',
            'payment_method': 'Credit Card',
            'notes': 'Product ad campaigns & social media page boosting'
        },
        {
            'id': 'EXP-1004',
            'title': 'Courier Express Shipping & Advance Deposit',
            'category': 'Logistics & Shipping',
            'amount': 12065.31,
            'date': '2026-07-01',
            'payment_method': 'eSewa / Khalti',
            'notes': 'Delivery partner dispatch charges and COD handling fees'
        },
        {
            'id': 'EXP-1005',
            'title': 'Branded Polybags, Tags & Packaging Materials',
            'category': 'Packaging & Supplies',
            'amount': 5000.0,
            'date': '2026-07-10',
            'payment_method': 'Cash',
            'notes': 'Sola Attire custom printed packaging bags and garment tags'
        }
    ]
    
    for item in real_expenses:
        exp = Expense(
            id=item['id'],
            title=item['title'],
            category=item['category'],
            amount=item['amount'],
            date=item['date'],
            payment_method=item['payment_method'],
            notes=item['notes']
        )
        db.session.add(exp)
    
    db.session.commit()
    print("Real Operational Expenses seeded successfully (Total: Rs. 149,065.31)!")

if __name__ == '__main__':
    with app.app_context():
        print("Initializing & Syncing Real Sola Attire Store Data...")
        res = sync_google_sheet_data()
        seed_expenses()
        print("Data Sync Result:", res)
        print("Real business inventory, sales & expense data loaded successfully!")
