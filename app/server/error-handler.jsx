var React         = require('react')
  , DocumentTitle = require('react-document-title')

  , Html                = require('./components/html.jsx')
  , InternalServerError = require('./components/internal-server-error.jsx')

  , errorHandler =

(err, req, res, next) => {
    var markup = React.renderToStaticMarkup(<InternalServerError err={err}/>)
      , html   = React.renderToStaticMarkup(<Html title={DocumentTitle.rewind()} markup={markup}/>);
  res.status(500);

  res.send('<!doctype html>' + html);
};

module.exports = errorHandler;
