from flask import Flask, request, jsonify, redirect
from flask import render_template
from models import*
import string,random

app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///urls.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db.init_app(app) 

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return render_template('index.html')

def generate_short_code(length=6):
    characters=string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

@app.route('/shorten',methods=['POST'])
def shorten_url():
    data=request.get_json()
    long_url = data.get('long_url')
    
    if not long_url:
           return jsonify({'error': 'URL is required'}), 400

    short_code = generate_short_code()
    new_url = URL(long_url=long_url, short_code=short_code)
    db.session.add(new_url)
    db.session.commit()
    return jsonify({
        'long_url': long_url,
        'short_url': f'http://127.0.0.1:5000/{short_code}'
    })

# --- Redirect route ---
@app.route('/<short_code>')
def redirect_to_long(short_code):
    url_entry = URL.query.filter_by(short_code=short_code).first()
    if url_entry:
        return redirect(url_entry.long_url)
    return jsonify({'error': 'URL not found'}), 404



if __name__=='__main__':
    app.run(debug=True)

