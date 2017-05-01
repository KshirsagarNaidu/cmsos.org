'use strict';

/**
 * @ngdoc function
 * @name hoaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hoaApp
 */
angular.module('hoaApp')
  .controller('AboutCtrl', function($scope, $route, PageTitle, MetaInformation) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    PageTitle.setTitle('About Us');
    MetaInformation.setMetaDescription('The goals and objectives of Choice Members Site Owners Society (CMSOS), as well as listing the committee members, who look for the welfare of Cascading Meadows, Old Madras Road, Bangalore');
    MetaInformation.setMetaKeywords('President, Secretary, Vice-President, Treasurer, Member, Members, Committee Members, About Us, About, Choice Members Site Owners Society, CMSOS, Cascading Meadows, progress, change, development, improvement');
  });
