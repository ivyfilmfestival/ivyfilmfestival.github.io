var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');


gulp.task('default', function() {
	return gulp.src('pages/*.nunjucks') 
	.pipe(nunjucksRender({
	path: ['pages/', 'templates/'] // String or Array
	}))
	.pipe(gulp.dest('.'));
});