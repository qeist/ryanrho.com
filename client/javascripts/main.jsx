'use strict';

import global from 'global';
import document from 'global/document';

import React from 'react';
import ReactRouter from 'react-router';
let {HistoryLocation} = ReactRouter;

import routes from './routes.jsx';

let mountNode = document.getElementById('app');

routes(HistoryLocation, (Handler) => {
  React.render(<Handler />, mountNode);
});

global.React = React;
