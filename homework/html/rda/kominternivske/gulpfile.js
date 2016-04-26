"use strict";

var gulp = require('gulp'),
sass = require('gulp-sass'),
notify = require("gulp-notify"),
autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
	return gulp.src('./app/scss/style.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./css'))
	.pipe(notify('Done!'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./app/scss/style.scss', ['sass']);
});
