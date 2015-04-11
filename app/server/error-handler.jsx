var React         = require('react')
  , DocumentTitle = require('react-document-title')

  , Html        = require('./components/html')
  , ServerError = require('./components/server-error')
  ;

var errorHandler = function * (next) {
  try {
    yield next;
  } catch (error) {
    var markup = React.renderToString(<ServerError error={error}/>)
      , html   = React.renderToStaticMarkup(<Html title={DocumentTitle.rewind()} markup={markup}/>);

    this.status = 500;
    this.body   = '<!doctype html>' + html;
  }
};

module.exports = errorHandler;
