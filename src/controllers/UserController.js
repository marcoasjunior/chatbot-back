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
}