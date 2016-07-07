
exports.apimodules = function(app, reservations){

	app.get('/api/tables', function(req, res){



	});

	app.post('/api/waitlist', function(req, res){
		var newWait = req.body;

		console.log(newWait);

		waitList.push(newWait);

		res.json(newWait);
	});

}