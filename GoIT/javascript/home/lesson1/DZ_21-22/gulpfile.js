const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('js', () => {
	return gulp.src('js/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist/'));
});


gulp.task('watch', function () {
  gulp.watch('js/*.js', ['js']);
});
