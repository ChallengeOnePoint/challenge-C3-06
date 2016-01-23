'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */

angular.module('todoApp').factory('Api',
  function($http, socketFactory){
    var API = {
      todos : {},
      socket : null,
      init : function(){
        API.socket = socketFactory({
          ioSocket: io.connect('http://localhost:3000')
        });
        API.socket.on("new_todo", function(data){
          API.todos[data.id] = todo;
          console.log("new_todo", API.todos);
        });
        API.socket.on("update_todo", function(data){
          API.todos[data.id] = data;
          console.log("update_todo", API.todos);
        });
        API.socket.on("remove_todo", function(data){
          delete API.todos[data.id];
          console.log("remove_todo", API.todos);
        });

      },
      addTodo : function(todo) {
        API.socket.emit("add_todo", todo);
      },
      updateTodo : function(todo) {
        API.socket.emit("update_todo", todo);
      },
      removeTodo : function(todo) {
        API.socket.emit("remove_todo", todo);
      },
      getTodos : function(){
        API.socket.emit("get_todos");
      }
    };
    API.init();
    return API;
  });
