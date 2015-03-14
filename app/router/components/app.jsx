var React         = require('react')
  , Router        = require('react-router')
  , DocumentTitle = require('react-document-title')

  , {title} = require('../metadata.json')

  , {RouteHandler, Link} = Router

  , App =

React.createClass({
  render : function () {
    return (
      <DocumentTitle title={title}>
        <div className="app">
          <RouteHandler/>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;
