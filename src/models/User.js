const mongoose = require('mongoose')

const AvatarSchema = mongoose.Schema({
    avatarStyle: {
        type: String,
        default: "Circle"
    },
    topType: {
        type: String,
        default: "ShortHairDreads01"
    },
    accessoriesType: {
        type: String,
        default: "Prescription02"
    },
    hairColor: {
        type: String,
        default: "Auburn"
    },
    facialHairType: {
        type: String,
        default: "BeardMagestic"
    },
    facilHairColor: {
        type: String,
        default: "Auburn"
    },
    clotheType: {
        type: String,
        default: "ShirtScoopNeck"
    },
    clothColor: {
        type: String,
        default: "Heather"
    },
    eyeType: {
        type: String,
        default: "Wink"
    },
    eyebrowType: {
        type: String,
        default: "SadConcernedNatural"
    },
    mouthType: {
        type: String,
        default: "Smile"
    },
    skinColor: {
        type: String,
        default: "Brown"
    }
})

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
    avatar: {
        type: AvatarSchema,
        default: {}
    }

})

module.exports = mongoose.model('User', UserSchema)