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
      init : function(){
        socketFactory.$on('connected', function(){
          console.log("connected");
        });
      }
    };
    API.init();
    return API;
  });
