require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const authCtrl = require('./controllers/authCtrl')
const expenseCtrl = require('./controllers/expenseCtrl')
const budgetCtrl = require('./controllers/budgetCtrl')
const reportCtrl = require('./controllers/reportCtrl')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
      console.log(`Listening on port: ${SERVER_PORT}`)
    })
    
    console.log(db.listTables())

  
  })

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false

}))

//auth register and login Controllers
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)


