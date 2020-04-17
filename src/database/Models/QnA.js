const mongoose = require('../mongoose')

const QnASchema = new mongoose.Schema({

    step: {
        type: String,
        require: true
    },

    question: {
        type: String,
        require: true,
    }

}, {
    timestamps: true,
    versionKey: false
})

const User = mongoose.model('QnA', QnASchema, 'qna')

module.exports = User