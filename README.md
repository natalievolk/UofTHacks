# Journally - A journal entry a day. All through text.
## :star: :pencil2: :pencil: :gift:
![](images/main-page.png)
Welcome to Journally! Where we restore our memories one journal, one day at a time. Journally sends you a daily reminder via text, where you respond by writing a short journal, where you can access these journals later on the Journally website.

## :books: Technologies :books:
* **Twilio** to send our registered users *daily* messages to Journal!
* Secure `MySQL` database to to store user registration info and their journally entries
* `Flask` to *send* SMS from a user database of phone numbers
* `Flask` to *receive* SMS and store the user's Journallys into the database
* `Node.JS` for server routings, user registration on site, and storing user data into the database
* `Express.js` backend to host Journally
* `Bootstrap` for footers and buttons and a *responsive design*

## :computer: Get Journally on your Local Computer :computer:
* see `notes.md` for dependencies
* `Flask` and a virtual environment also required
* To run Flask (send and receive SMS messages), `cd sms_backend`, then `python app.py` in your terminal
* Create a `.env` file in your local root directory that stores the following variables:
  * `DATABASE` (name of your database)
  * `DATABASE_HOST` (localhost if on your local machine)
  * `DATABASE_USER` (usually root, can go to XAMPP or MAMP to determine)
  * `DATABASE_PASSWORD` (usually either empty or `root` depending on your db host server)
* To run the Journally website, ensure you're in the root directory and run `npm start`, then navigate to `localhost:3001`
* Make sure you have all the `Express.js` dependencies in `notes.md` installed!

## :footprints: Next Steps :footprints:
* allow simple markups like bolds in texts
* allow user to rate their day on a scale
* sort by scale feature
* feel free to contribute!! Let's Journally together
* encouraging/restoring quotes

## :pray: Contributors and Acknowledgments :pray:
* made by Natalie and Qingyuan
* thank you to virtually ALL relevant the documentations and online tutorials - we couldn't have done it without you
* thank you to U of T Hacks for giving us this restoring opportunity :)
