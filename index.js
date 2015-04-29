require('babel/register')({ experimental: true });
require('heimlich/string/register');

var koa    = require('koa')
  , logger = require('koa-logger')
  , serve  = require('koa-static')
  , path   = require('path')

  , errorHandler = require('server/error-handler')
  , render       = require('server/render')

  , app = koa()
  ;


app
  .use(logger())
  .use(serve('public'))
  .use(errorHandler)
  .use(render);


var port = process.env.PORT || 3000;

app.listen(port);
console.log('listening on ' + port);
