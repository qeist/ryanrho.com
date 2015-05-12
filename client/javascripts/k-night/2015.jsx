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
            <div>Thursday, May 28 | 6:00 pm - 10:30 pm</div>
            <div>Biltmore Hotel and Suites</div>
          </section>
          <section className="padding-huge--bottom">
            <button className="k-night-header__rsvp-button">Click Here to RSVP</button>
          </section>
        </header>
        <main>
          <section>
            <h1>Timetable</h1>
          </section>
          <section>
            <h1>Speakers</h1>
          </section>
          <section>
            <h1>Sponsors</h1>
          </section>
          <footer>

          </footer>
        </main>
      </div>
    );
  }
});
