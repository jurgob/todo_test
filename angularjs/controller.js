
window.mega_todo = Ember.Application.create();

angular.module('mega_todo').controller('MainCtrl', function ($scope) {
  $scope.todoList = [
    { text:'Dynamic Todo 1', done: true},
    { text:'check the checklist 2', done: false}
  ];

  var addItem = function(text){
  	$scope.todoList.push({ 
  		text: text,
  		done: false
  	});
  }
  
  $scope.deleteItem = function(idx){
  	$scope.todoList.splice(idx, 1)
  }




  $scope.addItem = addItem

});