define([], function() {

    var config = function($stateProvider, $urlRouterProvider, $futureStateProvider, $ocLazyLoadProvider, $logProvider) {

        // disable logging
        $logProvider.debugEnabled(true);

        $ocLazyLoadProvider.config({
            debug: false,
            jsLoader: requirejs
        });

        // Loading states from .json file during runtime
        var loadAndRegisterFutureStates = function($http) {
            // $http.get().then() returns a promise
            return $http.get('futureStates.json').then(function(resp) {
                angular.forEach(resp.data, function(fstate) {
                    // Register each state returned from $http.get() with $futureStateProvider
                    $futureStateProvider.futureState(fstate);
                });
            });
        };


        var ocLazyLoadStateFactory = function($q, $ocLazyLoad, futureState) {
            return $ocLazyLoad.load({
                name: futureState.module,
                files: [futureState.src]
            });
        };

        $futureStateProvider.stateFactory('ocLazyLoad', ocLazyLoadStateFactory);
        $futureStateProvider.addResolve(loadAndRegisterFutureStates);




        $urlRouterProvider
        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
            .otherwise('/');



        $stateProvider
            .state("home", {
                url: "/",

                // Example of an inline template string. By default, templates
                // will populate the ui-view within the parent state's template.
                // For top level states, like this one, the parent template is
                // the index.html file. So this template will be inserted into the
                // ui-view within index.html.
                template: '<h1>This is the home State</h1><h2>Welcome!<div ui-view></div></h2>'
            })
            .state('about', {
                url: '/about',

                // Showing off how you could return a promise from templateProvider
                templateProvider: ['$timeout',
                    function($timeout) {
                        return $timeout(function() {
                            return '<p class="lead">Resources</p><ul>' +
                                // TODO: Add relevant links here
                                '<li>ui-router</li>'
                            '</ul>';
                        }, 100);
                    }
                ]
            })
    }


    return ['$stateProvider', '$urlRouterProvider', '$futureStateProvider', '$ocLazyLoadProvider', '$logProvider', config];

});
