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
      todos : [],
      socket : null,
      trigger : function(){},
      init : function(){
        API.socket = socketFactory({
          ioSocket: io.connect('http://localhost:3000')
        });
        API.socket.on("new_todo", function(todo){
          API.todos.unshift(todo);
          API.trigger();
        });
        API.socket.on("update_todo", function(todo){
          console.log("updated_todo")
          var index = 0;
          API.todos.forEach(function(_todo){
            if (_todo.id == todo.id)
              API.todos[index] = todo;
            index++;
          });
          API.trigger();
        });
        API.socket.on("remove_todo", function(todo){
          var index = 0;
          console.log("api", "remove_todo");
          API.todos.forEach(function(_todo){
            if (_todo.id == todo.id)
              delete API.todos[index];
            index++;
          });
          API.trigger();
        });
        API.socket.on("todos", function(todos){
          API.todos = [];
          Object.keys(todos).forEach(function (key) {
             API.todos.push(JSON.parse(todos[key]));
          });
          API.trigger();
        });
        API.getTodos();

      },
      addTodo : function(todo) {
        API.socket.emit("add_todo", todo);
      },
      updateTodo : function(todo) {
        API.socket.emit("update_todo", todo);
      },
      removeTodo : function(todo) {
        console.log("send remove", todo);
        API.socket.emit("remove_todo", todo);
      },
      getTodos : function(){
        API.socket.emit("get_todos");
      },
      on_update: function(next){
        API.trigger = next;
      }
    };
    API.init();
    return API;
  });
