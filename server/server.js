const express = require('express');
const bodyParser = require('body-parser'); //understands http data
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

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
        firstName: 'Glenn',
        lastName: 'Deroeck',
        email: 'glennderoeck@veryhotmail.cum'
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