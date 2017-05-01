'use strict';

/**
 * @ngdoc function
 * @name hoaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoaApp
 */
angular.module('hoaApp')
  .controller('CascadingMeadows_Agm2016_Ctrl', function ($scope, $route, PageTitle, MetaInformation) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    PageTitle.setTitle($route.current.title);
    MetaInformation.setMetaDescription('Cascading Meadows CMSOS AGM 2016');
    MetaInformation.setMetaKeywords('AGM', 'Annual General Body Meeting', '2016', 'Bye-Laws, laws, Choice Members Site Owners Society, Cascading Meadows, cascading, meadows, Bangalore, Bengaluru, Karnataka');
  });
