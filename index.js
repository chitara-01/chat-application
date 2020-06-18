var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var controllers = require('./controllers');

app.use(bodyParser.json());
app.get('/',controllers.showHomePage);
app.post('/signup',controllers.signup);
app.post('/login',controllers.login);
app.post('/sendMessage',controllers.sessionValidator,controllers.sendMessage);

app.listen('8081');

exports = module.exports = app;

