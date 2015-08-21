var gulp = require('gulp');
var gulpcat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Default task can just be run using $ gulp on command line
gulp.task('default', function(){
    console.log('I am the default gulp..');
});

// .task - run a single task, or pass an array of tasks to run at once
// .src - specifies the directory of files to operate on
// .pipe - the method that specifies a list of sequential steps to operate on all the files
// .dest - pipe the build files to a destination
// .watch - will watch files for saves, then re-run the task or build

// You can also install a LiveReload extension for chrome, and then use livereload()


gulp.task('build-js', function(){
	gulp.src('./js/*.js')
		.pipe(concat('allScripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build'))
});