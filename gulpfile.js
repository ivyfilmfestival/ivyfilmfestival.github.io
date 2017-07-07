var gulp = require('gulp');
var data = require('gulp-data');
var nunjucksRender = require('gulp-nunjucks-render');


gulp.task('default', function() {
	return gulp.src('src/pages/*.nunjucks')
	.pipe(data(function() {
      return require('./src/data/data.json');
    }))
	.pipe(nunjucksRender({
	path: ['src/pages/', 'src/templates/'] // String or Array
	}))
	.pipe(gulp.dest('.'));
});
