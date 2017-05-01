'use strict';

angular.module('hoaApp')
  .controller('ContactCtrl', function ($scope, $route, PageTitle, MetaInformation) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    PageTitle.setTitle($route.current.title);
    MetaInformation.setMetaDescription("Contact details for Choice Members Site Owners Society(CMSOS)");
    MetaInformation.setMetaKeywords("cmsos, cascading meadows, old madras road, cascading, meadows, ferns");
  });
