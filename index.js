'use strict';

require('babel/register');

var React = require('react');
var r = require('r-dom');

var ReactHtml = require('./client/javascripts/app/html.jsx');
var ReactKNightHtml = require('./client/javascripts/k-night/html.jsx');
var routes = require('./client/javascripts/routes.jsx');

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

function getRoute(HtmlComponent, req, res) {
  routes(req.originalUrl, function render(Handler) {
    let html = React.renderToStaticMarkup(r(ReactKNightHtml, {
      markup: React.renderToString(r(Handler))
    }));

    res.send('<!DOCTYPE html>' + html);
  });
}

app.get('/', getRoute.bind(this, ReactHtml));
app.get('/k-night', getRoute.bind(this, ReactKNightHtml));

app.listen(app.get('port'), () => {
  var port = app.get('port');
  console.log(`Node app is running at localhost: ${port}`);
});
