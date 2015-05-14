'use strict';

import React from 'react';
import classSet from 'classnames';

export default React.createClass({

  displayName: 'Speaker',

  propTypes: {
    name: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    group: React.PropTypes.string,
    isFull: React.PropTypes.bool
  },

  render() {
    let {group, name, title, location, isFull} = this.props;

    return (
      <div className={classSet({
        'k-night-speaker': true,
        'col-xs-12 col-sm-6 col-md-6': !isFull,
        'col-xs-12 col-sm-12 col-md-12': isFull
      })}>
        <h2 className="name">{name || ''}</h2>
        <h3 className="color--blue job-title no-margin">{title}</h3>

        <h3 className="topic margin-tiny--bottom">{this.props.children}</h3>

        {group && <h5 className="group">{group} · {location}</h5>}
      </div>
    );
  }
});
