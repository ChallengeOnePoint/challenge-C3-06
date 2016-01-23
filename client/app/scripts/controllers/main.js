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

    //Object Todo {}
    $scope.addTodo = Api.addTodo;
    $scope.updateTodo = Api.updateTodo;
    $scope.removeTodo = Api.removeTodo;

    $scope.addTodo({
      title : "test"
    });
  });
