define([
    'angular',
    'states/grids/tabs/tabs.config',
    'angularUiRouter'
], function(angular, tabsConfig) {

    'use strict';
    return angular.module('psapp.grids.tabs', ['ui.router'])
        .config(tabsConfig);


});
