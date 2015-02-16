'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['build-sass']);

gulp.task('build-sass', function buildSass() {
  gulp.src('./client/stylesheets/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public/style.css'));
});

// TODO: Minify & Uglify JS

// TODO: 6-to-5 JS
