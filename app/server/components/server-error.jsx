var React         = require('react')
  , DocumentTitle = require('react-document-title')
  ;

var ServerError = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired
  , error : React.PropTypes.any.isRequired
  }
,
  getDefaultProps : () => ({
    title : require('metadata/server-error')
  })
,
  render : function () {
    return (
      <DocumentTitle title={this.props.title}>
        <section>
          <h1>{this.props.title}</h1>
          <pre>{this.props.error.stack || this.props.error}</pre>
        </section>
      </DocumentTitle>
    );
  }
});

module.exports = ServerError;
