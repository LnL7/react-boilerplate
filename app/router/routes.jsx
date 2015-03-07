var React  = require('react')
  , Router = require('react-router')

  , App      = require('./components/app.jsx')
  , Default  = require('./components/default.jsx')
  , NotFound = require('./components/not-found.jsx')

  , {Route, DefaultRoute, NotFoundRoute} = Router


  , routes =

[
  <Route name="root" path="/" handler={App}>
    <DefaultRoute name="default" handler={Default}/>
  </Route>
, <NotFoundRoute name="not-found" handler={NotFound}/>
];

module.exports = routes;
