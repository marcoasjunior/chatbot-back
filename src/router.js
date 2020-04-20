const express = require('express')
const router = express()
const BotController = require('./controllers/BotController')
const QnAController = require('./controllers/QnAController')
const UserController = require('./controllers/UserController')


router.get('/messages/2', function(req, res) {
    res.json('estou vivo!')
})

router.get('/question/:step', QnAController.find)

// Criar Pergunta

router.post('/qna', QnAController.create)

// Criar Usuário

router.post('/user', UserController.create)


module.exports = router