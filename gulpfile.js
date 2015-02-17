'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('default', ['build-sass', 'build-client-js']);

gulp.task('build-sass', function buildSass() {
  gulp.src('client/stylesheets/main.scss')
      .pipe(watch('client/stylesheets/**/*.scss'))
      .pipe(sass())
      .pipe(rename('style.css'))
      .pipe(gulp.dest('./public'));
});

gulp.task('build-client-js', function buildJs() {
  gulp.src('client/javascripts/main.js')
      .pipe(browserify())
      .pipe(rename('script.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public'));
});

// TODO: 6-to-5 JS
