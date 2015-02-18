'use strict';

require('babel/register');

var React = require('react');
var r = require('r-dom');

var ReactHtml = require('./client/javascripts/app/html');
var ReactHome = require('./client/javascripts/app/components/home');

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function getRoot(request, response) {

  var html = React.renderToStaticMarkup(r(ReactHtml, {
    markup: React.renderToString(r(ReactHome))
  }));

  response.send('<!DOCTYPE html>' + html);
});

app.listen(app.get('port'), function openPort() {
  var port = app.get('port');
  console.log('Node app is running at localhost: ' + port);
});
