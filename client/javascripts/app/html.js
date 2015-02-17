'use strict';

let React = require('react');
let r = require('r-dom');

module.exports = React.createClass({

  displayName: 'HTML',

  propTypes: {
    markup: React.PropTypes.string.isRequired
  },

  render() {
    return (
      r.html([
        r.head([
          r.meta({charSet: 'utf-8'}),
          r.meta({
            name: 'viewport',
            content: 'width=device-width, initial-scale=1 maximum-scale=1 user-scalable=no'
          }),
          r.title('Ryan Rho'),
          r.link({rel: 'stylesheet', href: '/style.css'})
        ]),

        r.body([
          r.div({id: 'app', dangerouslySetInnerHTML: {__html: this.props.markup}})
        ]),

        r.script({src: '/script.js'})
      ])
    );
  }
});
