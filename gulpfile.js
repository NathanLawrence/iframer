var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat');

var jsSources = ['components/js/iframer-vars.js', 'components/js/tabletop.js', 'components/js/iframer-main.js'];

gulp.task('compile-dev', function(){
	gulp.src(jsSources)
		.pipe(gulp.dest('builds/development/js'))
});