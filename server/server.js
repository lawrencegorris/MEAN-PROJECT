const express = require('express');

const Friend = require('./schemas/friend-schema')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mean-project-db', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Connected to database')
})


const app = express();
const port = process.env.port || 9001

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server running correctly')
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})

// Put data to database

app.get('/add-friend', (req, res) => {
    const friend = new Friend({
        firstName: 'Elongated',
        lastName: 'Muskrat',
        email: 'elonmusk@spacex.space'
    });

    friend.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {{
            console.log(err)
        }})
})

// Get data from database
app.get('/all-friends', (req, res) => {
    Friend.find()
        .then((result) => {
            res.send(result)
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

// Get single friend

app.get('/single-friend', (req, res) => {
    Friend.findById('610cefea1aacca303898d264')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})