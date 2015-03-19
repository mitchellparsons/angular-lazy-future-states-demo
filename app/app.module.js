define([

    'angular',
    'app.config',
    'app.run',
    'angularUiRouter',
    'ui-router-extras-future',
    'ocLazyLoad',
    'ui-router-extras-statevis',
    'd3'
], function(angular, appConfig, appRun) {

    'use strict';

    return angular.module('app', ['ui.router',
            'ct.ui.router.extras.future',
            'oc.lazyLoad',
            'ct.ui.router.extras.statevis'
        ])
        .run(appRun)
        .config(appConfig);

});
