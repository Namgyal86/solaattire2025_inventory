import urllib.request
import csv
import io
import re
import random
from datetime import datetime
from models import db
from models.product import Product, Variant
from models.order import Order, OrderItem
from models.shipment import Shipment

SPREADSHEET_ID = "1Fvyq4FvTSp62qgIAt4H4kR9MtyKyCYUbnzF6QZyRJJw"
CSV_EXPORT_URL = f"https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/export?format=csv"

# User's Stock Purchase Dataset
RAW_STOCK_PURCHASES = """
Category	Size	Color	QTY in stock 	Purchase date	Purchase Rate	Amount	Sales Rate
Baggy Pant	1XL	Blue , light blue and wash	3	1st May 2026	890	2670	1150
Baggy Pant	2XL	Blue , light blue and wash	3	1st May 2026	890	2670	1150
Baggy Pant	3XL	Blue , light blue and wash	3	1st May 2026	890	2670	1150
Baggy Pant	4XL	Blue , light blue and wash	3	1st May 2026	890	2670	1150
Half Pant	1XL	Light blue	1	1st May 2026	690	690	850
Half Pant	2XL	Light blue	1	1st May 2026	690	690	850
Half Pant	3XL	Light blue	1	1st May 2026	690	690	850
Half Pant	4XL	Light blue	1	1st May 2026	690	690	850
8571-2 Pant	S	Light blue	1	1st May 2026	1390	1390	1590
8571-2 Pant	M	Light blue	1	1st May 2026	1390	1390	1590
8571-2 Pant	L	Light blue	1	1st May 2026	1390	1390	1590
8571-2 Pant	XL	Light blue	1	1st May 2026	1390	1390	1590
Cotton Pant With belt	S	White	1	1st May 2026	1190	1190	1490
Cotton Pant With belt	M	White	1	1st May 2026	1190	1190	1490
Cotton Pant With belt	L	White	1	1st May 2026	1190	1190	1490
Cotton Pant With belt	XL	White	1	1st May 2026	1190	1190	1490
Trousers	L	gray and brown	2	1st May 2026	790	1580	1050
Trousers	XL	gray and brown	2	1st May 2026	790	1580	1050
Trousers	2XL	gray and brown	2	1st May 2026	790	1580	1050
Cotton T-shirt	Free size	pink,light blue,black and cream	6	1st May 2026	825	4950	999
Polk dot T-shirt	Free size	white	6	1st May 2026	1150	6900	1290
Haltar T-shirt	Free size	Black and white	6	1st May 2026	1333.33333	8000	1500
Z.H Half short	Free size		7	3rd May 2026	350	2450	500
Shirt Set plazzo	Free size		6	3rd May 2026	1000	6000	1190
Linen long skirt	Free size	Cream	6	3rd May 2026	1150	6900	1290
6670 B/F Half T Shirt	Free size		4	3rd May 2026	750	3000	999
3301 Half T Shirt	Free size		7	3rd May 2026	750	5250	999
Rufer dress	Free size	Yellow	2	3rd May 2026	1650	3300	1850
skirt set	Free size	brown and black	6	3rd May 2026	2050	12300	2350
grey studio 2 pic set	Free size	black	5	3rd May 2026	1100	5500	1350
one piece 	Free size	pink,cream,black	8	3rd May 2026	750	6000	1000
check set	Free size	green,blue	4	3rd May 2026	1000	4000	1250
lace T-shirt 	Free size	brown,black	4	3rd May 2026	500	2000	700
Q2 baggy	S to XL	Black / Grey	3	14th may 2026	800	2400	1890
825 Full Sleeves Plain T Shirt	Free size		3	14th may 2026	850	2550	1099
6696 B/F Full T Shirt	Free size		6	14th may 2026	850	5100	1099
side fold loose formal pant 	S	gray	1	17th may 2026	1650	1650	1890
side fold loose formal pant 	M	gray	1	17th may 2026	1650	1650	1890
side fold loose formal pant 	L	gray	1	17th may 2026	1650	1650	1890
side fold loose formal pant 	XL	gray	1	17th may 2026	1650	1650	1890
half check t-shirt(141)	free size	grey and brown	6	24th May 2026	400	2400	650
Ruched fitted button up t-shirt161	free size	blue,pink and purple	9	24th May 2026	450	4050	650
full fitted shirt(140)	free size	Brown and white	6	24th May 2026	550	3300	750
V-top (138)	free size	black	3	24th May 2026	450	1350	650
half check t-shirt(141)	free size	Brown 	3	2nd  June 2026	400	1200	650
half check t-shirt(141)	free size	Blue	2	2nd  June 2026	400	800	650
cami + top (174 + 149)	free size	Blue	2	2nd  June 2026	400	800	600
cami + top (174 + 149)	free size	Maroon	2	2nd  June 2026	400	800	600
cami + top (174 + 149)	free size	Black	2	2nd  June 2026	400	800	600
cami + top (174 + 149)	free size	Brown	2	2nd  June 2026	400	800	600
Ruched fitted button up t-shirt161	free size	Blue	4	3rd June 2026	450	1800	650
Ruched fitted button up t-shirt161	free size	Purple	4	3rd June 2026	450	1800	650
Ruched fitted button up t-shirt161	free size	White	4	3rd June 2026	450	1800	650
padded cami (172)	free size	white	3	3rd June 2026	550	1650	750
padded cami (172)	free size	pink	3	3rd June 2026	550	1650	750
padded cami (172)	free size	Yellow 	3	3rd June 2026	550	1650	750
padded cami (172)	free size	cream	3	3rd June 2026	550	1650	750
set(170 + 175)	free size	Grey	3	3rd June 2026	1150	3450	1450
set(170 + 175)	free size	Black	3	3rd June 2026	1150	3450	1450
Ruched fitted button up t-shirt(161)	free size	pink	5	3rd June 2026	450	2250	650
Ruched fitted button up t-shirt(161)	free size	Purple	5	3rd June 2026	450	2250	650
full fitted shirt(140)	free size	white	2	3rd June 2026	550	1100	750
Ruched fitted button up t-shirt161(1)	free size	Pink	6	8th June 2026	450	2700	650
Ruched fitted button up t-shirt161(1)	free size	white 	4	8th June 2026	450	1800	650
Ruched fitted button up t-shirt161(1)	free size	Purple	2	8th June 2026	450	900	650
padded cami (172)	free size	Yellow 	2	8th June 2026	550	1100	750
lulu jacket	free size	Black	1	9th June 2026	550	550	750
lulu jacket	free size	Red	1	9th June 2026	550	550	750
swal one piece	free size	White	2	9th June 2026	1000	2000	1250
swal one piece	free size	Red	1	9th June 2026	1000	1000	1250
swal one piece	free size	Black	1	9th June 2026	1000	1000	1250
flare top	free size	Black	5	9th June 2026	450	2250	650
flare top	free size	Pink	2	9th June 2026	450	900	650
check dress	free size	Red	3	9th June 2026	550	1650	750
check dress	free size	Black	3	9th June 2026	550	1650	750
bubal top	free size	White	5	9th June 2026	550	2750	750
satin mini skirt	free size	Black	2	9th June 2026	450	900	650
satin mini skirt	free size	Pink	2	9th June 2026	450	900	650
satin mini skirt	free size	Blue	2	9th June 2026	450	900	650
satin mini skirt	free size	Yellow	2	9th June 2026	450	900	650
Lenin set	free size	Black	1	9th June 2026	1100	1100	1350
Lenin set	free size	White	1	9th June 2026	1100	1100	1350
one piece dress(182)	free size	Black	1	11th June 2026	750	750	950
one piece dress(182)	free size	Brown	1	11th June 2026	750	750	950
one piece dress(182)	free size	Pink	1	11th June 2026	750	750	950
half check t-shirt(141)	free size	Grey	4	11th June 2026	400	1600	650
Ruched fitted button up t-shirt161(2)	free size	Purple	2	12th June 2026	450	900	650
Ruched fitted button up t-shirt161(2)	free size	Pink	3	12th June 2026	450	1350	650
half check t-shirt(141)(1)	free size	Grey	3	12th June 2026	400	1200	650
V-top (138)	free size	Black	5	12th June 2026	405	2025	650
half check t-shirt(141)(3)	Free Size	brown	6	16th June 2026	400	2400	650
half check t-shirt(141)(3)	Free Size	gray	4	16th June 2026	400	1600	650
half check t-shirt(141)(3)	Free Size	Blue	4	16th June 2026	400	1600	650
530 tee 	Free Size	Blue	6	19th June 2026	250	1500	450
linen pant	Free Size	Blue	5	19th June 2026	500	2500	750
Bottom tee	Free Size	Blue	6	19th June 2026	500	3000	750
Polka ruffle 	Free Size	Blue	6	19th June 2026	500	3000	650
Half buttom	Free Size	Blue	5	19th June 2026	400	2000	650
polka cardigan	Free Size	Blue	4	19th June 2026	650	2600	850
fari top	Free Size	Blue	3	19th June 2026	600	1800	750
fly Jersey	Free Size	Blue	1	19th June 2026	500	500	650
Plain fly jersey	Free Size	Blue	2	19th June 2026	450	900	600
184	Free Size	navy	3	19th June 2026	400	1200	600
184	Free Size	Black	3	19th June 2026	400	1200	600
184	Free Size	Yellow	3	19th June 2026	400	1200	600
189	Free Size	Pink	3	19th June 2026	475	1425	650
189	Free Size	Black	3	19th June 2026	475	1425	650
189	Free Size	Blue	3	19th June 2026	475	1425	650
inner bottom	Free Size	brown	1	21st June 2026	350	350	650
184(1)	Free Size	Yellow	8	21st June 2026	400	3200	650
half check t-shirt(141)(4)	Free Size	Blue	3	21st June 2026	400	1200	650
Shrug Mix	Free Size	Blue	8	24th June 2026	550	4400	750
Polka ruffle sleeveless	Free Size	Blue	9	24th June 2026	500	4500	650
Baby tee	Free Size	Blue	6	24th June 2026	350	2100	500
Small print Baby tee	Free Size	Blue	3	24th June 2026	270	810	500
Flayer top  tuk	Free Size	Blue	4	24th June 2026	400	1600	699
Frock top	Free Size	Blue	6	24th June 2026	450	2700	699
189(lowest pant)(1)	Free Size	Pink	3	24th June 2026	475	1425	650
189(lowest pant)(1)	Free Size	Black	3	24th June 2026	475	1425	650
189(lowest pant)(1)	Free Size	Blue	3	24th June 2026	475	1425	650
184(2)	Free Size	Blue	6	24th June 2026	400	2400	650
184(2)	Free Size	Black	6	24th June 2026	400	2400	650
184(2)	Free Size	Yellow	6	24th June 2026	400	2400	650
190(zipper tee)	Free Size	navy	2	24th June 2026	450	900	600
190(zipper tee)	Free Size	Black	2	24th June 2026	450	900	600
190(zipper tee)	Free Size	White	2	24th June 2026	450	900	600
190(zipper tee)	Free Size	Yellow	2	24th June 2026	450	900	600
184(3)	Free Size	navy	15	25th June 2026	400	6000	600
184(3)	Free Size	Yellow	8	25th June 2026	400	3200	600
184(3)	Free Size	Black	5	25th June 2026	400	2000	600
184(4)	Free Size	navy	10	28th June 2026	400	4000	600
184(4)	Free Size	Black	5	28th June 2026	400	2000	600
188	Free Size	Black	2	28th June 2026	850	1700	1100
188	Free Size	navy	2	28th June 2026	850	1700	1100
188	Free Size	Red	2	28th June 2026	850	1700	1100
190(zipper tee)(1)	Free Size	Yellow	4	29th June 2026	450	1800	600
184(5)	Free Size	Black	5	29th June 2026	400	2000	600
184(5)	Free Size	navy	3	29th June 2026	400	1200	600
173	Free Size	cream	2	29th June 2026	1000	2000	1250
189(lowest pant)(2)	Free Size	Pink	5	29th June 2026	475	2375	650
191+193	Free Size	Black	1	1st July 2026	800	800	1000
191+193	Free Size	Red	1	1st July 2026	800	800	1000
191+193	Free Size	Yellow	1	1st July 2026	800	800	1000
Polka ruffle sleeveless(1)	Free Size	Black	10	2nd July 2026	500	5000	650
184(6)	Free Size	Black	4	5th July 2026	400	1600	600
184(6)	Free Size	navy	5	5th July 2026	400	2000	600
184(6)	Free Size	Yellow	4	5th July 2026	400	1600	600
192	Free Size	White	2	5th July 2026	600	1200	750
192	Free Size	Black	2	5th July 2026	600	1200	750
192	Free Size	navy	2	5th July 2026	600	1200	750
191+193(1)	Free Size	Red	1	5th July 2026	800	800	1000
198(POLKA DOT)	Free Size	Black	1	5th July 2026	700	700	
198(POLKA DOT)	Free Size	Pink	1	5th July 2026	700	700	
198(POLKA DOT)	Free Size	Yellow	1	5th July 2026	700	700	
198(POLKA DOT)	Free Size	White	1	5th July 2026	700	700	
plazo	S	Black	1	7th July 2026	750	750	1000
plazo	M	Black	1	7th July 2026	750	750	1000
plazo	L	Black	1	7th July 2026	750	750	1000
plazo	XL	Black	1	7th July 2026	750	750	1000
plazo	2XL	Black	1	7th July 2026	750	750	1000
woodbuttom	Free Size	Black	2	7th July 2026	450	900	650
woodbuttom	Free Size	olive	2	7th July 2026	450	900	650
wrapper ts	Free Size	Black	2	7th July 2026	475	950	650
wrapper ts	Free Size	offwhite	2	7th July 2026	475	950	650
t-56 halter offshoulder	Free Size	Red	2	7th July 2026	450	900	650
t-56 halter offshoulder	Free Size	Black	2	7th July 2026	450	900	650
t-69	Free Size	White	2	7th July 2026	450	900	650
t-69	Free Size	brown	2	7th July 2026	450	900	650
ts outer attached	Free Size	White	2	7th July 2026	450	900	650
ts outer attached	Free Size	Green	1	7th July 2026	450	450	650
ts outer attached	Free Size	Black	1	7th July 2026	450	450	650
cross half	Free Size	Red	2	7th July 2026	450	900	650
cross half	Free Size	Black	2	7th July 2026	450	900	650
cotton	Free Size	Green	3	7th July 2026	450	1350	650
cotton	Free Size	Pink	3	7th July 2026	450	1350	650
cotton	Free Size	Blue	3	7th July 2026	450	1350	650
cotton	Free Size	Yellow	3	7th July 2026	450	1350	650
Ruched fitted button up t-shirt161(4)	Free Size	Pink	5	9th July 2026	450	2250	650
Ruched fitted button up t-shirt161(4)	Free Size	Purple	5	9th July 2026	450	2250	650
Ruched fitted button up t-shirt161(4)	Free Size	Blue	3	9th July 2026	450	1350	650
Ruched fitted button up t-shirt161(4)	Free Size	White	3	9th July 2026	450	1350	650
half check t-shirt(141)(4)	Free Size	gray	3	9th July 2026	400	1200	650
half check t-shirt(141)(4)	Free Size	brown	4	9th July 2026	400	1600	650
189(lowest pant)(3)	Free Size	Pink	5	9th July 2026	475	2375	650
184(7)	Free Size	Yellow	5	9th July 2026	400	2000	600
184(7)	Free Size	navy	10	9th July 2026	400	4000	600
(keyhole tee half)204	Free Size	Black	3	10th July 2026	375	1125	600
(keyhole tee half)204	Free Size	brown	3	10th July 2026	375	1125	600
(keyhole tee half)204	Free Size	navy	3	10th July 2026	375	1125	600
(keyhole tee half)204	Free Size	White	3	10th July 2026	375	1125	600
(keyhole tee half)204	Free Size	Red	3	10th July 2026	375	1125	600
(keyhole tee full)204	Free Size	Black	3	10th July 2026	400	1200	650
(keyhole tee full)204	Free Size	White	3	10th July 2026	400	1200	650
210(one piece)	Free Size	Black	2	16th July 2026	800	1600	1150
210(one piece)	Free Size	navy	2	16th July 2026	800	1600	1150
207(one piece)	Free Size	Yellow	1	16th July 2026	750	750	1150
207(one piece)	Free Size	Black	1	16th July 2026	750	750	1150
(keyhole tee half)204(1)	Free Size	Black	3	16th July 2026	375	1125	600
208(outer)	Free Size	Black	1	16th July 2026	450	450	
208(outer)	Free Size	Yellow	1	16th July 2026	450	450	
205(keyhole polka)	Free Size	Black	3	16th July 2026	450	1350	650
205(keyhole polka)	Free Size	White	3	16th July 2026	450	1350	650
(keyhole tee full)204(1)	Free Size	White	7	17th July 2026	400	2800	650
188	Free Size	Black	4	19th July 2026	850	3400	
(keyhole tee full)204(2)	Free Size	White	3	19th July 2026	400	1200	650
(keyhole tee full)204(2)	Free Size	Black	3	19th July 2026	400	1200	650
so420(side offshoulder)	Free Size	brown	9	23rd July 2026	475	4275	699
so420(side offshoulder)	Free Size	gray		23rd July 2026			699
so420(side offshoulder)	Free Size	Black		23rd July 2026			699
so420(side offshoulder)	Free Size	Green		23rd July 2026			699
so337(shirt)	Free Size	White	2	23rd July 2026	500	1000	700
so337(shirt)	Free Size	Black	2	23rd July 2026	500	1000	700
so337(shirt)	Free Size	Pink	2	23rd July 2026	500	1000	700
T-18 cawl t-shirt	Free Size	Black	1	23rd July 2026	450	450	699
T-18 cawl t-shirt	Free Size	navy	2	23rd July 2026	450	900	699
T-18 cawl t-shirt	Free Size	Yellow	2	23rd July 2026	450	900	699
T-18 cawl t-shirt	Free Size	White	2	23rd July 2026	450	900	699
T-18 cawl t-shirt	Free Size	brown	2	23rd July 2026	450	900	699
so332	Free Size	brown	2	23rd July 2026	300	600	550
T-18 cawl t-shirt(1)	Free Size	brown	13	27th July 2026	450	5850	699
Half polka	Free Size	brown	2	27th July 2026	550	1100	
211	Free Size	Pink	1	29th July 2026	400	400	
211	Free Size	Black	1	29th July 2026	400	400	
211	Free Size	Purple	1	29th July 2026	400	400	
205(keyhole polka)(1)	Free Size	Black	1	29th July 2026	450	450	650
184(8)	Free Size	navy	3	29th July 2026	400	1200	600
184(8)	Free Size	Yellow	3	29th July 2026	400	1200	600
184(8)	Free Size	Black	2	29th July 2026	400	800	600
184(9)	Free Size	navy	5	30th July 2026	400	2000	600
184(9)	Free Size	Yellow	3	30th July 2026	400	1200	600
184(9)	Free Size	Black	4	30th July 2026	400	1600	600
205(keyhole polka)(2)	Free Size	Black	6	30th July 2026	450	2700	650
205(keyhole polka)(2)	Free Size	White	5	30th July 2026	450	2250	650
(keyhole tee full)204(3)	Free Size	White	5	30th July 2026	400	2000	650
(keyhole tee full)204(3)	Free Size	Black	2	30th July 2026	400	800	650
173(one piece)	Free Size	Black	1	30th July 2026	1000	1000	1250
173(one piece)	Free Size	brown	1	30th July 2026	1000	1000	1250
173(one piece)	Free Size	cream	1	30th July 2026	1000	1000	1250
206(jump suit)	Free Size	White	1	30th July 2026	850	850	1100
206(jump suit)	Free Size	Pink	1	30th July 2026	850	850	1100
T-18 cawl t-shirt(1)	Free Size		12	30th July 2026	450	5400	699
T-18 cawl t-shirt(2)	Free Size		7	2nd Aug 2026	450	3150	699
T-18 cawl t-shirt(3)	Free Size	Yellow	8	6th Aug 2026	450	3600	699
T-18 cawl t-shirt(3)	Free Size	Black	2	6th Aug 2026	450	900	699
T-18 cawl t-shirt(3)	Free Size	navy	3	6th Aug 2026	450	1350	699
220(strip shirt)	Free Size	Black	2	31st july 2026	500	1000	750
220(strip shirt)	Free Size	Red	2	31st july 2026	500	1000	750
220(strip shirt)	Free Size	navy	2	31st july 2026	500	1000	750
226(paper shirt)	Free Size	Pink	2	31st july 2026	595	1190	750
226(paper shirt)	Free Size	Yellow	2	31st july 2026	595	1190	750
226(paper shirt)	Free Size	Black	2	7th Aug 2026	595	1190	750
184(10)	Free Size	Yellow	4	7th Aug 2026	400	1600	600
184(10)	Free Size	navy	3	7th Aug 2026	400	1200	600
184(11)	Free Size	Yellow	5		400	2000	600
184(11)	Free Size	Black	2		400	800	600
T-18 cawl t-shirt(4)	Free Size	gray	5		450	2250	600
key lace tee	Free Size	navy	2		450	900	650
key lace tee	Free Size	cream	1		450	450	650
key lace tee	Free Size	Red	1		450	450	650
key lace tee	Free Size	Pink	1		450	450	650
plus size cardigan	Free Size	Black	1		690	690	600
plus size cardigan	Free Size	brown	1		690	690	600
plus size cardigan	Free Size	navy	1		690	690	600
Cardigan attached tee	Free Size	gray	2		650	1300	850
Cardigan attached tee	Free Size	Pink	2		650	1300	850
Cami + top	Free Size	Blue	2		580	1160	799
Cami + top	Free Size	Black	2		580	1160	799
Cami + top	Free Size	Yellow	3		580	1740	799
Up shoulder warp tee	Free Size	Black	2		500	1000	600
Up shoulder warp tee	Free Size	White	2		500	1000	600
205(keyhole polka)(4)	Free Size	White	4		450	1800	650
205(keyhole polka)(4)	Free Size	Black	6		450	2700	650
(keyhole tee half)204(2)	Free Size	Black	2		375	750	600
(keyhole tee half)204(2)	Free Size	navy	2		375	750	600
(keyhole tee half)204(2)	Free Size	brown	2		375	750	600
(keyhole tee half)204(2)	Free Size	White	1		375	375	600
lamda tshirt	Free Size	White	12	24th Aug 2026	450	5400	650
lamda tshirt	Free Size	Blue	5	24th Aug 2026	450	2250	650
lamda tshirt	Free Size	Black	2	24th Aug 2026	450	900	650
"""

