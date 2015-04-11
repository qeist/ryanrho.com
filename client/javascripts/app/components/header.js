'use strict';

import React from 'react';
import r from 'r-dom';

export default React.createClass({

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
