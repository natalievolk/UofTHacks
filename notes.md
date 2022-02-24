# General Notes

* install express and dependencies

```bash
npm init -y
npm install
```

* Change Feb 24 on Qingyuan branch: uninstalled nodemon and reinstalled as dev dependency:
```bash
npm uninstall nodemon
npm install --save-dev nodemon
```

* configure `package.json`: add `"dev":"nodemon app.js"` in `"scripts"` ->

```json
  "scripts": {
    "start": "index app",
    "dev": "nodemon app"
  },
```
* This will make sure the scripts are run by nodemon (auto refresh!)
* `npm run dev` to run -> navigate to localhost:3001 (or whichever port specified in `app.js`)
* sometiems when you make changes you must refresh!

## To-do
* phone number parsing proper form
* email confirmation

## NEXT STEPS
* see `README.md`
* email verification