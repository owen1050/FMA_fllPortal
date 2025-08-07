from flask import Flask
from flask import request
from flask import send_file
from threading import Thread


app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/')
def main():
	return app.send_static_file('main.html')
    
@app.route('/api/isup')
def apiIsUp():
	return "1"


if __name__ == '__main__':

	app.run(host="0.0.0.0", port=8000)