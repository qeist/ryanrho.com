'use strict';

let React = require('react');
let r = require('r-dom');

let ReactHtml = require('./client/javascripts/app/html');
let ReactHome = require('./client/javascripts/app/components/home');

let express = require('express');
let app = express();

app.set('port', (5000));
app.use(express.static(`${__dirname}/public`));

app.get('/', function getRoot(request, response) {

  let html = React.renderToStaticMarkup(r(ReactHtml, {
    markup: React.renderToString(r(ReactHome))
  }));

  response.send('<!DOCTYPE html>' + html);
});

app.listen(app.get('port'), function openPort() {
  let port = app.get('port');
  console.log(`Node app is running at localhost: ${port}`);
});
