'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync');

var protractor = require("gulp-protractor").protractor;

var webdriver_update = require('gulp-protractor').webdriver_update;


gulp.task('webdriver-update', webdriver_update);


function runProtractor(done) {
    gulp.src(['example_spec.js']).pipe(protractor({
        configFile: 'protractor.conf.js'
    }))
    .on('error', function (err) {
        // Make sure failed tests cause gulp to exit non-zero
        throw err;
    })
    .on('end', function () {
        // Close browser sync server
        browserSync.exit();
        done();
    });
}


gulp.task('e2e', ['e2e:src']);
gulp.task('e2e:src', ['serve:e2e', 'webdriver-update'], runProtractor);
gulp.task('e2e:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
