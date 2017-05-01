'use strict';

/**
 * @ngdoc function
 * @name hoaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoaApp
 */
angular.module('hoaApp')
  .controller('ByeLawsCtrl', function ($scope, $route, PageTitle, MetaInformation) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    PageTitle.setTitle($route.current.title);
    MetaInformation.setMetaDescription('See the Bye-Laws of Choice Members Site Owners Society, Bangalore, Bengaluru, Karnataka');
    MetaInformation.setMetaKeywords('Bye-Laws, laws, Choice Members Site Owners Society, Cascading Meadows, cascading, meadows, Bangalore, Bengaluru, Karnataka');
  });
