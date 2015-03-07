var React         = require('react')
  , DocumentTitle = require('react-document-title')

  , description = require('../metadata/description.txt')
  , keywords    = require('../metadata/keywords.txt')
  , title       = require('../metadata/500.txt')

  , {PropTypes} = React


  , InternalServerError =

React.createClass({
  propTypes : {
    err : PropTypes.string.isRequired
  }

, render : function () {
    var {err} = this.props;

    return (
      <DocumentTitle title={title}>
        <section>
          <h1>{title}</h1>
          <pre>{err.stack}</pre>
        </section>
      </DocumentTitle>
    );
  }
});

module.exports = InternalServerError;
