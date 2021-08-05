const express = require('express');
const app = express();
const port = process.env.port || 9001

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server running correctly')
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})