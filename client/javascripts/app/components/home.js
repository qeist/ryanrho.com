'use strict';

import React from 'react';
import r from 'r-dom';

import Header from './header';
import Content from './content';
import Footer from './footer';

export default React.createClass({

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
