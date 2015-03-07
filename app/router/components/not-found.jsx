var React         = require('react')
  , Router        = require('react-router')
  , DocumentTitle = require('react-document-title')

  , title = require('../metadata/404.txt')


  , NotFound =

React.createClass({
  render : function () {
    return (
      <DocumentTitle title={title}>
        <pre>{title}</pre>
      </DocumentTitle>
    );
  }
});

module.exports = NotFound;
