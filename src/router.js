const express = require('express')
const router = express()
const QnAController = require('./controllers/QnAController')
const UserController = require('./controllers/UserController')
const AppointmentController = require('./controllers/AppointmentController')
const cors = require('cors')

router.use(cors())

router.get('/messages/2', function(req, res) {
    res.json('estou vivo!')
})

router.get('/question/:step', QnAController.find)

// Criar Pergunta

router.post('/qna', QnAController.create)

// Criar Usuário

router.post('/user', UserController.create)

// Criar Compromisso

router.post('/appointment', AppointmentController.create)


module.exports = router