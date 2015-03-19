'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Static server
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: "./app"
    }
});

    gulp.watch(['*.html',
        'assets/**/*.css',
        '*.js',
        'states/**/*.js',
        'shared/**/*.js'], { cwd: './app' }, reload);
});


// Static server in dist folder
gulp.task('serve:dist',['build'], function () {
    browserSync({
        server: {
            baseDir: "./dist"
        }
    });
    // TODO: add a watch to src files and trigger rebuild
    gulp.watch(['./**/*.html',
        './**/*.css',
        './**/*.js'], { cwd: './dist' }, reload);
});


// Static server for e2e from the src folder
// Does not open a browser
gulp.task('serve:e2e', function () {
    browserSync({
        server: {
            baseDir: "./app"
        },
        browser: [] // prevents browser automatically opening
    });
});


// Static server for e2e from the dist folder
// Does not open a browser
gulp.task('serve:e2e-dist',['build'], function () {
    browserSync({
        server: {
            baseDir: "./dist"
        },
        browser: [] // prevents browser automatically opening
    });
});