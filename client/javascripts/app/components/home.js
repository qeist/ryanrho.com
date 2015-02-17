'use strict';

let React = require('react');
let r = require('r-dom');

module.exports = React.createClass({

  displayName: 'Home',

  render() {
    return r.div('hello world!');
  }
});
