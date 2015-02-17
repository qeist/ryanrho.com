'use strict';

var React = require('react');
var r = require('r-dom');

module.exports = React.createClass({

  displayName: 'App',

  render: function render() {
    return (
      r.html([
        r.head([
          r.meta({charSet: 'utf-8'}),
          r.meta({name: 'viewport', content: 'width=device-width, user-scalable=no'}),
          r.title(['Ryan Rho']),
          r.link({rel: 'stylesheet', href: '/style.css'})
        ]),

        r.body([
          r.div({id: 'app'}, ['hello world'])
        ]),

        r.script({src: '/script.js'})
      ])
    );
  }
});
