var React         = require('react')
  , Router        = require('react-router')
  , DocumentTitle = require('react-document-title')

  , {status} = require('../metadata.json')


  , NotFound =

React.createClass({
  render : function () {
    return (
      <DocumentTitle title={status['404']}>
        <pre>{status['404']}</pre>
      </DocumentTitle>
    );
  }
});

module.exports = NotFound;
