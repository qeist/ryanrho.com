'use strict';

var React = require('react');
var r = require('r-dom');
var ReactApp = require('./client/javascripts/app');

var express = require('express');
var app = express();

app.set('port', (5000));
app.use(express.static(`${__dirname}/public`));

app.get('/', function getRoot(request, response) {
  var html = React.renderToString(r(ReactApp));
  response.send(html);
});

app.listen(app.get('port'), function openPort() {
  var port = app.get('port');
  console.log(`Node app is running at localhost: ${port}`);
});
