var gulp = require('gulp');
var BuildTask = require('carbon-factory/lib/gulp/build').default;
var SpecTask = require('carbon-factory/lib/gulp/spec').default;
var express = require('express');
var gutil = require('gulp-util');

options = {
  src: './src/main.ts',
  jsDest: './assets/javascripts',
  cssDest: './assets/stylesheets',
  fontDest: './assets/fonts',
  imageDest: './assets/images',
  typescript: true
};

gulp.task('webserver', function() {
  var app = express();
  // serve files from here
  app.use(express.static('./'));
  // always serve index.html
  app.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });
  // set port
  var port = 8095;
  gutil.log(gutil.colors.cyan('App running on port ') + gutil.colors.green(port));
  // run server
  app.listen(port);
});

gulp.task('build', BuildTask(options));
gulp.task('default', ['webserver', 'build']);
gulp.task('test', SpecTask());
