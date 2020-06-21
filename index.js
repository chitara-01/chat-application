var express = require('express');
var socket = require('socket.io');

var bodyParser = require('body-parser');
var controllers = require('./controllers');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.get('/',controllers.showHomePage);
app.post('/signup',controllers.signup);
app.post('/login',controllers.login);
app.post('/sendMessage',controllers.sendMessage);


app.listen('4000');
console.log('Listening for requests on port 4000...');

exports = module.exports = app;

