require([

    'angular',
    'app.module'    

], function (angular) {

        'use strict';        

		angular.element(document).ready(function () {
            angular.bootstrap(document, ['app']);
            angular.element(document.querySelector('html')).addClass('ng-app: app');
        });
        
    }
);