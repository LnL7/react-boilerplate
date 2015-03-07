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
  , path = require('path');


gulp.task('clean', function (next) {
  var root = path.join(__dirname, 'public/assets');

  del(root, next);
});

gulp.task('watch', ['clean', 'browser', 'jsx'], function () {
  var jsx      = path.join(__dirname, 'app/**/*.jsx')
    , metadata = path.join(__dirname, 'app/**/metadata/*.txt');

  gulp.watch([jsx, metadata], ['jsx']);
});

gulp.task('browser', ['node'], function () {
  var root = path.join(__dirname, 'public/**/*');

  browserSync({
    files : root
  , port  : 7000
  , proxy : '127.0.0.1:3000'
  });
});

gulp.task('node', function () {
  var entry = 'index.js'
    , app   = path.join(__dirname, 'app/server/**/*');

  nodemon({
    script : entry
  , watch  : [entry, app]
  });
});

gulp.task("jsx", function () {
  var entry   = './app/client/entry.jsx'
    , bundle  = 'application.js'
    , scripts = path.join(__dirname, 'public/assets/javascripts')

    , stringifyText = stringify(['.txt'])
    , reactifyES6   = function (f) {
        return reactify(f, {es6: true});
      };

  watchify(browserify({
    cache        : {}
  , packageCache : {}
  , debug        : true
  , entries      : [entry]
  }))
    .transform(stringifyText)
    .transform(reactifyES6)
    .bundle()
    .pipe(source(bundle))
    .pipe(gulp.dest(scripts));
});

gulp.task('default', ['watch']);
