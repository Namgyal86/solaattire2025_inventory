from app import app
from models import db
from models.product import Product, Variant
from models.order import Order, OrderItem
from models.inbox import Conversation, Message
from models.offer import Offer, OfferItem
from models.shipment import Shipment
from models.employee import Employee, LeaveRequest

def seed_database():
    with app.app_context():
        db.drop_all()
        db.create_all()

        print("Seeding Products & Variants...")
        products_data = [
            {
                'id': 'p1', 'name': 'Sagarmatha Windbreaker', 'sku': 'TS-WB-001', 'category': 'Outerwear',
                'img': 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=100&fit=crop',
                'on_offer': True, 'price': 4200, 'cost': 2350, 'stocked_on': '2026-07-05', 'next_restock': '2026-08-12',
                'variants': [
                    {'id': 'v1', 'size': 'S', 'color': 'Black', 'stock': 12, 'reorder': 5},
                    {'id': 'v2', 'size': 'M', 'color': 'Black', 'stock': 4, 'reorder': 5},
                    {'id': 'v3', 'size': 'L', 'color': 'Black', 'stock': 9, 'reorder': 5},
                    {'id': 'v4', 'size': 'M', 'color': 'Olive', 'stock': 2, 'reorder': 5},
                ]
            },
            {
                'id': 'p2', 'name': 'Thulo Oversized Hoodie', 'sku': 'TS-HD-014', 'category': 'Hoodies',
                'img': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop',
                'on_offer': True, 'price': 3100, 'cost': 1650, 'stocked_on': '2026-06-28', 'next_restock': '2026-08-01',
                'variants': [
                    {'id': 'v5', 'size': 'M', 'color': 'Stone', 'stock': 18, 'reorder': 8},
                    {'id': 'v6', 'size': 'L', 'color': 'Stone', 'stock': 3, 'reorder': 8},
                    {'id': 'v7', 'size': 'XL', 'color': 'Black', 'stock': 11, 'reorder': 8},
                ]
            },
            {
                'id': 'p3', 'name': 'Kathmandu Cargo Pants', 'sku': 'TS-CP-007', 'category': 'Bottoms',
                'img': 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=100&h=100&fit=crop',
                'on_offer': False, 'price': 3600, 'cost': 1980, 'stocked_on': '2026-07-12', 'next_restock': '2026-08-20',
                'variants': [
                    {'id': 'v8', 'size': '30', 'color': 'Khaki', 'stock': 7, 'reorder': 6},
                    {'id': 'v9', 'size': '32', 'color': 'Khaki', 'stock': 1, 'reorder': 6},
                    {'id': 'v10', 'size': '34', 'color': 'Black', 'stock': 14, 'reorder': 6},
                ]
            },
            {
                'id': 'p4', 'name': 'Himal Graphic Tee', 'sku': 'TS-TE-022', 'category': 'T-Shirts',
                'img': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop',
                'on_offer': True, 'price': 1450, 'cost': 620, 'stocked_on': '2026-07-01', 'next_restock': '2026-07-30',
                'variants': [
                    {'id': 'v11', 'size': 'S', 'color': 'White', 'stock': 22, 'reorder': 10},
                    {'id': 'v12', 'size': 'M', 'color': 'White', 'stock': 6, 'reorder': 10},
                    {'id': 'v13', 'size': 'L', 'color': 'Black', 'stock': 0, 'reorder': 10},
                ]
            },
            {
                'id': 'p5', 'name': 'Yeti Bucket Hat', 'sku': 'TS-AC-031', 'category': 'Accessories',
                'img': 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=100&h=100&fit=crop',
                'on_offer': False, 'price': 950, 'cost': 410, 'stocked_on': '2026-06-15', 'next_restock': '2026-08-05',
                'variants': [
                    {'id': 'v14', 'size': 'One Size', 'color': 'Black', 'stock': 30, 'reorder': 12},
                    {'id': 'v15', 'size': 'One Size', 'color': 'Camo', 'stock': 5, 'reorder': 12},
                ]
            },
            {
                'id': 'p6', 'name': 'Ratna Park Denim Jacket', 'sku': 'TS-JK-009', 'category': 'Outerwear',
                'img': 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=100&h=100&fit=crop',
                'on_offer': False, 'price': 5200, 'cost': 2900, 'stocked_on': '2026-06-20', 'next_restock': '2026-08-18',
                'variants': [
                    {'id': 'v16', 'size': 'M', 'color': 'Indigo', 'stock': 8, 'reorder': 5},
                    {'id': 'v17', 'size': 'L', 'color': 'Indigo', 'stock': 2, 'reorder': 5},
                ]
            }
        ]

        for pd in products_data:
            p = Product(
                id=pd['id'], name=pd['name'], sku=pd['sku'], category=pd['category'],
                img=pd['img'], on_offer=pd['on_offer'], price=pd['price'], cost=pd['cost'],
                stocked_on=pd['stocked_on'], next_restock=pd['next_restock']
            )
            db.session.add(p)
            for vd in pd['variants']:
                v = Variant(
                    id=vd['id'], product_id=p.id, size=vd['size'], color=vd['color'],
                    stock=vd['stock'], reorder=vd['reorder']
                )
                db.session.add(v)

        print("Seeding Offers...")
        offers_data = [
            {'id': 'o1', 'name': 'Dashain Drop — 20% Off Outerwear', 'status': 'active', 'start': '2026-07-15', 'end': '2026-08-05', 'redemptions': 34, 'revenue': 98600,
             'items': [{'productId': 'p1', 'type': 'percent', 'value': 20}, {'productId': 'p6', 'type': 'percent', 'value': 20}]},
            {'id': 'o2', 'name': 'Tee Tuesday Flat 300', 'status': 'active', 'start': '2026-07-01', 'end': '2026-07-31', 'redemptions': 51, 'revenue': 52700,
             'items': [{'productId': 'p4', 'type': 'flat', 'value': 300}]},
            {'id': 'o3', 'name': 'Hoodie Bundle: Buy 2 Save 500', 'status': 'active', 'start': '2026-07-10', 'end': '2026-08-10', 'redemptions': 19, 'revenue': 64400,
             'items': [{'productId': 'p2', 'type': 'flat', 'value': 500}]},
            {'id': 'o4', 'name': 'Tihar Bumper Sale — Sitewide', 'status': 'scheduled', 'start': '2026-08-20', 'end': '2026-09-02', 'redemptions': 0, 'revenue': 0,
             'items': [{'productId': 'p1', 'type': 'percent', 'value': 30}, {'productId': 'p2', 'type': 'percent', 'value': 25}]},
            {'id': 'o5', 'name': 'Monsoon Clearance — Flat 400', 'status': 'expired', 'start': '2026-06-01', 'end': '2026-06-20', 'redemptions': 62, 'revenue': 71200,
             'items': [{'productId': 'p3', 'type': 'flat', 'value': 400}]}
        ]
        for od in offers_data:
            o = Offer(
                id=od['id'], name=od['name'], status=od['status'], start=od['start'], end=od['end'],
                redemptions=od['redemptions'], revenue=od['revenue']
            )
            db.session.add(o)
            for it in od['items']:
                item = OfferItem(offer_id=o.id, product_id=it['productId'], discount_type=it['type'], value=it['value'])
                db.session.add(item)

        print("Seeding Conversations & Messages (Instagram & WhatsApp)...")
        conversations_data = [
            {
                'id': 'c1', 'name': 'Sujata Maharjan', 'handle': '@sujata.wears', 'channel': 'instagram', 'unread': 2, 'last': 'Is the M size back in stock?', 'time': '2m',
                'messages': [
                    {'from': 'in', 'text': 'Hi! I saw the windbreaker on your story 👀', 'time': '10:02 AM'},
                    {'from': 'out', 'text': 'Hey Sujata! Yes it just dropped, still have a few sizes left.', 'time': '10:05 AM'},
                    {'from': 'in', 'text': 'Is the M size back in stock?', 'time': '10:07 AM'}
                ]
            },
            {
                'id': 'c2', 'name': 'Bibek Shrestha', 'handle': '@bibek.sth', 'channel': 'instagram', 'unread': 0, 'last': 'Perfect, placing the order now', 'time': '18m',
                'messages': [
                    {'from': 'in', 'text': 'Does the hoodie run true to size?', 'time': '9:40 AM'},
                    {'from': 'out', 'text': 'It runs oversized — most people size down one.', 'time': '9:44 AM'},
                    {'from': 'in', 'text': 'Perfect, placing the order now', 'time': '9:46 AM'}
                ]
            },
            {
                'id': 'c3', 'name': 'Anisha Rai', 'handle': '@anisha_r', 'channel': 'instagram', 'unread': 1, 'last': 'Can I get it delivered to Pokhara?', 'time': '1h',
                'messages': [
                    {'from': 'in', 'text': 'Can I get it delivered to Pokhara?', 'time': '8:12 AM'}
                ]
            },
            {
                'id': 'c4', 'name': 'Prashant Karki', 'handle': '@prashant.kk', 'channel': 'instagram', 'unread': 0, 'last': 'Thank you so much 🔥', 'time': '3h',
                'messages': [
                    {'from': 'in', 'text': 'Got the tee today, quality is 🔥', 'time': '6:00 AM'},
                    {'from': 'out', 'text': 'So happy to hear that! Thanks for shopping with us 🙏', 'time': '6:10 AM'},
                    {'from': 'in', 'text': 'Thank you so much 🔥', 'time': '6:11 AM'}
                ]
            },
            {
                'id': 'c5', 'name': 'Nirajan Tamang', 'handle': '@nirajan.tmg', 'channel': 'instagram', 'unread': 0, 'last': 'Any offers on cargo pants?', 'time': '1d',
                'messages': [
                    {'from': 'in', 'text': 'Any offers on cargo pants?', 'time': 'Yesterday'},
                    {'from': 'out', 'text': 'Not right now, but keep an eye out for Tihar sale coming up!', 'time': 'Yesterday'}
                ]
            },
            {
                'id': 'c6', 'name': 'Suraj Poudel', 'handle': '+977 98410 22367', 'channel': 'whatsapp', 'unread': 1, 'last': 'Can I pay via eSewa on delivery?', 'time': '6m',
                'messages': [
                    {'from': 'in', 'text': 'Hi, I want to order the denim jacket in size L', 'time': '10:20 AM'},
                    {'from': 'out', 'text': 'Sure! It is in stock — shall I create the order for you?', 'time': '10:22 AM'},
                    {'from': 'in', 'text': 'Can I pay via eSewa on delivery?', 'time': '10:24 AM'}
                ]
            },
            {
                'id': 'c7', 'name': 'Manisha Karki', 'handle': '+977 97012 88450', 'channel': 'whatsapp', 'unread': 0, 'last': 'Sounds good, thank you!', 'time': '2h',
                'messages': [
                    {'from': 'in', 'text': 'Do you deliver to Chitwan?', 'time': '7:50 AM'},
                    {'from': 'out', 'text': 'Yes, NCM covers Chitwan — usually 3-4 days.', 'time': '7:55 AM'},
                    {'from': 'in', 'text': 'Sounds good, thank you!', 'time': '7:56 AM'}
                ]
            }
        ]
        for cd in conversations_data:
            c = Conversation(
                id=cd['id'], name=cd['name'], handle=cd['handle'], channel=cd['channel'],
                unread=cd['unread'], last=cd['last'], time=cd['time']
            )
            db.session.add(c)
            for md in cd['messages']:
                m = Message(conversation_id=c.id, sender_type=md['from'], text=md['text'], time=md['time'])
                db.session.add(m)

        print("Seeding Orders & Line Items...")
        orders_data = [
            {'id': 'ORD-1042', 'customer': 'Sujata Maharjan', 'handle': '@sujata.wears', 'offer_name': 'Dashain Drop -20%', 'offer_amount': 840, 'status': 'confirmed', 'date': '2026-07-24', 'total': 3360,
             'items': [{'name': 'Sagarmatha Windbreaker', 'variant': 'M / Black', 'qty': 1, 'price': 4200}]},
            {'id': 'ORD-1041', 'customer': 'Bibek Shrestha', 'handle': '@bibek.sth', 'offer_name': None, 'offer_amount': 0, 'status': 'shipped', 'date': '2026-07-23', 'total': 3100,
             'items': [{'name': 'Thulo Oversized Hoodie', 'variant': 'L / Stone', 'qty': 1, 'price': 3100}]},
            {'id': 'ORD-1040', 'customer': 'Prashant Karki', 'handle': '@prashant.kk', 'offer_name': 'Tee Tuesday Flat 300', 'offer_amount': 300, 'status': 'delivered', 'date': '2026-07-21', 'total': 2600,
             'items': [{'name': 'Himal Graphic Tee', 'variant': 'M / White', 'qty': 2, 'price': 1450}]},
            {'id': 'ORD-1039', 'customer': 'Anisha Rai', 'handle': '@anisha_r', 'offer_name': None, 'offer_amount': 0, 'status': 'pending', 'date': '2026-07-24', 'total': 3600,
             'items': [{'name': 'Kathmandu Cargo Pants', 'variant': '32 / Khaki', 'qty': 1, 'price': 3600}]},
            {'id': 'ORD-1038', 'customer': 'Nirajan Tamang', 'handle': '@nirajan.tmg', 'offer_name': None, 'offer_amount': 0, 'status': 'delivered', 'date': '2026-07-19', 'total': 950,
             'items': [{'name': 'Yeti Bucket Hat', 'variant': 'One Size / Black', 'qty': 1, 'price': 950}]}
        ]
        for ord_d in orders_data:
            o = Order(
                id=ord_d['id'], customer=ord_d['customer'], handle=ord_d['handle'],
                offer_name=ord_d['offer_name'], offer_amount=ord_d['offer_amount'],
                status=ord_d['status'], date=ord_d['date'], total=ord_d['total']
            )
            db.session.add(o)
            for it in ord_d['items']:
                item = OrderItem(order_id=o.id, name=it['name'], variant=it['variant'], qty=it['qty'], price=it['price'])
                db.session.add(item)

        print("Seeding Shipments (NCM Courier)...")
        shipments_data = [
            {'order': 'ORD-1041', 'customer': 'Reshma Shrestha', 'phone': '9815142821', 'address': 'Pokhara, Sabhagriha', 'ncm': '24057802', 'dest': 'POKHARA - KASKI', 'fbranch': 'TINKUNE - KATHMANDU', 'package_desc': 'Non-Fragile / Clothes', 'cod': 700.0, 'status': 'arrived', 'created': '2026-07-27'},
            {'order': 'ORD-1040', 'customer': 'Rojina Rai', 'phone': '9810151148', 'address': 'Itahari, Ward 3', 'ncm': '24057603', 'dest': 'ITAHARI - SUNSARI', 'fbranch': 'TINKUNE - KATHMANDU', 'package_desc': 'Non-Fragile / Clothes', 'cod': 700.0, 'status': 'dispatched', 'created': '2026-07-27'},
            {'order': 'ORD-1043', 'customer': 'Bhumika Rana', 'phone': '9709809530', 'address': 'Ktm Force Park', 'ncm': '24057252', 'dest': 'TINKUNE - KATHMANDU', 'fbranch': 'TINKUNE - KATHMANDU', 'package_desc': 'Non-Fragile / Clothes', 'cod': 600.0, 'status': 'delivered', 'created': '2026-07-27'},
            {'order': 'ORD-1042', 'customer': 'Sujata Maharjan', 'phone': '9847023226', 'address': 'Lalitpur, Ward 4', 'ncm': None, 'dest': 'LALITPUR - LALITPUR', 'fbranch': 'TINKUNE - KATHMANDU', 'package_desc': 'Kathmandu Cargo Pants', 'cod': 1850.0, 'status': 'not-created', 'created': '2026-07-28'},
            {'order': 'ORD-1039', 'customer': 'Anisha Rai', 'phone': '9801234567', 'address': 'Lakeside, Pokhara', 'ncm': None, 'dest': 'POKHARA - KASKI', 'fbranch': 'TINKUNE - KATHMANDU', 'package_desc': 'Oversized Tee & Denim', 'cod': 0.0, 'status': 'not-created', 'created': '2026-07-28'}
        ]
        for sd in shipments_data:
            s = Shipment(
                order_id=sd['order'], customer=sd['customer'], phone=sd['phone'], address=sd['address'],
                ncm_tracking=sd['ncm'], dest=sd['dest'], fbranch=sd['fbranch'], package_desc=sd['package_desc'],
                cod=sd['cod'], status=sd['status'], created=sd['created']
            )
            db.session.add(s)

        print("Seeding Employees & Leave Requests...")
        employees_data = [
            {'id': 'e1', 'name': 'Rojina Basnet', 'role': 'Store Manager', 'joined': '2024-02-10', 'attendance': 'Present', 'performance': 92},
            {'id': 'e2', 'name': 'Sandip Lama', 'role': 'Inventory Lead', 'joined': '2024-06-01', 'attendance': 'Present', 'performance': 87},
            {'id': 'e3', 'name': 'Kritika Adhikari', 'role': 'IG Support / Ordering', 'joined': '2025-01-15', 'attendance': 'On Leave', 'performance': 95},
            {'id': 'e4', 'name': 'Bishal Gurung', 'role': 'Packing & Dispatch', 'joined': '2025-03-20', 'attendance': 'Present', 'performance': 81},
            {'id': 'e5', 'name': 'Manisha Thapa', 'role': 'Design & Content', 'joined': '2025-05-04', 'attendance': 'Absent', 'performance': 88}
        ]
        for ed in employees_data:
            e = Employee(id=ed['id'], name=ed['name'], role=ed['role'], joined=ed['joined'], attendance=ed['attendance'], performance=ed['performance'])
            db.session.add(e)

        leaves_data = [
            {'name': 'Kritika Adhikari', 'type': 'Sick Leave', 'dates': 'Jul 24–25', 'status': 'approved'},
            {'name': 'Manisha Thapa', 'type': 'Casual Leave', 'dates': 'Jul 28', 'status': 'pending'},
            {'name': 'Bishal Gurung', 'type': 'Festival Leave', 'dates': 'Aug 20–24', 'status': 'pending'}
        ]
        for ld in leaves_data:
            l = LeaveRequest(employee_name=ld['name'], leave_type=ld['type'], dates=ld['dates'], status=ld['status'])
            db.session.add(l)

        db.session.commit()
        print("Database seeded successfully!")

if __name__ == '__main__':
    seed_database()
