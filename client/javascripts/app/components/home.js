'use strict';

let React = require('react');
let r = require('r-dom');

module.exports = React.createClass({

  displayName: 'Home',

  render() {
    return r.div({className: 'container'}, [
      r.h1({className: 'text-center'}, 'Ryan Rho'),
      r.i({className: 'fa fa-bed'})
    ]);
  }
});
