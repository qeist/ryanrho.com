'use strict';

var global = require('global');
var document = require('global/document');

var React = require('react');
var r = require('r-dom');

var Home = require('./app/components/home');

var mountNode = document.getElementById('app');
React.render(r(Home), mountNode);

global.React = React;
