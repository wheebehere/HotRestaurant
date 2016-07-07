var path = require('path')

module.exports = function(app){

var tableData = require('../data/table-data.js');
var waitingList = require('../data/waitinglist-data.js');

	app.get('/', function(req, res){
		
		//send to homepage
		res.sendFile(path.join(__dirname, 'public', '/home.html'));
	})

	app.get('/reserve.html', function(req, res){
		
		//send to homepage
		res.sendFile(path.join(__dirname, 'public', '/reserve.html'));
	});

	app.get('/tables', function(req, res){
		res.render('tables', {
			tables: tableData
		})
		//send to homepage
		//res.sendFile(path.join(__dirname, 'public', '/tables.html'));
	});

};