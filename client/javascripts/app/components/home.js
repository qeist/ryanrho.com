'use strict';

let React = require('react');
let r = require('r-dom');

const links = [
  {
    class: 'fa fa-facebook',
    link: 'https://fb.com/ryanrho'
  },
  {
    class: 'fa fa-linkedin',
    link: 'https://www.linkedin.com/in/ryanrho'
  },
  {
    class: 'fa fa-github',
    link: 'https://github.com/rhobot'
  },
  {
    class: 'fa fa-envelope',
    link: 'mailto:i@ryanrho.com'
  }
];

module.exports = React.createClass({

  displayName: 'Home',

  render() {
    return (
      r.div({className: 'home'}, [

        r.header({className: 'header padding-large--ends'}, [
          r.h1({className: 'text-center'}, 'Ryan Rho'),
          r.h2({className: 'header__subtitle text-center'}, [
            'Software Engineer at ',
            r.a({href: 'http://uber.com'}, 'Uber')
          ])
        ]),

        r.main({className: 'content padding-large'}, [
          r.div({className: 'content__intro center-block padding--ends'}, [
            r.p([
              'Ryan (a.k.a Yongseok, and 노용석) is a seasoned software engineer ',
              'with diverse technical skills and work experiences at startups, ',
              'research company, and corporations.'
            ]),

            r.p([
              'Ryan\'s primary goal is to invent the future of lifestyles through ',
              'extensive tech skills. His main interests are software engineering, ',
              'user interface/experience, and sharing economy.'
            ]),

            r.p([
              'He\'s currently building his technical career on front-end development, ',
              'focusing on web development, especially single page apps & hybrid mobile apps ',
              'with skills of, but not limited to, ',
              r.a({href: 'http://nodejs.org/'}, 'Node.js'), ' and ',
              r.a({href: 'http://facebook.github.io/react/'}, 'React.js'), '.'
            ]),

            r.p('He received his bachelor\'s degree from the University of Illinois at Urbana-Champaign ' +
                'and master\'s degree from the University of California, Berkeley.')
          ])
        ]),

        r.footer({className: 'footer padding-large'}, [
          r.ul({className: 'text-center list-unstyled list-inline'},
            links.map(function renderLink(item, index) {
              return (
                r.li({key: index}, [
                  r.a({className: 'margin--sides', href: item.link}, [
                    r.i({className: item.class})
                  ])
                ])
              );
            })
          )
        ])
      ])
    );
  }
});
