define(function() {

    var config = function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('grids.tabs', {
                url: '/grids/tabs',
                template: "<h1>And I'm Tabs! grids and tabs and grids and tabs!</h1>" +
                    "<table><tr><th>Tab1</th><th>Tab2</th><th>Tab3</th><th>Tab4</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><th>TabX</th><tr></table>"
            });

    };

    return ['$stateProvider', config];

});
