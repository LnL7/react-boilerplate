var React         = require('react')
  , DocumentTitle = require('react-document-title')

  , Html                = require('./components/html')
  , InternalServerError = require('./components/internal-server-error')

  , errorHandler =

function * (next) {
  try {
    yield next;
  } catch (err) {
    var markup = React.renderToStaticMarkup(<InternalServerError err={err}/>)
      , html   = React.renderToStaticMarkup(<Html title={DocumentTitle.rewind()} markup={markup}/>);

    this.status = 500;
    this.body   = '<!doctype html>' + html;
  }
};

module.exports = errorHandler;
