'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    notify = require("gulp-notify");
 
gulp.task('sass', function () {
  return gulp.src('css/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(notify("ok"))
    .pipe(gulp.dest('css/'));
});
 
gulp.task('concat', function () {
  return gulp.src('css/*css')
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest('css/'));
});


gulp.task('concat:watch', function () {
  gulp.watch('css/*css', ['concat']);
});


gulp.task('watch', function () {
  gulp.watch('css/sass/style.scss', ['sass']);
});