from flask import Flask
from flask import request
from flask import send_file
from threading import Thread

from DBInterface import dbInterface


app = Flask(__name__, static_folder='static', static_url_path='')
db = dbInterface()

@app.route('/')
def main():
	return app.send_static_file('main.html')
    
@app.route('/api/isServerUp')
def apiIsServerUp():
	return "1"

@app.route('/api/isDBUp')
def apiIsDBUp():
	return db.testConnection()


if __name__ == '__main__':
	app.run(host="0.0.0.0", port=8000)