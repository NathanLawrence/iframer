var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat');

var jsSources = ['components/js/tabletop.js', 'components/js/iframer-vars.js', 'components/js/iframer-main.js'];
var htmlSources = ['components/index.html'];

gulp.task('compile-dev', function(){
	gulp.src(htmlSources)
		.pipe(gulp.dest('builds/development'));
});

gulp.task('js-dev', function(){
	gulp.src(jsSources)
		.pipe(concat('iframer.js'))
		.pipe(gulp.dest('builds/development/js'));
});