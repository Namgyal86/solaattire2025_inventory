import sys
import os

# Add application directory to python path
sys.path.insert(0, os.path.dirname(__file__))

# Import Flask app instance as application for cPanel Phusion Passenger
from app import app as application
