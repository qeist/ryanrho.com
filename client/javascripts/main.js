'use strict';

let global = require('global');
let document = require('global/document');

let React = require('react');
let r = require('r-dom');

let Home = require('./app/components/home');

let mountNode = document.getElementById('app');
React.render(r(Home), mountNode);

global.React = React;
