'use strict';

/**
 * @ngdoc overview
 * @name catstagramApp
 * @description
 * # catstagramApp
 *
 * Main module of the application.
 */

angular.module('catstagramApp').factory('Cats',
  function($http, $q){
    var API = {
      getCats : function(){
        return $q(function(resolve, reject) {
          var url = "/images/cats/kittenIdentity.json";
          $http.get(url)
          .success(function(data) {
            return resolve(data);
          });
        });
      }
    };
    return API;
  });
