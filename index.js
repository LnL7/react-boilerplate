require('node-jsx').install({ extension: '.jsx', harmony: true });
require('node-txt').install();

var koa    = require('koa')
  , logger = require('koa-logger')
  , serve  = require('koa-static')

  , path  = require('path')

  , errorHandler = require(path.join(__dirname, 'app/server/error-handler.jsx'))
  , render       = require(path.join(__dirname, 'app/server/render.jsx'))
  , routes       = require(path.join(__dirname, 'app/router/routes.jsx'))

  , app  = koa()
  ;


app
  .use(logger())
  .use(serve('public'))
  .use(errorHandler)
  .use(render(routes));


var port = process.env.PORT || 3000;

app.listen(port);
console.log('listening on ' + port);
