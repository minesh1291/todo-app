#!/usr/bin/env python3
"""
Simple HTTP server for the Todo application with CORS support.
Serves static files and handles cross-origin requests.
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
import sys

class CORSRequestHandler(SimpleHTTPRequestHandler):
    """
    Custom request handler with CORS support.
    Adds necessary headers for cross-origin requests.
    """
    
    def end_headers(self):
        """
        Add CORS and cache control headers to the response.
        """
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', '*')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

def main():
    """
    Main function to start the HTTP server.
    Uses environment variables HOST and PORT if available.
    """
    host = os.environ.get('HOST', '0.0.0.0')
    port = int(os.environ.get('PORT', 8081))

    server = HTTPServer((host, port), CORSRequestHandler)
    print(f"Server started at:")
    print(f"- Local: http://localhost:{port}")
    print(f"- Network: http://{host}:{port}")
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        sys.exit(0)

if __name__ == '__main__':
    main()