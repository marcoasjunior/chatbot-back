const mongoose = require('../mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    cpf: {
        type: Number,
        require: true,
        unique: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    whatsapp: {
        type: Number,
        require: true,
    },

    password: {
        type: String,
        require: true,
        max: 14,
        min: 6
    }

}, {
    timestamps: true,
    versionKey: false
})

const User = mongoose.model('User', UserSchema, 'users')

module.exports = User