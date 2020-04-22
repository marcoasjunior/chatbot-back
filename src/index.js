const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const router = require('./router')
const passport = require('passport')
const Strategy = require('./utils/passport')


// Express configs

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})
app.use(express.json())

// Routes 

app.use('/api', router)

// Auth

passport.use(Strategy)

// Server

app.listen(port, () => {
  console.log('Listening to port', port)
})