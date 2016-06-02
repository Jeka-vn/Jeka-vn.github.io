'use strict';
// variables
var gulp = require('gulp');
var sass = require('gulp-sass');

// task
gulp.task('default', function() {
	return gulp.src('./app/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});

//  watch
gulp.watch('./app/**/*.scss', ['default']);
