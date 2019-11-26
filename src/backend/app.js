
const express = require('express')
const app = express()
const port = 3000
const getData = require('./data');

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




app.get('/rest/movies', (req, res) => {
    res.send(getData())
});