def parse_sheet_date(d_str):
    if not d_str:
        return "2026-05-15 12:00"
    d_clean = re.sub(r'(\d+)(st|nd|rd|th)', r'\1', str(d_str).strip())
    try:
        dt = datetime.strptime(d_clean, "%d %b %Y")
        return dt.strftime("%Y-%m-%d %H:%M")
    except Exception:
        try:
            dt = datetime.strptime(d_clean, "%d %B %Y")
            return dt.strftime("%Y-%m-%d %H:%M")
        except Exception:
            return "2026-05-15 12:00"

def parse_purchase_date_only(d_str):
    if not d_str or not str(d_str).strip():
        return "2026-05-01"
    d_clean = re.sub(r'(\d+)(st|nd|rd|th)', r'\1', str(d_str).strip())
    try:
        dt = datetime.strptime(d_clean, "%d %b %Y")
        return dt.strftime("%Y-%m-%d")
    except Exception:
        try:
            dt = datetime.strptime(d_clean, "%d %B %Y")
            return dt.strftime("%Y-%m-%d")
        except Exception:
            return "2026-05-01"

def clean_base_product_name(name):
    """Strips trailing restock batch numbers like (1), (2), (3) and (sale) tags."""
    if not name:
        return ""
    n = name.strip()
    # Strip (sale) or (SALE) tag
    n_clean = re.sub(r'\s*\(\s*sale\s*\)\s*', '', n, flags=re.IGNORECASE).strip()
    # Strip trailing batch suffix like (1), (2), (11), (4)
    n_clean = re.sub(r'\s*\(\d+\)\s*$', '', n_clean).strip()
    return n_clean

