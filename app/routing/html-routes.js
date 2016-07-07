

module.exports = function(app){



	app.get('/', function(req, res){
		
		//send to homepage
		res.sendFile(path.join(__dirname, 'public', '/home.html'));
	})

	app.get('/reserve.html', function(req, res){
		
		//send to homepage
		res.sendFile(path.join(__dirname, 'public', '/reserve.html'));
	});

	app.get('/tables.html', function(req, res){
		
		//send to homepage
		res.sendFile(path.join(__dirname, 'public', '/tables.html'));
	});

};