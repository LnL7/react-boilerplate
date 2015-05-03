var gulp    = require('gulp')
  , nodemon = require('gulp-nodemon')

  , browserSync = require('browser-sync')
  , del         = require('del')
  , path        = require('path')
  , sequence    = require('run-sequence')

  , heimlich = require('heimlich')
  ;


process.env.NODE_PATH = path.join(__dirname, 'app');

gulp.task('clean', function (next) {
  var root = path.join(__dirname, 'public/assets');

  del(root, next);
});

gulp.task('watch', ['browser'],  function () {
  sequence(['clean'], ['jsx', 'styl']);
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

gulp.task('node', heimlich.tasks.node({ files: ['app/server', 'app/router'] }));

gulp.task('jsx', function () {
  var entry   = 'client.jsx'
    , scripts = 'public/assets/javascripts'
    ;

  var production = process.env.NODE_ENV === 'production';

  heimlich.browserify({
    entries  : [path.join(__dirname, entry)]
  , debug    : !production
  , watching : true
  })
    .configure(heimlich.browserify.string())
    .configure(heimlich.browserify.external({ libs: ['react', 'react/addons', 'react-router', 'react-document-title'] }))
    .configure(heimlich.browserify.react())
    .done(function (stream) {
      stream.pipe(heimlich.dest(__dirname, scripts));
    });
});

gulp.task('styl', heimlich.tasks.stylus({
  source : ['app/**/styles/*.css', 'app/**/styles/index.styl']
, dest   : 'public/assets/stylesheets'
}));

gulp.task('default', ['watch']);
