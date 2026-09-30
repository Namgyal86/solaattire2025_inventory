import unittest
import json
from app import app
from models import db
from models.product import Product

class TestFormHardening(unittest.TestCase):
    def setUp(self):
        self.app = app
        self.client = app.test_client()
        self.ctx = app.app_context()
        self.ctx.push()

    def tearDown(self):
        self.ctx.pop()

    def test_create_product_empty_sku(self):
        payload = {
            "name": "Empty SKU Product Test",
            "sku": "",
            "category": "Test Cat",
            "price": "",
            "cost": ""
        }
        res = self.client.post('/api/products', data=json.dumps(payload), content_type='application/json')
        self.assertEqual(res.status_code, 201)
        data = res.get_json()
        self.assertTrue(data['sku'].startswith('TS-PROD-'))
        self.assertEqual(data['price'], 0.0)
        self.assertEqual(data['cost'], 0.0)

    def test_create_product_duplicate_sku(self):
        p1 = {
            "name": "Unique SKU Product",
            "sku": "UNIQUE-TEST-SKU-999",
            "price": "100"
        }
        res1 = self.client.post('/api/products', data=json.dumps(p1), content_type='application/json')
        self.assertIn(res1.status_code, [201, 400])
        
        p2 = {
            "name": "Duplicate SKU Product",
            "sku": "UNIQUE-TEST-SKU-999",
            "price": "200"
        }
        res2 = self.client.post('/api/products', data=json.dumps(p2), content_type='application/json')
        self.assertEqual(res2.status_code, 400)
        data2 = res2.get_json()
        self.assertIn('already exists', data2.get('error', ''))

    def test_create_order_empty_fields(self):
        payload = {
            "customer": "Hardening Order Customer",
            "total": "",
            "advancePaid": "",
            "items": [
                {"name": "Item 1", "qty": "", "price": ""}
            ]
        }
        res = self.client.post('/api/orders', data=json.dumps(payload), content_type='application/json')
        self.assertEqual(res.status_code, 201)
        data = res.get_json()
        self.assertIn('order', data)
        self.assertEqual(data['order']['total'], 0.0)
        self.assertEqual(data['order']['advancePaid'], 0.0)

    def test_create_expense_empty_amount(self):
        payload = {
            "title": "Hardening Expense Test",
            "amount": "",
            "category": ""
        }
        res = self.client.post('/api/expenses', data=json.dumps(payload), content_type='application/json')
        self.assertEqual(res.status_code, 201)
        data = res.get_json()
        self.assertEqual(data['expense']['amount'], 0.0)
        self.assertEqual(data['expense']['category'], 'Miscellaneous')

    def test_create_offer_empty_value(self):
        payload = {
            "name": "Hardening Offer Test",
            "items": [
                {"productId": "p1", "type": "percent", "value": ""}
            ]
        }
        res = self.client.post('/api/offers', data=json.dumps(payload), content_type='application/json')
        self.assertEqual(res.status_code, 201)
        data = res.get_json()
        self.assertEqual(data['name'], 'Hardening Offer Test')

    def test_create_employee_empty_performance(self):
        payload = {
            "name": "Test Employee Hardened",
            "performance": "",
            "base_pay": ""
        }
        res = self.client.post('/api/employees', data=json.dumps(payload), content_type='application/json')
        self.assertEqual(res.status_code, 201)
        data = res.get_json()
        self.assertEqual(data['employee']['performance'], 90)

if __name__ == '__main__':
    unittest.main()
