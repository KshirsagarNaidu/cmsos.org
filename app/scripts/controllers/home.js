'use strict';

/**
 * @ngdoc function
 * @name hoaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoaApp
 */
angular.module('hoaApp')
  .controller('HomeCtrl', function ($scope, $route, PageTitle, MetaInformation) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    PageTitle.setTitle('Choice Members Site Owners Society - Home');
    MetaInformation.setMetaDescription('Welcome to Choice Members Site Owners Society. We look into the welfare and benefit of the site owners at Cascading Meadows, Bangalore');
    MetaInformation.setMetaKeywords('Choice Members Site Owners Society, CMSOS, Society, Cascading Meadows, Ferns, Old Madras Road, Site Owners, Margondanahalli Village, Bidarahalli-2 Hobli, East Taluk, Bangalore-560036');
  });
