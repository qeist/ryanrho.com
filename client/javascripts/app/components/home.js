'use strict';

import React from 'react';

import Header from './header';
import Content from './content';
import Footer from './footer';

export default React.createClass({

  displayName: 'Home',

  render() {
    return (
      <div className="home flexbox">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
});
