define(['angularAMD', 'angular-route'], function (angularAMD) {

    var mega_todo = angular.module('mega_todo', [
        'ngRoute'
    ]);

    mega_todo.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/', angularAMD.route({
                    templateUrl: 'partials/todo_page.html',
                    controller: 'MainCtrl',
                    controllerUrl: 'main_ctrl'
                })).
                when('/credits', angularAMD.route({
                    templateUrl: 'partials/credits.html',
                    controller: 'MainCtrl',
                    controllerUrl: 'main_ctrl'
                })).
                otherwise({
                    redirectTo: '/'
                });
        }
    ]);



    return angularAMD.bootstrap(mega_todo);
});