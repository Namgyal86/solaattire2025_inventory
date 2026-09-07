import sys
import os

# Add project root directory to Python search path
sys.path.insert(0, os.path.dirname(__file__))

# Import Flask app instance as 'application' for cPanel Phusion Passenger
from app import app as application

# Middleware to strip /solaattire prefix for subpath mounting on cPanel Passenger
class SubpathMiddleware(object):
    def __init__(self, app):
        self.app = app

    def __call__(self, environ, start_response):
        path_info = environ.get('PATH_INFO', '')
        if path_info.startswith('/solaattire'):
            path_info = path_info[len('/solaattire'):]
            if not path_info:
                path_info = '/'
            environ['PATH_INFO'] = path_info
        return self.app(environ, start_response)

application.wsgi_app = SubpathMiddleware(application.wsgi_app)
