'use strict';
 
var gulp = require('gulp');
var less = require('gulp-less');
 
gulp.task('less',function(){
	return gulp.src('static/less/styles.less')
		.pipe(less())
		.pipe(gulp.dest('static/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('static/less/*', ['less']);
});


gulp.task('default',['watch']);
