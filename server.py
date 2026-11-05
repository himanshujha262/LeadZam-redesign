#!/usr/bin/env python3
"""
LeadZam Local Development & Preview Server
Serves the LeadZam React Application & prototypes on http://localhost:8080
"""
import http.server
import socketserver
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(DIRECTORY, "dist")

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and disable aggressive caching for local development
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_GET(self):
        # Strip query parameters for routing
        clean_path = self.path.split('?')[0].split('#')[0]

        # 1. Check if direct file exists in workspace
        direct_file = os.path.join(DIRECTORY, clean_path.lstrip('/'))
        if clean_path != '/' and os.path.isfile(direct_file):
            return super().do_GET()

        # 2. Check if file exists inside dist (e.g. /assets/index-xxx.js)
        if os.path.exists(DIST_DIR):
            dist_file = os.path.join(DIST_DIR, clean_path.lstrip('/'))
            if os.path.isfile(dist_file):
                self.directory = DIST_DIR
                return super().do_GET()

        # 3. SPA Route Fallback -> serve dist/index.html if built, else root index.html
        if os.path.exists(os.path.join(DIST_DIR, "index.html")):
            self.path = "/dist/index.html"
        return super().do_GET()

def main():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
        print(f"==================================================")
        print(f"  🚀 LeadZam React Application Running!")
        print(f"  👉 Open URL: http://localhost:{PORT}")
        print(f"  Application Routes:")
        print(f"    - Leads CRM:     http://localhost:{PORT}/leads")
        print(f"    - Lead Details:  http://localhost:{PORT}/leads/lead-1")
        print(f"    - Dashboard:     http://localhost:{PORT}/dashboard")
        print(f"    - Sign In:       http://localhost:{PORT}/login")
        print(f"    - Sign Up:       http://localhost:{PORT}/signup")
        print(f"  Legacy Prototypes:")
        print(f"    - Landing Page:  http://localhost:{PORT}/landing.html")
        print(f"    - CRM Prototype: http://localhost:{PORT}/dashboard.html")
        print(f"  Press Ctrl+C to stop.")
        print(f"==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.server_close()

if __name__ == '__main__':
    main()
