from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/extract-comments', methods=['POST'])
def extract_comments():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')
        post_url = data.get('post_url')
        
        # Run your existing script with the provided credentials
        result = subprocess.run(
            ['python', 'script_fixed.py', email, password, post_url],
            capture_output=True,
            text=True
        )
        
        if result.returncode == 0:
            return jsonify({
                'success': True,
                'csv_content': result.stdout
            })
        else:
            return jsonify({
                'success': False,
                'error': result.stderr
            }), 500
            
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='localhost', port=5000)
