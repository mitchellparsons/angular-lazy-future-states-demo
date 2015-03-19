//TODO: Implement r.js here

'use strict';

var gulp = require('gulp');
var del = require('del');


//TODO: flesh out minification for a real build
gulp.task('build', ['clean'], function () {
    return gulp.src(__dirname + '/../app/**/*')
      .pipe(gulp.dest(__dirname + '/../dist'));
});


gulp.task('clean', function (done) {
    del([__dirname + '/../dist/*'], done);
});

