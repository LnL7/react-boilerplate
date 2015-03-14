var React         = require('react')
  , Router        = require('react-router')
  , DocumentTitle = require('react-document-title')

  , {status} = require('../metadata.json')

  , NotFound =

React.createClass({
  render : function () {
    var title = status['404'];

    return (
      <DocumentTitle title={title}>
        <pre>{title}</pre>
      </DocumentTitle>
    );
  }
});

module.exports = NotFound;
