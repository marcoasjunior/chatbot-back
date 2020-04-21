const mongoose = require('../mongoose')

const QnASchema = new mongoose.Schema({

    step: {
        type: String,
        require: true
    },

    question: {
        type: String,
        require: true,
    },

    type: {
        type: String,
        require: true,
    },

    multiChoices: {
        type: Array
    }

}, {
    timestamps: true,
    versionKey: false
})

const User = mongoose.model('QnA', QnASchema, 'qna')

module.exports = User