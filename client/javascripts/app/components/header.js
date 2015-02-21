'use strict';

let React = require('react');
let r = require('r-dom');

module.exports = React.createClass({

  displayName: 'Header',

  render() {
    return (
      r.header({className: 'header flex--none padding-large--ends'}, [
        r.div({className: 'margin--sides text-center'}, [
          r.h1('Ryan Rho'),
          r.h2('Software Engineer at Uber')
        ])
      ])
    );
  }
});
