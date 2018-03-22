var mysql = require('mysql');

var connection = function(){
	console.log('conexão on');
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'portal_noticias',
	});
}

module.exports = function(){
	return connection;
}