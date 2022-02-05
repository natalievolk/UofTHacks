from flask import Flask, Response, request
from twilio import twiml
from twilio.twiml.messaging_response import MessagingResponse
#from flask_apscheduler import APScheduler

from journal import send_reminder, receive_message
from apscheduler.schedulers.background import BackgroundScheduler

app = Flask(__name__)

scheduler = BackgroundScheduler()
scheduler.add_job(func=send_reminder, trigger="interval", seconds=60)
scheduler.start()

@app.route("/")
def test_app():
    return Response("heheh hello"), 200

@app.route("/respondsms", methods=["POST"])
def respondsms():
    response = MessagingResponse()
    inbound_message = request.form["Body"]

    reply_message = receive_message(inbound_message)

    response.message(reply_message)

    return Response(str(response), mimetype="application/xml"), 200

if __name__ == "__main__":
    app.run(debug=True)