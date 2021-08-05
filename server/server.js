const express = require('express');

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