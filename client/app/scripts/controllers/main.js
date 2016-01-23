'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope, Api) {
    $scope.todos = Api.todos;

    $scope.new_todo = {};

    //Object Todo {}
    $scope.addTodo = function(todo){
      Api.addTodo(todo);
      $scope.new_todo = {};
    };

    $scope.updateTodo = Api.updateTodo;
    $scope.deleteCard = Api.removeTodo;

    $scope.addTodo({
      title : "test"
    });

    $scope.openModalAdd = function(todoType){
      $('#modalAdd').openModal();
      $scope.new_todo.type = todoType;
      /*
      $scope.addTodo({
        title : "test"
      });*/
    };
    $scope.modifyCard = function(card){
    	$('#modalUpdate').openModal();
    	$scope.current_todo = card;
    };
  });
