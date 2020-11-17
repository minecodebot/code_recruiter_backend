const express = require('express');
const router = express.Router();

const User = require('../models/User')

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users) 
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

// CRUD

router.post('/', async (req, res) => {
    try {
        const savedUser = await User.create({
            name: req.body.name,
            surname: req.body.surname,
            jobTitle: req.body.jobTitle,
            company: req.body.company,
            carrerPath: req.body.carrerPath,
            jobSituation: req.body.jobSituation,
            presentationLetter: req.body.presentationLetter,
        })
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})
        res.status(200).json(user) 
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const user = await User.updateOne({_id: req.params.id}, {
            $set: {
                name: req.body.name,
                surname: req.body.surname,
                jobTitle: req.body.jobTitle,
                company: req.body.company,
                carrerPath: req.body.carrerPath,
                jobSituation: req.body.jobSituation,
                presentationLetter: req.body.presentationLetter,
            }
        })
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({ message: err })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.deleteOne({_id: req.params.id})
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({ message: err })
    }
})


module.exports = router