var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    notify = require("gulp-notify");

gulp.task('css', function() {
	return gulp.src('css/*.css')
	.pipe(concatCss("style.min.css"))
	.pipe(minifyCSS())
	.pipe(gulp.dest('app/css/'))
	.pipe(notify("Css Ok!"));
});

gulp.task('js', function() {
	return gulp.src('js/*.js')
	.pipe(concat('script.min.js'))
	.pipe(gulp.dest('app/js/'))
	.pipe(notify("JavaScript Ok!"));

});

gulp.task('watch', function() {
	gulp.watch('css/*.css', ['css'])
})