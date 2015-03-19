define(['shared/common.module', 'shared/utils/utils'], function(commonModule, utils) {

    var serviceName = 'UsersService';

    commonModule.factory(serviceName, ['$http', function($http) {

        var path = 'assets/users.json';
        var users = $http.get(path).then(function(resp) {
            return resp.data;
        });

        var factory = {};
        factory.all = function() {
            return users;
        };
        factory.get = function(id) {
            return users.then(function(users) {
                return utils.findById(users, id);
            })
        };
        return factory;
    }]);

    return serviceName;
});

// define(['angular', 'shared/utils/utils', 'states/users/users.module'], function(angular) {

//     'use strict';
//     angular.module('psapp.users')
//         // A RESTful factory for retrieving contacts from 'contacts.json'
//         .factory('users', ['$http', function($http) {

//             var path = 'assets/users.json';
//             var users = $http.get(path).then(function(resp) {
//                 return resp.data.users;

//             });

//             var factory = {};
//             factory.all = function() {
//                 return users;
//             };
//             factory.get = function(id) {
//                 return users.then(function() {
//                     return utils.findById(users, id);
//                 })
//             };
//             return factory;
//         }]);

// });
