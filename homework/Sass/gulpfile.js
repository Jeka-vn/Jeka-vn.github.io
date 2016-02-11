var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    notify = require("gulp-notify"),
    sass = require('gulp-sass');

gulp.task('sass', function () {
 return gulp.src('sass/*.scss')
   .pipe(sass({outputStyle: 'compressed'}))
   .pipe(gulp.dest('project/css/'));
});


gulp.task('watch:sass', function() {
	gulp.watch('sass/*.scss', ['sass'])
});
