'use strict';

var React = require('react');
var r = require('r-dom');

module.exports = React.createClass({

  displayName: 'Home',

  render: function render() {
    return r.div('hello world!!');
  }
});
