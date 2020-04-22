const User = require('../database/Models/User')

module.exports = {

    async create(req, res) {

        let user = new User({
            name: req.body.name,
            cpf: req.body.cpf,
            email: req.body.email,
            password: req.body.password

        })

        user.save()
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

        User.find({_id: id}, (err, response) => {

            if (err) return res.json(err)

            console.log(response)

            res.json(response)

        })
    },

    async update(req, res) {

        const {id, name, email, whatsapp, password} = req.body

        User.findByIdAndUpdate(id, {
            name: name,
            email: email,
            password: password,
            whatsapp: whatsapp

        }, (err, response) => {

            if (err) return res.json(err)

            console.log(response)

            res.json(response)

        })
    },

}