const mongoose = require('../mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    cpf: {
        type: Number,
        require: true,
    },

    city: {
        type: String,
        require: true,
    },

    uf: {
        type: String,
        require: true,
    }

}, {
    timestamps: true,
    versionKey: false
})

const User = mongoose.model('User', UserSchema, 'users')

module.exports = User