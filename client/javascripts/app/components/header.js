'use strict';

import React from 'react';

export default React.createClass({

  displayName: 'Header',

  render() {
    return (
      <header className="header flex--none padding-large--ends">
        <div className="margin--sides text-center">
          <h1>Ryan Rho</h1>
          <h2>Software Engineer at Uber</h2>
        </div>
      </header>
    );
  }
});
