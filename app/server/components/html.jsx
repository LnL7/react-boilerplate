var React = require('react')

  , description = require('../metadata/description.txt')
  , keywords    = require('../metadata/keywords.txt')

  , {PropTypes} = React


  , Html =

React.createClass({
  propTypes : {
    title   : PropTypes.string.isRequired
  , markup  : PropTypes.string.isRequired
  , scripts : PropTypes.arrayOf(PropTypes.string).isRequired
  , styles  : PropTypes.arrayOf(PropTypes.string).isRequired
  }

, getDefaultProps : () => ({
    scripts : []
  , styles  : []
  })

, render : function () {
    var scripts         = this.props.scripts.map(src => <script type="text/javascript" src={src}></script>)
      , styles          = this.props.styles.map(href => <link rel="stylesheet" href={href}/>)
      , {title, markup} = this.props;

    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="description" content={description}/>
          <meta name="keywords" content={keywords}/>
          <title>{title}</title>
          {styles}
          {scripts}
        </head>
        <body dangerouslySetInnerHTML={{__html: markup}}></body>
      </html>
    );
  }
});

module.exports = Html;
