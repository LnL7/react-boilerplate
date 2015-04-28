var React = require('react')
  ;

var Html = React.createClass({
  propTypes: {
    title  : React.PropTypes.string.isRequired
  , markup : React.PropTypes.string.isRequired
  }

, render: function () {
    var production = process.env.NODE_ENV === 'production';

    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content=""/>
          <meta name="keywords" content=""/>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/assets/stylesheets/main.css"/>
          <script type="text/javascript" src="/assets/javascripts/main.js"></script>
        </head>
        <body dangerouslySetInnerHTML={{ __html: production ? this.props.markup : '' }}></body>
      </html>
    );
  }
});

module.exports = Html;