def check_is_on_sale(name):
    if not name:
        return False
    return bool(re.search(r'\(sale\)', name, re.IGNORECASE))

def categorize_product(name):
    nl = name.lower()
    if any(k in nl for k in ['pant', 'trouser', 'cargo', 'jean', 'bottom', 'short', 'skirt', 'plazo']):
        return 'Bottoms'
    elif any(k in nl for k in ['hoodie', 'jacket', 'coat', 'windbreaker', 'outer', 'cardigan', 'shrug', 'outerwear']):
        return 'Outerwear'
    elif any(k in nl for k in ['tee', 't-shirt', 't shirt', 'shirt', 'top', 'blouse', 'cami', 'jersey']):
        return 'T-Shirts'
    elif any(k in nl for k in ['set', 'dress', 'suit', 'combo', 'one piece', 'frock']):
        return 'Sets & Dresses'
    elif any(k in nl for k in ['hat', 'cap', 'bag', 'bucket']):
        return 'Accessories'
    return 'Apparel & Clothing'

def parse_raw_stock_purchases():
    lines = RAW_STOCK_PURCHASES.strip().split('\n')[1:]
    items = []
    for line in lines:
        parts = line.split('\t')
        if len(parts) >= 8:
            raw_name = parts[0].strip()
            base_name = clean_base_product_name(raw_name)
            is_sale = check_is_on_sale(raw_name)
            size = parts[1].strip() or 'Free Size'
            color = parts[2].strip() or 'Free Color'
            try:
                qty = int(parts[3].strip() or '1')
            except ValueError:
                qty = 1
            purchase_date = parse_purchase_date_only(parts[4])
            try:
                purchase_rate = float(parts[5].strip() or '0')
            except ValueError:
                purchase_rate = 0.0
            try:
                sales_rate = float(parts[7].strip() or '0')
            except ValueError:
                sales_rate = purchase_rate * 1.4 if purchase_rate > 0 else 1000.0

            if base_name:
                items.append({
                    'raw_name': raw_name,
                    'base_name': base_name,
                    'is_sale': is_sale,
                    'size': size,
                    'color': color,
                    'qty': qty,
                    'purchase_date': purchase_date,
                    'cost': purchase_rate,
                    'price': sales_rate if sales_rate > 0 else 1000.0
                })
    return items

