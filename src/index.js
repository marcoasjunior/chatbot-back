const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const router = require('./router')


// Express configs

app.use(express.json())

// Routes 

app.use('/api', router)

// Server

app.listen(port, () => {
  console.log('Listening to port', port)
})