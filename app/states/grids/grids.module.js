define([
        'angular',
        'states/grids/grids.config',
        'states/grids/tabs/tabs.module',
        'angularUiRouter'
    ],
    function(angular, gridsConfig) {

        'use strict';
        return angular.module('psapp.grids', ['ui.router', 'psapp.grids.tabs'])
            .config(gridsConfig);

    });
