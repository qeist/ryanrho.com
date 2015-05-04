'use strict';

import React from 'react';

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

  render() {
    return (
      <footer className="footer flex--none padding">
        <ul className="text-center list-unstyled list-inline">
          {LINKS.map((item, index) => {
            return (
              <li key={index} className="padding-small">
                <a className="margin--sides" href={item.link}>
                  <i className={item.class} />
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    );
  }
});
