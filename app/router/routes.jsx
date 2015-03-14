var React  = require('react')
  , Router = require('react-router')

  , App      = require('./components/app')
  , Default  = require('./components/default')
  , NotFound = require('./components/not-found')

  , {Route, DefaultRoute, NotFoundRoute} = Router

  , routes =

[
  <Route name="root" path="/" handler={App}>
    <DefaultRoute name="default" handler={Default}/>
  </Route>
, <NotFoundRoute name="not-found" handler={NotFound}/>
];

module.exports = routes;
