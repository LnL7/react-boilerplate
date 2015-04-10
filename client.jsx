var React  = require('react')
  , Router = require('react-router')

  , routes = require('router/routes')
  ;

document.addEventListener('DOMContentLoaded', e => {
  Router.run(routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler/>, document.body);
  });
});
