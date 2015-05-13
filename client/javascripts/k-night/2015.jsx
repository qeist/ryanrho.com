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
            <a href="http://www.bayareakgroup.org/events/k-night-2015"
               className="k-night-header__rsvp-button">Click Here to RSVP</a>
          </section>
        </header>
        <main>
          <section className="k-night-section k-night-section--timetable">
            <h1 className="k-night-title k-night-sponsors__title no-margin margin-large--bottom">
              <i className="k-night-title-icon fa fa-calendar" />
              Timetable
            </h1>
          </section>

          <section className="k-night-section k-night-section--speakers">
            <h1 className="k-night-title k-night-sponsors__title no-margin margin-large--bottom">
              <i className="k-night-title-icon fa fa-microphone" />
              Speakers
            </h1>
          </section>

          <section className="k-night-section k-night-section--sponsors">
            <h1 className="k-night-title k-night-sponsors__title no-margin margin-large--bottom">
              <i className="k-night-title-icon fa fa-star-o" />
              Sponsors
            </h1>
            <div className="k-night-sponsors__container margin--bottom">
              <div className="k-night-sponsors__container__item flexbox flexbox--center">
                <div className="flex--one text--center margin--bottom">
                  <img src="/knight2015/lg.png" />
                </div>
                <div className="flex--one text--center margin--bottom">
                  <img src="/knight2015/kotra.png" />
                </div>
                <div className="flex--one text--center margin--bottom">
                  <img src="/knight2015/sktelecom.png" />
                </div>
              </div>
              <div className="k-night-sponsors__container__item flexbox flexbox--center">
                <div className="flex--one text--center margin--bottom">
                  <img src="/knight2015/samsung.png" />
                </div>
                <div className="flex--one text--center margin--bottom">
                  <img src="/knight2015/asiana.png" />
                </div>
              </div>
            </div>
          </section>

          <footer className="k-night-section k-night-section--location">
            <h1 className="k-night-title k-night-location__title no-margin margin-large--bottom">
              <i className="k-night-title-icon fa fa-map-marker" />
              Location
            </h1>
          </footer>
        </main>
      </div>
    );
  }
});
