'use strict';

import React from 'react';
import r from 'r-dom';

const LINKS = [
  {
    class: 'fa fa-facebook',
    link: 'https://fb.com/ryanrho'
  },
  {
    class: 'fa fa-twitter',
    link: 'https://twitter.com/ryanrho'
  },
  {
    class: 'fa fa-linkedin',
    link: 'https://www.linkedin.com/in/ryanrho'
  },
  {
    class: 'fa fa-github',
    link: 'https://github.com/rhobot'
  }
];

export default React.createClass({

  displayName: 'Footer',

  render: function render() {
    return (
      r.footer({className: 'footer flex--none padding'}, [
        r.ul({className: 'text-center list-unstyled list-inline'},
          LINKS.map(function renderLink(item, index) {
            return (
              r.li({key: index, className: 'padding-small'}, [
                r.a({className: 'margin--sides', href: item.link}, [
                  r.i({className: item.class})
                ])
              ])
            );
          })
        )
      ])
    );
  }
});
