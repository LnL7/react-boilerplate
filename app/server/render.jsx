var React         = require('react')
  , Router        = require('react-router')
  , DocumentTitle = require('react-document-title')

  , Html   = require('./components/html')
  , routes = require('router/routes')
  ;

var render = function * () {
  Router.run(routes, this.url, (Handler, state) => {
    var markup = React.renderToString(<Handler/>)
      , html   = React.renderToStaticMarkup(<Html title={DocumentTitle.rewind()} markup={markup}/>);

    if (state.routes.some(r => r.isNotFound)) this.status = 404
    this.body = '<!doctype html>' + html;
  });
};

module.exports = render;
