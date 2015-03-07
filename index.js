require('node-jsx').install({extension: '.jsx', harmony: true});
require('node-txt').install();

var express    = require('express')
  , log        = require('morgan')
  , path       = require('path')

  , errorHandler = require(path.join(__dirname, 'app/server/error-handler.jsx'))
  , render       = require(path.join(__dirname, 'app/server/render.jsx'))
  , routes       = require(path.join(__dirname, 'app/router/routes.jsx'))
  , app          = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(log('dev'));

app.use(render(routes));
app.use(errorHandler);

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server listening on port ' + this.address().port);
});
