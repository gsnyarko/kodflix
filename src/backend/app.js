
const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const getData = require('./data');

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/rest/movies', (req, res) => {
    res.send(getData())
});

app.use(express.static(path.join(__dirname, '../../build')
));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});













/*

//module.export => exports a function at the backend/ equivalent to (export default in the frontend)
// module.export can be used once on a file.js backend file.. to import  multiple functions, we can
create a new function and put both innit
eg. export.modules = { Fn1, Fn2 }
// to import => const/let {nameOfFunction} = require ('./ file location')e
// durring import, curly braces are needed only when we have multiply imports
// express , framework to work in the backEnd , as React is a front-end library

*/