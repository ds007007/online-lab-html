'use strict';

angular.module('onlinelabApp')
  .directive('appLastProjects', function () {
    return {
      templateUrl: 'app/directives/last-projects/last-projects.html',
      restrict: 'A',
      scope:{
        title: "@"
      },
      link: function (scope, element, attrs) {
        
      }
    };
  });