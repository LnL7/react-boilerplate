var React         = require('react')
  , Router        = require('react-router')
  , DocumentTitle = require('react-document-title')

  , title = require('../metadata/title.txt')

  , {RouteHandler, Link} = Router
  , App =

React.createClass({
  render : function () {
    return (
      <DocumentTitle title={title}>
        <section>
          <h1>{title}</h1>
          <RouteHandler/>
        </section>
      </DocumentTitle>
    );
  }
});

module.exports = App;
