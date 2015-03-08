var React  = require('react')
  , Router = require('react-router')

  , routes = require('../../app/router/routes.jsx')
  ;


document.addEventListener('DOMContentLoaded', e => {
  console.log('React loaded...');

  Router.run(routes, Router.HistoryLocation, (Handler, state) => {
    React.render(<Handler/>, document.body);
  });
});
