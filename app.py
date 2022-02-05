from flask import Flask, Response, request
from twilio import twiml
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

@app.route("/")
def test_app():
    return Response("heheh hello"), 200

@app.route("/respondsms", methods=["POST"])
def respondsms():
    response = MessagingResponse()
    inbound_message = request.form["Body"]
    if inbound_message == "Hello":
        response.message("hi there, how can i help")
    else:
        response.message("what im so confused")
    return Response(str(response), mimetype="application/xml"), 200

if __name__ == "__main__":
    app.run(debug=True)