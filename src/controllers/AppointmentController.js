const Appointment = require('../database/Models/Appointment')

module.exports = {

    async create(req, res) {

        let appointment = new Appointment({
            step: req.body.date,
            user: req.body.user

        })

        appointment.save()
            .then(result => {
                console.log(result)
                return res.json(result)
            })
            .catch(err => {
                return res.json(err)
            })
    }

}