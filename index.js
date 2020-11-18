const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express();
app.use(bodyParser.json())

// Import routes
const jobsRoute = require('./src/routes/jobs')
app.use('/jobs', jobsRoute)

const usersRoute = require('./src/routes/users')
app.use('/users', usersRoute)

// Routes
app.get('/', (req, res) => {
    res.send('We are on home page!')
})

// How to we start listening to the server
app.listen(3030)

// Replace the uri string with your MongoDB deployment's connection string.
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {useNewUrlParser: true}, () => {console.log('Connected to DB!')})