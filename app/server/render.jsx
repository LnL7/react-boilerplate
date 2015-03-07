var React         = require('react')
  , Router        = require('react-router')
  , DocumentTitle = require('react-document-title')

  , Html = require('./components/html.jsx')

  , render =

(routes) =>
  (req, res, next) => {
    Router.run(routes, req.url, (Handler, state) => {
      var markup = React.renderToString(<Handler/>)
        , html   = React.renderToStaticMarkup(<Html title={DocumentTitle.rewind()} markup={markup}/>);

      if (state.routes.some(r => r.isNotFound)) {
        res.status(404);
      }
      res.send('<!doctype html>' + html);
    });
  };

module.exports = render;
