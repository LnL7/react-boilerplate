var gulp    = require('gulp')
  , nodemon = require('gulp-nodemon')

  , browserify = require('browserify')
  , reactify   = require('reactify')
  , stringify  = require('stringify')
  , watchify   = require('watchify')

  , browserSync = require('browser-sync')
  , buffer      = require('vinyl-buffer')
  , source      = require('vinyl-source-stream')

  , del  = require('del')
  , path = require('path')

  , heimlich = require('heimlich')
  ;


gulp.task('clean', function (next) {
  var root = path.join(__dirname, 'public/assets');

  del(root, next);
});

gulp.task('watch', ['clean', 'browser', 'jsx'], function () {
});

gulp.task('browser', ['node'], function () {
  var root = path.join(__dirname, 'public/**/*');

  browserSync({
    files : root
  , port  : 7000
  , proxy : '127.0.0.1:3000'
  , open  : false
  });
});

gulp.task('node', function () {
  var entry = 'index.js'
    , app   = path.join(__dirname, 'app/server/**/*')
    ;

  nodemon({
    script   : entry
  , nodeArgs : ['--harmony']
  , watch    : [entry, app]
  });
});

gulp.task("jsx", function () {
  var entry   = './client.js'
    , scripts = 'public/assets/javascripts'
    ;

  heimlich.reactify([entry], { watching: true })
    .done(function (bundler) {
      bundler.pipe(heimlich.dest(__dirname, scripts));
    });
});

gulp.task('default', ['watch']);
