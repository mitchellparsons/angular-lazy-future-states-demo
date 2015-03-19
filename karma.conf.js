'use strict';

// var baseUrl = '../../';

module.exports = function(config) {

    config.set({

        //app is our base path for all source files
        basePath: './app',

        frameworks: ['jasmine', 'requirejs'],

        browsers: ['PhantomJS'],

        files: [
            // 'vendor/angular/angular.js',
            // 'vendor/angular-mocks/angular-mocks.js', 
            {
                pattern: './**/*.js', // includes everything in app/
                included: false
            },
            // {pattern: 'app/vendor/**/*.js', included: false},
            // {pattern: 'app/**/*.js', included: false},
            //{pattern: 'app/**/*.spec.js', included: false},
            // Pattern to load the needed test files
            // 'app/**/*.spec.js',

            {
                pattern: '../test/unit/test-main.js',
                included: true
            }
        ],
        // list of files to exclude
        exclude: [
            './main.js'
        ],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-requirejs'
        ],


        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false


    });
};

// // list of files / patterns to load in the browser
// module.exports = function(config) {
//   config.set({
//     frameworks: ['jasmine', 'requirejs'],

//     files: [
//       {pattern: 'lib/**/*.js', included: false},
//       {pattern: 'src/**/*.js', included: false},
//       {pattern: 'test/**/*Spec.js', included: false},

//       'test/test-main.js'
//     ],

//     // list of files to exclude
//     exclude: [
//         'src/main.js'
//     ]
//   });
// };
