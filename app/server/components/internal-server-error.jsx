var React         = require('react')
  , DocumentTitle = require('react-document-title')
  ;

var InternalServerError = React.createClass({
  propTypes: {
    error : React.PropTypes.any.isRequired
  }

, render: function () {
    return (
      <DocumentTitle title="Internal Server Error">
        <section>
          <h1>500 Internal Server Error</h1>
          <pre>{this.props.error.stack || this.props.error}</pre>
        </section>
      </DocumentTitle>
    );
  }
});

module.exports = InternalServerError;
