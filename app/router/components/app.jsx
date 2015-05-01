var React         = require('react')
  , Router        = require('react-router')
  , DocumentTitle = require('react-document-title')

  , { RouteHandler, Link } = Router
  ;

var App = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired
  }
,
  getDefaultProps : () => ({
    title : require('metadata/title')
  })
,
  render : function () {
    return (
      <DocumentTitle title={this.props.title}>
        <div className="app">
          <RouteHandler {...this.props}/>
        </div>
      </DocumentTitle>
    );
  }
});

module.exports = App;
