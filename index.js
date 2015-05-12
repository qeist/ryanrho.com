'use strict';

require('babel/register');

var React = require('react');
var r = require('r-dom');

var ReactHtml = require('./client/javascripts/app/html.jsx');
var ReactKNightHtml = require('./client/javascripts/k-night/html.jsx');
var routes = require('./client/javascripts/routes.jsx');

var express = require('express');
var compression = require('compression');
var app = express();
app.use(compression());

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

function getRoute(HtmlComponent, req, res) {
  routes(req.originalUrl, function render(Handler) {
    var html = React.renderToStaticMarkup(r(HtmlComponent, {
      markup: React.renderToString(r(Handler))
    }));

    res.send('<!DOCTYPE html>' + html);
  });
}

app.get('/', getRoute.bind(this, ReactHtml));
app.get('/knight', getRoute.bind(this, ReactKNightHtml));

app.listen(app.get('port'), function run() {
  var port = app.get('port');
  console.log('Node app is running at localhost: ' + port);
});
