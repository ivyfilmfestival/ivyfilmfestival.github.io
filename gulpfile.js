var gulp = require('gulp');
var data = require('gulp-data');
var nunjucksRender = require('gulp-nunjucks-render');


gulp.task('default', function() {
	return gulp.src('pages/*.nunjucks') 
	.pipe(data(function() {
      return require('./data/data.json');
    }))
	.pipe(nunjucksRender({
	path: ['pages/', 'templates/'] // String or Array
	}))
	.pipe(gulp.dest('.'));
});