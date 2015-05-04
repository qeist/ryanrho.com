'use strict';

import React from 'react';
import r from 'r-dom';

export default React.createClass({

  displayName: 'Content',

  render() {
    return (
      <main className="content flex--one padding-large">
        <div className="content__intro center-block padding-small--ends">
          <p>
            Ryan is a seasoned software engineer
            with diverse technical skills and work experiences at startups,
            research company, and corporations.
          </p>
          <p>
            He is currently building his technical career on front-end & Node development,
            focusing on responsive single page apps & hybrid apps
            with skills of, but not limited to, <a href="http://nodejs.org/">Node</a> and <a href="http://facebook.github.io/react/">React</a>.
          </p>
          <p>
            Ryan's primary goal is to invent the future of lifestyles through
            extensive tech skills. His main interests are software engineering,
            user interface/experiences, and sharing economy.
          </p>
          <p>
            He received his bachelor's degree from the University of Illinois at Urbana-Champaign
            and master's degree from the University of California, Berkeley.
          </p>
        </div>
      </main>
    );
  }
});
