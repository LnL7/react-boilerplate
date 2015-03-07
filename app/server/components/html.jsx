var React = require('react')

  , description = require('../metadata/description.txt')
  , keywords    = require('../metadata/keywords.txt')
  , stylesheet  = require('../metadata/stylesheet-url.txt')
  , javascript  = require('../metadata/javascript-url.txt')

  , {PropTypes} = React


  , Html =

React.createClass({
  propTypes : {
    title   : PropTypes.string.isRequired
  , markup  : PropTypes.string.isRequired
  }

, render : function () {
    var {title, markup} = this.props;

    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content={description}/>
          <meta name="keywords" content={keywords}/>
          <title>{title}</title>
          <link rel="stylesheet" href={stylesheet}/>
          <script type="text/javascript" src={javascript}></script>
        </head>
        <body dangerouslySetInnerHTML={{__html: markup}}></body>
      </html>
    );
  }
});

module.exports = Html;
