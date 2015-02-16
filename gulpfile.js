'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('default', ['build-sass', 'build-js']);

gulp.task('build-sass', function buildSass() {
  gulp.src('./client/stylesheets/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public'));
});

gulp.task('build-js', function buildJs() {
  gulp.src('./client/javascripts/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./public'));
});

// TODO: 6-to-5 JS
