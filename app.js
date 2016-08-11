var express = require('express');
var app = express();
var path = require('path');
var client = require('twilio');



app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('i am a beautiful butterfly');
});

app.get('/test', function(req, res) {
	client.sendMessage({
		to: '+841696359605',
		from: '+13108536780',
		body: 'Test send code from twillio',
		
		
	}, function(err, data) {
		if(err) {
			console.log(err);
		}
		console.log(data);
	});
});

app.listen(3000);
console.log("Server running in: localhost:3000");