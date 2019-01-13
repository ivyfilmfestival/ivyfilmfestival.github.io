var gulp = require('gulp');
var data = require('gulp-data');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', function() {
	return gulp.src('./src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
	.pipe(gulp.src('src/pages/*.nunjucks'))
	.pipe(data(function() {
      return require('./src/data/data.json');
    }))
	.pipe(nunjucksRender({
	path: ['src/pages/', 'src/templates/'] // String or Array
	}))
	.pipe(gulp.dest('.'));
});

gulp.task('sass', function () {
	return gulp.src('./src/scss/*.scss')
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/scss/*.scss', ['sass']);
});