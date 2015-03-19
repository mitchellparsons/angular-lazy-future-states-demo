// We need to load all the normal files from main.js
// In addition we need to load the spec files

var allTestFiles = [];
// regex to find all files ending '.spec.js'
var TEST_REGEXP = /\.spec\.js$/;

// this function strips karma's base url of '/base' off of the filepath
// additionally it strips off the .js extension as requirejs adds that
var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});


require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
        angular: 'vendor/angular/angular',
        angularUiRouter: 'vendor/angular-ui-router/release/angular-ui-router',
        angularMocks: 'vendor/angular-mocks/angular-mocks',
        "ui-router-extras-core": "vendor/ui-router-extras/release/modular/ct-ui-router-extras.core.min",
        "ui-router-extras-future": "vendor/ui-router-extras/release/modular/ct-ui-router-extras.future.min",
        "ocLazyLoad": "vendor/oclazyload/dist/ocLazyLoad.min",

        "d3": "vendor/d3/d3.min",
        "ui-router-extras-statevis": 'vendor/ui-router-extras/release/modular/ct-ui-router-extras.statevis.min',
        "ui-router-extras-sticky": 'vendor/ui-router-extras/release/modular/ct-ui-router-extras.sticky.min'

    },

    shim: {
        angular: {
            exports: "angular"
        },
        angularUiRouter: ["angular"],
        angularMocks: ["angular"],
        "ui-router-extras-core": ["angular"],
        "ui-router-extras-future": ["angular", "ui-router-extras-core"],
        "ocLazyLoad": ["angular"],

        "ui-router-extras-statevis": ["angular", "ui-router-extras-sticky"],
        "ui-router-extras-sticky": ["angular", "ui-router-extras-core"]

    },


    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
