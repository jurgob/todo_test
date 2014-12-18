var mega_todo = angular.module('mega_todo', [
    'ngRoute',
    'mega_todo_ctrls'
]);


mega_todo.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/todo_page.html',
                controller: 'MainCtrl'
            }).
            when('/credits', {
                templateUrl: 'partials/credits.html',
                controller: 'MainCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);


angular.module('mega_todo_ctrls', []);
angular.module('mega_todo_ctrls').controller('MainCtrl', function ($scope) {

    $scope.todoList = [
        {text: 'Dynamic Todo 1', done: true},
        {text: 'check the checklist 2', done: false}
    ];

    var addItem = function (text) {
        if (text)
            $scope.todoList.push({
                text: text,
                done: false
            });
    }

    $scope.deleteItem = function (idx) {
        $scope.todoList.splice(idx, 1)
    }

    $scope.addItem = function () {
        addItem($scope.newItemText)
        $scope.newItemText = undefined;
    }

    $scope.modifyItem = function (itemIdx, newItem) {
        var _item = $scope.todoList[itemIdx];
        Object.keys(newItem).forEach(function (attrName) {
            _item[attrName] = newItem[attrName]
        });
    }

    $scope.getCompletedItems = function () {
        return $scope.todoList.filter(function (el) {
            return el.done
        })
    }
});