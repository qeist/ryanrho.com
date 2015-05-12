'use strict';

import React from 'react';

export default React.createClass({

  displayName: 'KNight2015',

  render() {
    return (
      <div>
        <header className="k-night-header color--white">
          <section className="k-night-header__container margin-large--bottom">
            <div className="k-night-header__subtitle-container flexbox">
              <div className="k-night-header__subtitle-container__line flex--one" />
              <span className="k-night-header__subtitle color--blue padding-tiny--left">The Next Rise</span>
              <div className="k-night-header__subtitle-container__line flex--one" />
            </div>
            <h1 className="k-night-header__title margin-large--ends">
              <span className="color--blue">K</span>Night
            </h1>
          </section>
          <section className="k-night-header__location margin-large--bottom">
            <div>Thursday, May 28 | 6:00 <small>pm</small> - 10:30 <small>pm</small></div>
            <div>Biltmore Hotel and Suites</div>
          </section>
          <section className="padding-huge--bottom">
            <button className="k-night-header__rsvp-button">Click Here to RSVP</button>
          </section>
        </header>
        <main>
          <section className="k-night-timetable">
            <h1 className="k-night-title k-night-timetable__title no-margin">Timetable</h1>
          </section>
          <section className="k-night-speakers">
            <h1 className="k-night-title k-night-speakers__title no-margin">Speakers</h1>
          </section>
          <section className="k-night-sponsors">
            <h1 className="k-night-title k-night-sponsors__title no-margin">Sponsors</h1>
          </section>
          <footer className="k-night-location">
            <h1 className="k-night-title k-night-location__title no-margin">Location</h1>
          </footer>
        </main>
      </div>
    );
  }
});
