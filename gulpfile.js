'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var SASS_PATH = './client/stylesheets/**/*.scss';
var JS_PATH = './client/javascripts/**/*.js';

gulp.task('default', ['build-sass', 'build-js']);

gulp.task('build-sass', function buildSass() {
  gulp.src(SASS_PATH)
      .pipe(watch(SASS_PATH))
      .pipe(sass())
      .pipe(gulp.dest('./public'));
});

gulp.task('build-js', function buildJs() {
  gulp.src(JS_PATH)
      .pipe(watch(JS_PATH))
      .pipe(uglify())
      .pipe(gulp.dest('./public'));
});

// TODO: Set up Browserify

// TODO: 6-to-5 JS
