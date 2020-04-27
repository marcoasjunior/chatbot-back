const express = require('express')
const router = express()
const QnAController = require('./controllers/QnAController')
const UserController = require('./controllers/UserController')
const AppointmentController = require('./controllers/AppointmentController')
const passport = require('passport')
const cors = require('cors')
const {
    celebrate,
    Segments,
    Joi
} = require('celebrate')

router.use(cors())

router.get('/messages/2', function(req, res) {
    res.json('estou vivo!')
})

router.get('/question/:step', QnAController.find)
router.get('/appointment/:userId', AppointmentController.find)
router.get('/user/:userId', UserController.find)

// Criar Pergunta

router.post('/qna', celebrate({
    [Segments.BODY]: Joi.object().keys({
        step: Joi.string().required(),
        question: Joi.string().required(),
        type: Joi.string().required(),
        multiChoices: Joi.array()

    })
}), QnAController.create)

// Usuário

router.post('/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().min(10).max(11),
        password: Joi.string().required(),
        cpf: Joi.number().required()
    })
}), UserController.create)

router.post('/user/update', UserController.update)

// Criar Compromisso

router.post('/appointment', AppointmentController.create)

// Auth

router.post('/login', passport.authenticate('local', {
    session: false
}), function (req, res) {
    res.send(req.user._id)
})


module.exports = router