var React  = require('react')
  , Router = require('react-router')

  , { Link } = Router
  ;

var Default = React.createClass({
  propTypes: {
    title : React.PropTypes.string.isRequired
  }
, render: function () {
    return (
      <div className="default">
        <h1>{this.props.title}</h1>
        <Link to="default">Router#default</Link>
      </div>
    );
  }
});

module.exports = Default;
