var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

var exphbs = require('express-handlebars');
var handlebars = require('handlebars')
app.engine('handlebars',exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

var PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//require html-routes

	app.use(express.static('public'));
require('./app/routing/html-routes.js')(app);

require('./app/routing/api-routes.js').apimodules(app);



app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})