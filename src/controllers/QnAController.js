const QnA = require('../database/Models/QnA')

module.exports = {

    async create(req, res) {

        let qna = new QnA({
            step: req.body.step,
            question: req.body.question,

        })

        qna.save()
            .then(result => {
                console.log(result)
                return res.json(result)
            })
            .catch(err => {
                return res.json(err)
            })

    },

    async find(req, res) {

        let step = req.params.step

        console.log(step)

        QnA.find({step: step}, (err, response) => {

            if (err) return res.json(err)

            console.log(response)

            res.json(response)

        })

    },

}