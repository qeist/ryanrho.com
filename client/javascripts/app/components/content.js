'use strict';

let React = require('react');
let r = require('r-dom');

module.exports = React.createClass({

  displayName: 'Content',

  render() {
    return (
      r.main({className: 'content flex--one padding-large'}, [
        r.div({className: 'content__intro center-block padding-small--ends'}, [
          r.p([
            'Ryan is a seasoned software engineer ',
            'with diverse technical skills and work experiences at startups, ',
            'research company, and corporations.'
          ]),

          r.p([
            'He is currently building his technical career on front-end & Node development, ',
            'focusing on responsive single page apps & hybrid apps ',
            'with skills of, but not limited to, ',
            r.a({href: 'http://nodejs.org/'}, 'Node.js'), ' and ',
            r.a({href: 'http://facebook.github.io/react/'}, 'React.js'), '.'
          ]),

          r.p([
            'Ryan\'s primary goal is to invent the future of lifestyles through ',
            'extensive tech skills. His main interests are software engineering, ',
            'user interface/experiences, and sharing economy.'
          ]),

          r.p('He received his bachelor\'s degree from the University of Illinois at Urbana-Champaign ' +
              'and master\'s degree from the University of California, Berkeley.')
        ])
      ])
    );
  }
});
