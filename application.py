import os

from flask import Flask , render_template , redirect ,url_for , request
from flask_socketio import SocketIO, emit , send

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)


@app.route('/')
def login():
	return render_template('page1.html')

@app.route('/sign up' )
def SIGN_UP():
	return render_template('page2.html')

@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)
    send(message,broodcost=True)


if __name__ == '__main__':
    socketio.run(app)