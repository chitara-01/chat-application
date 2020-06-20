var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var controllers = require('./controllers');
var socket = require('socket.io');

app.use(bodyParser.json());
app.get('/',controllers.showHomePage);
app.post('/signup',controllers.signup);
app.post('/login',controllers.login);
app.post('/sendMessage',controllers.sendMessage);

app.listen('8081');

exports = module.exports = app;

