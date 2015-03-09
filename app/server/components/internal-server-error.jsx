var React         = require('react')
  , DocumentTitle = require('react-document-title')

  , {PropTypes}                     = React
  , {description, keywords, status} = require('../metadata.json')


  , InternalServerError =

React.createClass({
  propTypes :
    { err: PropTypes.string.isRequired }

, render : function () {
    var {err} = this.props;

    return (
      <DocumentTitle title={status['500']}>
        <section>
          <h1>{status['500']}</h1>
          <pre>{err.stack}</pre>
        </section>
      </DocumentTitle>
    );
  }
});

module.exports = InternalServerError;
