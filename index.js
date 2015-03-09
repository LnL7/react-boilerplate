require('babel/register');

var koa    = require('koa')
  , logger = require('koa-logger')
  , serve  = require('koa-static')

  , path  = require('path')

  , errorHandler = require('app/server/error-handler')
  , render       = require('app/server/render')
  , routes       = require('app/router/routes')

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
