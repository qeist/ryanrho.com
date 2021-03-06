'use strict';

var babelify = require('babelify');
var browserify = require('gulp-browserify');
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

gulp.task('default', ['watch']);
gulp.task('build', ['build-sass', 'build-client-js', 'copy-fonts', 'copy-static']);

gulp.task('build-sass', function buildSass() {
  gulp.src('client/stylesheets/main.scss')
      .pipe(sass())
      .pipe(minifyCss())
      .pipe(rename('style.css'))
      .pipe(gulp.dest('./public'));
});

gulp.task('build-client-js', function buildClientJs() {
  gulp.src('client/javascripts/main.jsx')
      .pipe(browserify({transform: babelify}))
      .pipe(rename('script.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public'));
});

gulp.task('copy-fonts', function copyFonts() {
  gulp.src('node_modules/font-awesome/fonts/*.*')
      .pipe(gulp.dest('./public/fonts'));
});

gulp.task('copy-static', function copyStatic() {
  gulp.src('client/static/**/*.*')
      .pipe(gulp.dest('./public'));
});

gulp.task('watch', ['build'], function watchFiles() {

  gulp.watch('client/stylesheets/**/*.scss', ['build-sass']);
  gulp.watch('client/javascripts/**/*.js', ['build-client-js']);
  gulp.watch('client/javascripts/**/*.jsx', ['build-client-js']);

  nodemon({
    script: 'index.js',
    ext: 'js scss',
    ignore: ['./public/**'],
    execMap: {js: 'babel-node'}
  }).on('restart', function onRestart() {
    util.log('server restarted.');
  });
});
