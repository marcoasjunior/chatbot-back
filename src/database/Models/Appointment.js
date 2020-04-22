const mongoose = require('../mongoose')

const AppointmentSchema = new mongoose.Schema({

    date: {
        type: Date,
        require: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    status: {
        type: String
    }

}, {
    timestamps: true,
    versionKey: false
})

const Appointment = mongoose.model('Appointment', AppointmentSchema, 'appointments')

module.exports = Appointment