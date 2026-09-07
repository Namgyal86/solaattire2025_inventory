import sys
import os
import traceback

# Add project root directory to Python search path
basedir = os.path.dirname(__file__)
sys.path.insert(0, basedir)

try:
    from app import app as application

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

except Exception as err:
    err_tb = traceback.format_exc()
    def application(environ, start_response):
        status = '200 OK'
        output = f"=== PYTHON STARTUP ERROR DIAGNOSTIC ===\n\nError: {str(err)}\n\nTraceback:\n{err_tb}".encode('utf-8')
        response_headers = [('Content-Type', 'text/plain; charset=utf-8'), ('Content-Length', str(len(output)))]
        start_response(status, response_headers)
        return [output]
