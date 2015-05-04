'use strict';

import registerBabel from 'babel/register';
registerBabel();

import React from 'react';
import r from 'r-dom';

import ReactHtml from './client/javascripts/app/html';
import routes from './client/javascripts/app/routes.jsx';

let express = require('express');
let app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

function getRoute(req, res) {
  routes(req.originalUrl, (Handler) => {
    let html = React.renderToStaticMarkup(r(ReactHtml, {
      markup: React.renderToString(r(Handler))
    }));

    res.send('<!DOCTYPE html>' + html);
  });
}

app.get('/', getRoute);
app.get('/k-night/2015', getRoute);

app.listen(app.get('port'), () => {
  let port = app.get('port');
  console.log(`Node app is running at localhost: ${port}`);
});
