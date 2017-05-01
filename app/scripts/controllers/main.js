'use strict';

/**
 * @ngdoc function
 * @name hoaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoaApp
 */
angular.module('hoaApp')
.controller('MainCtrl', function($scope, PageTitle, MetaInformation) {
  $scope.PageTitle = PageTitle;
  $scope.MetaInformation = MetaInformation;
});