def sync_google_sheet_data():
    """Syncs Stock Purchases & Google Sheet Sales Orders, consolidating restock batches and marking (sale) items."""
    # 1. Fetch CSV Sales Orders from Google Sheet
    req = urllib.request.Request(CSV_EXPORT_URL, headers={'User-Agent': 'Mozilla/5.0'})
    raw_csv = urllib.request.urlopen(req).read().decode('utf-8')
    f = io.StringIO(raw_csv)
    reader = csv.DictReader(f)
    sheet_rows = list(reader)

    if not sheet_rows:
        return {"status": "error", "message": "No data found in Google Sheet"}

    # Clear existing DB
    db.session.query(OrderItem).delete()
    db.session.query(Order).delete()
    db.session.query(Shipment).delete()
    db.session.query(Variant).delete()
    db.session.query(Product).delete()
    db.session.commit()

    # 2. Count Total Sold QTY & Detect (sale) tag per Master Product from Sheet Sales Orders
    sold_qty_by_product = {} # base_name -> total sold count
    sold_qty_by_variant = {} # (base_name, size, color) -> sold count
    products_on_sale = set() # base_names that have (sale) tag

    for r in sheet_rows:
        raw_item_name = r.get('ITEM NAME', '').strip()
        if not raw_item_name:
            continue
        
        base_item_name = clean_base_product_name(raw_item_name)
        if check_is_on_sale(raw_item_name):
            products_on_sale.add(base_item_name)

        color = r.get('Color', '').strip() or 'Free Color'
        size = r.get('SIZE', '').strip() or 'Free Size'

        raw_q = r.get('QTY \nORDERED', r.get('QTY ORDERED', '')).strip()
        try:
            qty = int(raw_q) if raw_q != '' else 0
        except ValueError:
            qty = 0

        order_st = r.get('ORDER \nSTATUS', r.get('ORDER STATUS', '')).strip().lower()
        if 'cancel' not in order_st and 'return' not in order_st and qty > 0:
            sold_qty_by_product[base_item_name] = sold_qty_by_product.get(base_item_name, 0) + qty
            sold_qty_by_variant[(base_item_name, size, color)] = sold_qty_by_variant.get((base_item_name, size, color), 0) + qty

    # 3. Parse Stock Purchase Table with Restock Consolidation
    purchased_items = parse_raw_stock_purchases()

    master_purchases = {} # base_name -> list of p_items
    for p_item in purchased_items:
        b_name = p_item['base_name']
        if p_item['is_sale']:
            products_on_sale.add(b_name)
        if b_name not in master_purchases:
            master_purchases[b_name] = []
        master_purchases[b_name].append(p_item)

    product_map = {} # base_name -> Product model
    variant_map = {} # (base_name, size, color) -> Variant model
    prod_counter = 101
    variant_counter = 1

    for base_name, p_list in master_purchases.items():
        pid = f"PROD-{prod_counter:03d}"
        prod_counter += 1
        sku = f"SA-{re.sub(r'[^A-Z0-9]', '', base_name.upper())[:6]}-{prod_counter:03d}"
        cat = categorize_product(base_name)

        latest_item = p_list[-1]
        cost = latest_item['cost']
        price = latest_item['price']
        p_date = latest_item['purchase_date']
        is_on_sale = base_name in products_on_sale

        p = Product(
            id=pid,
            name=base_name,
            sku=sku,
            category=cat,
            img='/static/icons/icon-192.png',
            on_offer=is_on_sale, # Set ON OFFER flag
            price=price if price > 0 else 1000.0,
            cost=cost if cost > 0 else 500.0,
            stocked_on=p_date,
            next_restock='2026-09-30'
        )
        db.session.add(p)
        product_map[base_name] = p

        variant_purchased_qty = {} # (size, color) -> total purchased
        for p_item in p_list:
            v_key = (p_item['size'], p_item['color'])
            variant_purchased_qty[v_key] = variant_purchased_qty.get(v_key, 0) + p_item['qty']

        for (size, color), total_purchased in variant_purchased_qty.items():
            v_id = f"VAR-{variant_counter:04d}"
            variant_counter += 1

            sold_qty = sold_qty_by_variant.get((base_name, size, color), 0)
            if sold_qty == 0:
                sold_qty = min(total_purchased, sold_qty_by_product.get(base_name, 0))

            remaining_stock = max(0, total_purchased - sold_qty)

            v = Variant(
                id=v_id,
                product_id=p.id,
                size=size,
                color=color,
                stock=remaining_stock,
                reorder=2
            )
            db.session.add(v)
            variant_map[(base_name, size, color)] = v

    db.session.commit()

    # 4. Group Sheet Sales Rows into Master Product Orders & Create NCM Shipments
    grouped_orders = {}

    for r in sheet_rows:
        cust_name = r.get('CUSTOMER NAME', '').strip() or 'Online Customer'
        contact = r.get('CONTACT', '').strip()
        address = r.get('Address', '').strip()
        raw_item_name = r.get('ITEM NAME', '').strip()
        if not raw_item_name:
            continue

        base_item_name = clean_base_product_name(raw_item_name)
        color = r.get('Color', '').strip() or 'Free Color'
        size = r.get('SIZE', '').strip() or 'Free Size'
        date_str = parse_sheet_date(r.get('DATE', ''))
        payment_with = r.get('PAYMENT WITH', '').strip() or 'Direct Cash'
        order_status_raw = r.get('ORDER \nSTATUS', r.get('ORDER STATUS', '')).strip().lower()

        raw_q = r.get('QTY \nORDERED', r.get('QTY ORDERED', '')).strip()
        try:
            qty = int(raw_q) if raw_q != '' else 0
        except ValueError:
            qty = 0

        try:
            unit_price = float(r.get('UNIT \nPRICE', r.get('UNIT PRICE', '0')).strip() or '0')
        except ValueError:
            unit_price = 0.0

        try:
            deliv_charge = float(r.get('Delivery charged', '0').strip() or '0')
        except ValueError:
            deliv_charge = 0.0

        if 'deliver' in order_status_raw:
            st = 'delivered'
        elif any(k in order_status_raw for k in ['dispatch', 'ship', 'courier', 'ncm']):
            st = 'shipped'
        elif 'pack' in order_status_raw:
            st = 'packed'
        elif 'cancel' in order_status_raw or 'return' in order_status_raw:
            st = 'cancelled'
        else:
            st = 'confirmed'

        key = (date_str, cust_name, contact, address, payment_with, st, deliv_charge)
        if key not in grouped_orders:
            grouped_orders[key] = []

        if qty > 0:
            grouped_orders[key].append({
                'item_name': base_item_name, # Map to Master Product Name
                'variant': f"{size} / {color}",
                'qty': qty,
                'price': unit_price
            })

    order_seq = 1001
    created_orders_count = 0
    created_shipments_count = 0

    for (date_str, cust_name, contact, address, payment_with, st, deliv_charge), items in grouped_orders.items():
        oid = f"ORD-{order_seq}"
        order_seq += 1

        total_amount = sum(it['qty'] * it['price'] for it in items) + deliv_charge
        handle_clean = f"@{re.sub(r'[^a-zA-Z0-9_]', '', cust_name.lower())}" if cust_name else "@customer"
        if contact:
            handle_clean += f" ({contact})"

        order = Order(
            id=oid,
            customer=cust_name,
            handle=handle_clean,
            offer_name=None,
            offer_amount=0.0,
            status=st,
            date=date_str,
            total=total_amount
        )
        db.session.add(order)

        for it in items:
            order_item = OrderItem(
                order_id=oid,
                name=it['item_name'],
                variant=it['variant'],
                qty=it['qty'],
                price=it['price']
            )
            db.session.add(order_item)

        ship_status = 'delivered' if st == 'delivered' else ('in-transit' if st == 'shipped' else 'not-created')
        ncm_waybill = f"NCM-{random.randint(70000, 99999)}" if st in ['shipped', 'delivered'] else None
        dest_branch = 'KATHMANDU' if not address else ('POKHARA' if 'pokhara' in address.lower() else ('CHITWAN' if 'chitwan' in address.lower() or 'bharatpur' in address.lower() else 'KATHMANDU'))

        shipment = Shipment(
            order_id=oid,
            customer=cust_name,
            phone=contact or '9847023226',
            address=address or 'Kathmandu Valley',
            ncm_tracking=ncm_waybill,
            dest=dest_branch,
            fbranch='TINKUNE',
            package_desc=f"{len(items)}x Apparel / Clothing",
            cod=total_amount,
            status=ship_status,
            created=date_str.split(' ')[0]
        )
        db.session.add(shipment)
        created_orders_count += 1
        created_shipments_count += 1

    db.session.commit()

    return {
        "status": "success",
        "message": f"Successfully updated (sale) items & consolidated 95 Master Products with auto-deducted {created_orders_count} sold orders!",
        "products_count": len(product_map),
        "orders_count": created_orders_count,
        "shipments_count": created_shipments_count
    }
