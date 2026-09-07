import sys
import os

# Add project root directory to Python search path
basedir = os.path.abspath(os.path.dirname(__file__))
sys.path.insert(0, basedir)

from app import app
from services.sheet_sync import sync_google_sheet_data

if __name__ == '__main__':
    with app.app_context():
        print("Initializing & Syncing Real Sola Attire Store Data...")
        res = sync_google_sheet_data()
        print("Data Sync Result:", res)
        print("Real business data loaded successfully!")
