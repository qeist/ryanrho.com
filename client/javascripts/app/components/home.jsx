'use strict';

import React from 'react';

import Header from './header.jsx';
import Content from './content.jsx';
import Footer from './footer.jsx';

export default React.createClass({

  displayName: 'Home',

  render() {
    return (
      <div className="home flexbox flexbox--column">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
});
