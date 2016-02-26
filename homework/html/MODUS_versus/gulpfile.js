'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require("gulp-notify");
 
gulp.task('sass', function () {
  return gulp.src('./app/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(notify("Done!"));
});


gulp.task('watch', function () {
  gulp.watch('./app/scss/style.scss', ['sass']);
});