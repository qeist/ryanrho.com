'use strict';

let React = require('react');
let r = require('r-dom');

let Header = require('./header');
let Content = require('./content');
let Footer = require('./footer');

module.exports = React.createClass({

  displayName: 'Home',

  render() {
    return (
      r.div({className: 'home flexbox'}, [
        r(Header),
        r(Content),
        r(Footer)
      ])
    );
  }
});
