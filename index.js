'use strict';

var express = require('express');

var app = express();

app.set('port', (5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function getRoot(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function openPort() {
  console.log('Node app is running at localhost:' + app.get('port'));
});
