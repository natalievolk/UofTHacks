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


def receive_message(inbound_message):
    inbound_message = str(inbound_message).strip().split(" ")

    if inbound_message[0] in ["JOURNAL:", "journal:"]:
        reply = create_journal_entry(inbound_message)
    elif inbound_message[0] in ["HELP", 'help']:
        reply = get_help_message()
    elif (inbound_message[0]).lower() in ["hello", "hi", "hey"]:
        reply = get_greeting()
    else:
        reply = get_dont_understand()

    print(reply)
    return reply


def create_journal_entry(inbound_message):
    journal_entry = " ".join(inbound_message[1:])
    print(journal_entry)

    # ADD TO SQL DATABASE

    return "Your journal entry has been successfully recorded!"


def get_help_message():
    return "Looks like you need some help..."


def get_greeting():
    return "Hi there! Welcome to your journal :)"


def get_dont_understand():
    return "Not sure I understand... \n\nInclude 'JOURNAL:' at the beginning of your message to " \
        + "submit a journal entry or type HELP for some assistance."