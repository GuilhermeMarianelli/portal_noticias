var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.set('view engine','ejs');
app.set('views','app/views');

app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(expressValidator());

consign().
include('app/routes').
then('app/controllers').
then('app/models').
then('config/connection.js').
into(app);

app.listen(3000,() => {
	console.log('Servidor ON!');
});

module.exports = function(){
	return app;
}