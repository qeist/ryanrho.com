'use strict';

import React from 'react';
import {GoogleMaps, Marker} from 'react-google-maps';
import Speaker from './speaker.jsx';

const coordinate = {lat: 37.383708, lng: -121.961887};

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
            <div>
              <div className="date margin-tiny--bottom">
                Thursday, May 28
              </div>
              <div className="time margin-tiny--bottom">
                6:00 <small>pm</small> - 10:30 <small>pm</small>
              </div>
            </div>
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
            <table>
              <tr>
                <td className="time">6:00pm - 6:30pm</td>
                <td className="event">Registration & Networking</td>
              </tr>
              <tr>
                <td className="time">6:30pm - 7:30pm</td>
                <td className="event">Dinner</td>
              </tr>
              <tr>
                <td className="time">7:15pm - 7:30pm</td>
                <td className="event">ESKAPE Performance</td>
              </tr>
              <tr>
                <td className="time">7:30pm - 8:15pm</td>
                <td className="event">Keynote</td>
              </tr>
              <tr>
                <td className="time">8:15pm - 8:25pm</td>
                <td className="event">Break</td>
              </tr>
              <tr>
                <td className="time">8:25pm - 9:05pm</td>
                <td className="event">Session 1</td>
              </tr>
              <tr>
                <td className="time">9:05pm - 8:15pm</td>
                <td className="event">Break</td>
              </tr>
              <tr>
                <td className="time">9:15pm - 9:55pm</td>
                <td className="event">Session 2</td>
              </tr>
              <tr>
                <td className="time">9:55pm - 10:05pm</td>
                <td className="event">Break</td>
              </tr>
              <tr>
                <td className="time">10:05pm - 10:30pm</td>
                <td className="event">Reception & Raffle</td>
              </tr>
            </table>
          </section>

          <section className="k-night-section k-night-section--speakers">
            <h1 className="k-night-title k-night-sponsors__title no-margin margin-large--bottom">
              <i className="k-night-title-icon fa fa-microphone" />
              Speakers
            </h1>

            <h2 className="k-night-subtitle">Keynote</h2>

            <div className="row">
              <Speaker
                location="Main Ballroom"
                name="John Sung Kim"
                title="CEO, Five9"
                isFull={true}>
                Starting a Company with Six Credit Cards and a Laptop
              </Speaker>
            </div>

            <h2 className="k-night-subtitle">Session 1</h2>

            <div className="row">
              <Speaker
                group="Group C/E"
                location="Main Ballroom"
                name="Jae Cho"
                title="Corporate VP, Xilinx">
                Semiconductor Industry Operation: History and Successful Model
              </Speaker>
              <Speaker
                group="Group U"
                location="Room #01"
                name="Reagan Kim"
                title="Visual Designer, Google">
                How to Design for the World
              </Speaker>
              <Speaker
                group="Group V"
                location="Room #02"
                name="Erick Oh"
                title="Animator & Indie Director, Pixar">
                Seeing World through Moving Images
              </Speaker>
              <Speaker
                group="Group G"
                location="Room #03"
                name="Noori Kim"
                title="Program Manager, Google">
                Apple<sup>Google</sup> & Google<sup>[x]</sup>
              </Speaker>
            </div>

            <h2 className="k-night-subtitle">Session 2</h2>
            <div className="row">
              <Speaker
                group="Group A"
                location="Main Ballroom"
                name="Troy Malone"
                title="General Manager of APAC, Evernote">
                Going Global by Going Local - Evernote's Story
              </Speaker>
              <Speaker
                group="Group B"
                location="Room #01"
                name="Young Joon Cha"
                title="CEO, OnDemandKorea">
                Exploring the Future of Online Video Platform
              </Speaker>
              <Speaker
                group="Group F"
                location="Room #02"
                name="Hidenori Shikata"
                title="Software Architect, GE Healthcare">
                Advanced Feature Extraction in Medical Image
              </Speaker>
              <Speaker
                group="Special"
                location="Room #03"
                title="Working in USA">
                Mentoring Session for International Students from Korea
              </Speaker>
            </div>
          </section>

          <section className="k-night-section k-night-section--sponsors">
            <h1 className="k-night-title k-night-sponsors__title no-margin margin-large--bottom">
              <i className="k-night-title-icon fa fa-star-o" />
              Sponsors
            </h1>
            <div className="k-night-sponsors__container margin--bottom">
              <div className="k-night-sponsors__container__item flexbox flexbox--center">
                <div className="flex--one text--center margin-large--bottom">
                  <img src="/knight2015/samsung.png" />
                </div>
                <div className="flex--one text--center margin-large--bottom">
                  <img src="/knight2015/lg.png" />
                </div>
                <div className="flex--one text--center margin-large--bottom">
                  <img src="/knight2015/sktelecom.png" />
                </div>
              </div>
              <div className="k-night-sponsors__container__item flexbox flexbox--center">
                <div className="flex--one text--center margin-large--bottom">
                  <img src="/knight2015/simmtech.png" />
                </div>
                <div className="flex--one text--center margin-large--bottom">
                  <img src="/knight2015/asiana.png" />
                </div>
              </div>
              <div className="k-night-sponsors__container__item flexbox flexbox--center">
                <div className="flex--one text--center margin-large--bottom">
                  <img src="/knight2015/kotra.png" />
                </div>
                <div className="flex--one text--center margin-large--bottom">
                  <img src="/knight2015/ministry-of-foreign-affairs.png" />
                </div>
              </div>
            </div>
          </section>

          <footer className="k-night-section k-night-section--location">
            <h1 className="k-night-title k-night-section--location__title no-margin margin-large--bottom">
              <i className="k-night-title-icon fa fa-map-marker" />
              Location
            </h1>

            <div className="flexbox k-night-section--location__item">
              <div className="flex--one margin--ends">
                <h2 className="k-night-location-title no-margin margin--bottom">Biltmore Hotel and Suites</h2>
                <div className="address-phone">
                  <address>
                    <a href="http://maps.apple.com/?q=2151+Laurelwood+Rd,+Santa Clara,+CA+950549">
                      2151 Laurelwood Rd,<br />
                      Santa Clara, CA 950549
                    </a>
                  </address>
                  <div>(800) 255-9925</div>
                </div>
              </div>
              <div className="flex--one padding--sides">
                <GoogleMaps containerProps={{style: {width: '100%', height: 250}}}
                            googleMapsApi={"undefined" !== typeof google ? google.maps : null}
                            zoom={15}
                            center={coordinate}
                            disableDefaultUI={true}>
                  <Marker position={coordinate} />
                </GoogleMaps>
              </div>
            </div>
          </footer>
        </main>
      </div>
    );
  }
});
