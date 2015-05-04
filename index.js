'use strict';

import registerBabel from 'babel/register';
registerBabel();

import React from 'react';
import r from 'r-dom';

import ReactHtml from './client/javascripts/app/html.jsx';
import ReactKNightHtml from './client/javascripts/k-night/html.jsx';
import routes from './client/javascripts/routes.jsx';

let express = require('express');
let app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

function getRoute(HtmlComponent, req, res) {
  routes(req.originalUrl, (Handler) => {
    let html = React.renderToStaticMarkup(r(ReactKNightHtml, {
      markup: React.renderToString(r(Handler))
    }));

    res.send('<!DOCTYPE html>' + html);
  });
}

app.get('/', getRoute.bind(this, ReactHtml));
app.get('/k-night', getRoute.bind(this, ReactKNightHtml));

app.listen(app.get('port'), () => {
  let port = app.get('port');
  console.log(`Node app is running at localhost: ${port}`);
});
