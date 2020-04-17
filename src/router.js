const express = require('express')
const router = express()
const BotController = require('./controllers/BotController')
const QnAController = require('./controllers/QnAController')


router.get('/messages/2', function(req, res) {
    res.json('estou vivo!')
})

router.get('/question/:step', QnAController.find)

// Criar Pergunta

router.post('/qna', QnAController.create)


module.exports = router