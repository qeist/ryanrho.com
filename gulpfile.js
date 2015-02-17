'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var util = require('gulp-util');

gulp.task('default', ['watch']);

// TODO: gulp-minify-css

gulp.task('build-sass', function buildSass() {
  gulp.src('client/stylesheets/main.scss')
      .pipe(sass())
      .pipe(rename('style.css'))
      .pipe(gulp.dest('./public'));
});

gulp.task('build-client-js', function buildClientJs() {
  gulp.src('client/javascripts/main.js')
      .pipe(browserify())
      .pipe(rename('script.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public'));
});

gulp.task('watch', function watchFiles() {
  gulp.watch('client/stylesheets/**/*.scss', ['build-sass']);
  gulp.watch('client/javascripts/**/*.js', ['build-client-js']);
  gulp.watch('index.js');

  nodemon({
    script: 'index.js',
    ext: 'html js',
    ignore: ['./public/**']
  }).on('restart', function onServerRestart() {
      util.log('server restarted');
    });
});

// TODO: 6-to-5 JS
