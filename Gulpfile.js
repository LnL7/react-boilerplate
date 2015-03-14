var gulp    = require('gulp')
  , nodemon = require('gulp-nodemon')

  , browserify = require('browserify')
  , reactify   = require('reactify')
  , stringify  = require('stringify')
  , watchify   = require('watchify')

  , buffer = require('vinyl-buffer')
  , source = require('vinyl-source-stream')

  , browserSync = require('browser-sync')
  , del         = require('del')
  , path        = require('path')
  , sequence    = require('run-sequence')

  , heimlich = require('heimlich')
  ;


gulp.task('clean', function (next) {
  var root = path.join(__dirname, 'public/assets');

  del(root, next);
});

gulp.task('watch', ['browser'],  function () {
  sequence(
    ['clean'],
    ['jsx', 'styl']
  );
  gulp.watch('app/**/styles/**/*.{styl,js}', ['styl']);
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

gulp.task('jsx', function () {
  var entry   = './client.js'
    , scripts = 'public/assets/javascripts'
    ;

  heimlich.reactify([entry], { watching: true, debug: true })
    .done(function (stream) {
      stream.pipe(heimlich.dest(__dirname, scripts));
    });
});

gulp.task('styl', heimlich.tasks.stylus({
    source : ['app/**/styles/*.styl', 'app/**/styles/*.css']
  , dest   : 'public/assets/stylesheets'
  }));

gulp.task('default', ['watch']);
