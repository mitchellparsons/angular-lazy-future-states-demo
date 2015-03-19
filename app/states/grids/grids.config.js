define(function() {
    'use strict';

    var config = function($stateProvider) {
        $stateProvider
            .state('grids', {
                url: '/grids',
                template: "<h1>I'm grids!</h1>" +
                    '<style>td{border:1px solid green}th{border:1px solid blue}</style><table class="tg" style="border:1px solid black">  <tr>    <th class="tg-031e"></th>    <th class="tg-031e">a</th>    <th class="tg-031e">b</th>    <th class="tg-031e">c</th>    <th class="tg-031e">d</th>    <th class="tg-031e">e</th>    <th class="tg-031e">f</th>    <th class="tg-031e">g</th>    <th class="tg-031e">h</th>  </tr>  <tr>    <td class="tg-031e">1</td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>  </tr>  <tr>    <td class="tg-031e">2</td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>  </tr>  <tr>    <td class="tg-031e">3</td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>  </tr>  <tr>    <td class="tg-031e">4</td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>  </tr>  <tr>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>    <td class="tg-031e"></td>  </tr></table>' +
                    '<a ui-sref="grids.tabs"><button>Add some Tabs!</button></a> ' +
                    '<div ui-view></div>'
            });
    };
    return ['$stateProvider', config];
});
