var React         = require('react')
  , Router        = require('react-router')
  , DocumentTitle = require('react-document-title')
  ;

var NotFound = React.createClass({
  propTypes: {
  }
, render: function () {
    var title = "404 Not Found";

    return (
      <DocumentTitle title={title}>
        <pre>{title}</pre>
      </DocumentTitle>
    );
  }
});

module.exports = NotFound;
