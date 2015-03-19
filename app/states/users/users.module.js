define([
	'angular', 
	'states/users/users.config',
    'shared/common.module',
	'angularUiRouter'
	], function(angular, usersConfig) {

    'use strict';
    var app = angular.module('psapp.users', ['ui.router', 'psapp.common']);
    	app.config(usersConfig);

    	return 'psapp.users';
});