'use strict';

let React = require('react');
let r = require('r-dom');

const links = [
  {
    class: 'fa fa-facebook',
    link: 'https://fb.com/ryanrho'
  },
  {
    class: 'fa fa-linkedin',
    link: 'https://www.linkedin.com/in/ryanrho'
  },
  {
    class: 'fa fa-github',
    link: 'https://github.com/rhobot'
  },
  {
    class: 'fa fa-envelope',
    link: 'mailto:i@ryanrho.com'
  }
];

module.exports = React.createClass({

  displayName: 'Home',

  render() {
    return (
      r.div({className: 'container'}, [
        r.h1({className: 'text-center'}, 'Ryan Rho'),

        r.ul({className: 'text-center list-unstyled list-inline'},
          links.map(function renderLink(item) {
            return (
              r.a({href: item.link}, [
                r.i({className: item.class})
              ])
            );
          })
        )
      ])
    );
  }
});
