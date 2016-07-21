'use strict';
// variables
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		concatCss = require('gulp-concat-css'),
		sassGlob = require('gulp-sass-glob');

// task
gulp.task('styles', function () {
    return gulp
        .src('./app/**/*.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('app/sass/_settings/'));
});


	gulp.task('Sass', function() {
			return gulp.src('./app/**/*.scss')
			.pipe(sass().on('error', sass.logError))
 //   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		  .pipe(gulp.dest('./css'));
	});


	gulp.task('Motion', function () {
		gulp.src('css/sass/style.css')
		.pipe(gulp.dest('css/'))
	});

				//  watch
				
	gulp.task('default', function() {
		gulp.watch('./app/**/*.scss', ['styles']);
		gulp.watch('./app/**/*.scss', ['Sass']);
		gulp.watch('css/sass/style.css', ['Motion']);
	});
