'use strict';

var React = require('react');
var r = require('r-dom');

module.exports = React.createClass({

  displayName: 'App',

  render: function render() {
    return r.div('hello world');
  }
});
