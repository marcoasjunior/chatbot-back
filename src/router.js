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
router.get('/appointment/:userId', AppointmentController.find)
router.get('/user/:userId', UserController.find)

// Criar Pergunta

router.post('/qna', QnAController.create)

// Usuário

router.post('/user', UserController.create)
router.post('/user/update', UserController.update)

// Criar Compromisso

router.post('/appointment', AppointmentController.create)


module.exports = router