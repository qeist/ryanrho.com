'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
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
      .pipe(babel())
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
    ext: 'js',
    ignore: ['./public/**'],
    execMap: {
      js: 'babel-node'
    }
  }).on('restart', function onServerRestart() {
      util.log('server restarted');
    });
});
