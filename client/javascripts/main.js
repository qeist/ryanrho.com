'use strict';

var global = require('global');
var document = require('global/document');

var React = require('react');
var r = require('r-dom');

var App = require('./app');

var mountNode = document.getElementById('app');
React.render(r(App), mountNode);

global.React = React;
