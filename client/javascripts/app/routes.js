'use strict';

import ReactRouter from 'react-router';
import Home from './components/home';
import React from 'react';

let {DefaultRoute, Route} = ReactRouter;

function getRoutes() {
  return (
    <Route name="app" path="/">
      <DefaultRoute name="home" handler={Home} />
      <Route name="k-night">
        <Route name="2015" path="2015" />
      </Route>
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
