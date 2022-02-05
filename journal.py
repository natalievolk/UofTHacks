from auth import ACCOUNT_SID, AUTH_TOKEN, OUTGOING_PHONE, INCOMING_PHONE

from datetime import datetime
from twilio.rest import Client

#import os


client = Client(ACCOUNT_SID, AUTH_TOKEN)


def send_reminder():

    current_time = datetime.now().strftime("%H:%M")
    send_time = "15:54"

    if current_time == send_time:
        message = client.messages.create(
            body="\n\nTime to journal :) \n\nStart your entry with 'JOURNAL: '",
            from_=OUTGOING_PHONE,
            to=INCOMING_PHONE
        )

        print("message sent to", message.to, "at", send_time)

