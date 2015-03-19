define(['shared/utils/utils',
    'shared/users/users.service'
        // 'states/users/users.service',
        // 'shared/users-service/users.service'
    ],
    function(utils,usersService) {
        'use strict';
        var config = function($stateProvider) {
            console.log($stateProvider);
            $stateProvider
            //////////////
            // users //
            //////////////
                .state('users', {

                    // With abstract set to true, that means this state can not be explicitly activated.
                    // It can only be implicitly activated by activating one of its children.
                    abstract: true,

                    // This abstract state will prepend '/users' onto the urls of all its children.
                    url: '/users',

                    // Example of loading a template from a file. This is also a top level state,
                    // so this template file will be loaded and then inserted into the ui-view
                    // within index.html.
                    templateUrl: 'states/users/users.html',

                    // Use `resolve` to resolve any asynchronous controller dependencies
                    // *before* the controller is instantiated. In this case, since users
                    // returns a promise, the controller will wait until users.all() is
                    // resolved before instantiation. Non-promise return values are considered
                    // to be resolved immediately.
                    resolve: {
                        usersList: [usersService,
                            function(users) {
                                return users.all();
                            }
                        ]
                    },

                    // You can pair a controller to your template. There *must* be a template to pair with.
                    controller: ['$scope', '$state', 'usersList',
                        function($scope, $state, users) {
                            // Add a 'users' field in this abstract parent's scope, so that all
                            // child state views can access it in their scopes. Please note: scope
                            // inheritance is not due to nesting of states, but rather choosing to
                            // nest the templates of those states. It's normal scope inheritance.
                            $scope.users = users;
                            $scope.goToRandom = function() {
                                console.log(users);
                                var randId = utils.newRandomKey($scope.users, "id", $state.params.userId);

                                // $state.go() can be used as a high level convenience method
                                // for activating a state programmatically.
                                //  $state.go('users.detail', { userId: randId });
                            };
                        }
                    ]
                })
                /////////////////////
                // Users > List //
                /////////////////////

            // Using a '.' within a state name declares a child within a parent.
            // So you have a new state 'list' within the parent 'users' state.
            .state('users.list', {

                // Using an empty url means that this child state will become active
                // when its parent's url is navigated to. Urls of child states are
                // automatically appended to the urls of their parent. So this state's
                // url is '/users' (because '/users' + '').
                url: '',

                // IMPORTANT: Now we have a state that is not a top level state. Its
                // template will be inserted into the ui-view within this state's
                // parent's template; so the ui-view within users.html. This is the
                // most important thing to remember about templates.
                templateUrl: 'states/users/users.list.html'
            })


            .state('users.detail', {
                // Urls can have parameters. They can be specified like :param or {param}.
                // If {} is used, then you can also specify a regex pattern that the param
                // must match. The regex is written after a colon (:). Note: Don't use capture
                // groups in your regex patterns, because the whole regex is wrapped again
                // behind the scenes. Our pattern below will only match numbers with a length
                // between 1 and 4.

                // Since this state is also a child of 'users' its url is appended as well.
                // So its url will end up being '/users/{userId:[0-9]{1,4}}'. When the
                // url becomes something like '/users/42' then this state becomes active
                // and the $stateParams object becomes { userId: 42 }.
                url: '/{userId:[0-9]{1,4}}',

                // If there is more than a single ui-view in the parent template, or you would
                // like to target a ui-view from even higher up the state tree, you can use the
                // views object to configure multiple views. Each view can get its own template,
                // controller, and resolve data.

                // View names can be relative or absolute. Relative view names do not use an '@'
                // symbol. They always refer to views within this state's parent template.
                // Absolute view names use a '@' symbol to distinguish the view and the state.
                // So 'foo@bar' means the ui-view named 'foo' within the 'bar' state's template.
                views: {

                    // So this one is targeting the unnamed view within the parent state's template.
                    '': {
                        templateUrl: 'states/users/users.detail.html',
                        controller: ['$scope', '$stateParams',
                            function($scope, $stateParams) {
                                $scope.user = utils.findById($scope.users, $stateParams.userId);
                            }
                        ]
                    },

                    // This one is targeting the ui-view="hint" within the unnamed root, aka index.html.
                    // This shows off how you could populate *any* view within *any* ancestor state.
                    'hint@': {
                        template: 'This is users.detail populating the "hint" ui-view '
                    },

                    // This one is targeting the ui-view="menuTip" within the parent state's template.
                    'menuTip': {
                        // templateProvider is the final method for supplying a template.
                        // There is: template, templateUrl, and templateProvider.
                        templateProvider: ['$stateParams',
                            function($stateParams) {
                                // This is just to demonstrate that $stateParams injection works for templateProvider.
                                // $stateParams are the parameters for the new state we're transitioning to, even
                                // though the global '$stateParams' has not been updated yet.
                                return '<hr><small class="muted">User ID: ' + $stateParams.userId + '</small>';
                            }
                        ]
                    }
                }
            });
        };

        return ['$stateProvider', config];

    });
