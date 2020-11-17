const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    carrerPath: {
        type: String,
        required: true
    },
    jobSituation: {
        type: String,
        required: true
    },
    presentationLetter: {
        type: String,
        required: true
    },
    competences: {
        type: [Number]
    },
    completedTrainings: {
        type: [Number]
    },
    suggestedTrainings: {
        type: [Number]
    },
    exams: {
        type: [Number]
    },
    date: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model('User', UserSchema)