var React         = require('react')
  , DocumentTitle = require('react-document-title')

  , {PropTypes}                     = React
  , {description, keywords, status} = require('../metadata.json')

  , InternalServerError =

React.createClass({
  propTypes :
    { err: PropTypes.string.isRequired }

, render : function () {
    return (
      <DocumentTitle title={status['500']}>
        <section>
          <h1>{status['500']}</h1>
          <pre>{this.props.err.stack}</pre>
        </section>
      </DocumentTitle>
    );
  }
});

module.exports = InternalServerError;
