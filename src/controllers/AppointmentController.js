const Appointment = require('../database/Models/Appointment')

module.exports = {

    async create(req, res) {

        let appointment = new Appointment({
            date: req.body.date,
            user: req.body.user,
            status: 'Marcada'

        })

        appointment.save()
            .then(result => {
                console.log(result)
                return res.json(result)
            })
            .catch(err => {
                return res.json(err)
            })
    },

    async find(req, res) {

        let id = req.params.userId

        Appointment.find({user: id}, (err, response) => {

            if (err) return res.json(err)

            console.log(response)

            res.json(response)

        })

    },

}