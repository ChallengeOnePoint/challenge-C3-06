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
    $scope.todos = [];

    $scope.new_todo = {};

    Api.on_update(function(){
       $scope.todos = Api.todos;
    });

    //Object Todo {}
    $scope.addTodo = function(todo){
      Api.addTodo(todo);
      $scope.new_todo = {};
    };

    $scope.updateTodo = Api.updateTodo;

    $scope.removeTodo = function(card){
      Api.removeTodo(card);
    };

    $('select').material_select();
    
    $scope.openModalAdd = function(todoType){
      $('#modalAdd').openModal();
      $scope.new_todo.type = todoType;
    };

    $scope.modifyCard = function(card){
    	$('#modalUpdate').openModal();
    	$scope.current_todo = card;
    };
  });
