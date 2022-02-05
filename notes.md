# General Notes

* install express and dependencies

```bash
npm init -y
npm install express --save

# extra modules in /node_modules
npm install express-flash --save
npm install express-session --save
npm install express-validator --save
npm install method-override --save
npm install mysql --save
npm i dotenv
npm i nodemon --save # auto refresh

npm i cookie-parser jsonwebtoken # cookies

npm i bcryptjs # for password hashing
# i think some of them you don't need --save I just saw the tutorial guy do them
# https://www.youtube.com/watch?v=VavWEtI5T7c 7:25 mark here he downloads stuff
```

* configure `package.json`: add `"start":"nodemon app.js"` in `"scripts"` ->

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"nodemon app.js"
  },
```
* This will make sure the scripts are run by nodemon (auto refresh!)
* `npm start` to run -> navigate to localhost:3001 (or whichever port specified in `app.js`)
* sometiems when you make changes you must refresh!

## To-do
* phone number parsing proper form