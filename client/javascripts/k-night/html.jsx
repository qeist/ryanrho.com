'use strict';

import React from 'react';

export default React.createClass({

  displayName: 'HTML',

  propTypes: {
    markup: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1 user-scalable=no" />
          <title>K-Night - The Next Rise</title>
          <link rel="stylesheet" href="/style.css" />
          <body>
            <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}} />
          </body>
          <script src="/script.js"/>
        </head>
      </html>
    );
  }
});
