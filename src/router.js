const express = require('express')
const router = express()
const BotController = require('./controllers/BotController')


router.get('/teste', function(req, res) {
    res.json('estou vivo!')
})

router.post('/messages', BotController.run)


module.exports = router