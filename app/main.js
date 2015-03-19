'use strict';

require.config({

    deps: ['app.bootstrap'],

    // Cache busting
    // Enable for production only
    //urlArgs: '_=' + (new Date()).getTime(),

    paths: {
        'angular': 'vendor/angular/angular',
        'angularUiRouter': 'vendor/angular-ui-router/release/angular-ui-router',
        'ui-router-extras-core': 'vendor/ui-router-extras/release/modular/ct-ui-router-extras.core.min',
        'ui-router-extras-future': 'vendor/ui-router-extras/release/modular/ct-ui-router-extras.future.min',
        'ocLazyLoad': 'vendor/oclazyload/dist/ocLazyLoad.min',
        'd3': 'vendor/d3/d3.min',
        'ui-router-extras-statevis': 'vendor/ui-router-extras/release/modular/ct-ui-router-extras.statevis.min',
        'ui-router-extras-sticky': 'vendor/ui-router-extras/release/modular/ct-ui-router-extras.sticky.min'

    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularUiRouter': ['angular'],
        'ui-router-extras-core': ['angular'],
        'ui-router-extras-future': ['angular', 'ui-router-extras-core'],
        'ocLazyLoad': ['angular'],
        'ui-router-extras-statevis': ['angular', 'ui-router-extras-sticky'],
        'ui-router-extras-sticky': ['angular', 'ui-router-extras-core']
    }

});