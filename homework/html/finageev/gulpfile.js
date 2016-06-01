'use strict'; 

// variables 
var gulp = require('gulp'), 
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css'); 

// task 
gulp.task('scss', function() { 
return gulp.src('./app/**/**/*.scss') 
.pipe(sass().on('error', sass.logError)) 
// .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
.pipe(gulp.dest('./css')); 
}); 


gulp.task('minify-css', function() {
  return gulp.src('css/scss/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/'));
});

// watch 

gulp.task('default', function() { 
gulp.watch('./app/**/**/*.scss', ['scss']); 
gulp.watch('css/scss/style.css', ['minify-css']); 
});