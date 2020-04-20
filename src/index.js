const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const router = require('./router')
const cors = require('cors')

// Express configs

app.use(cors())
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Routes 

app.use('/api', router)

// Server

app.listen(port, () => {
  console.log('Listening to port', port)
})