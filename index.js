var express = require('express');
var app = express();

app.get('/', (req,res) => {
    res.send('Magic happens on port 8081');
});


app.listen('8081');

exports = module.exports = app;