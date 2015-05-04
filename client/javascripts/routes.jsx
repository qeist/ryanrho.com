'use strict';

import React from 'react';
import ReactRouter from 'react-router';

import Home from './app/components/home.jsx';
import KNight2015 from './k-night/2015.jsx';

let {DefaultRoute, Route} = ReactRouter;

function getRoutes() {
  return (
    <Route name="app" path="/">
      <Route name="home" path="/" handler={Home} />
      <Route name="k-night2015" path="k-night" handler={KNight2015} />
    </Route>
  );
}

export default (location, onRouterRun) => {
  let router = ReactRouter.create({
    routes: getRoutes(),
    location
  });

  router.run(onRouterRun);
};
