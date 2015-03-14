var React = require('react')

  , {PropTypes}                     = React
  , {assets, description, keywords} = require('../metadata.json')

  , Html =

React.createClass({
  propTypes : {
    title  : PropTypes.string.isRequired
  , markup : PropTypes.string.isRequired
  }

, render : function () {
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content={description}/>
          <meta name="keywords" content={keywords}/>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href={assets.css}/>
          <script type="text/javascript" src={assets.js}></script>
        </head>
        <body dangerouslySetInnerHTML={{ __html: this.props.markup }}></body>
      </html>
    );
  }
});

module.exports = Html;
