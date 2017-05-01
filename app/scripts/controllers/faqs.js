'use strict';

angular.module('hoaApp')
  .controller('FaqsCtrl', function ($scope, $route, PageTitle, MetaInformation) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    PageTitle.setTitle($route.current.title);
    MetaInformation.setMetaDescription("Frequently asked questions regarding Choice Members Site Owners Society");
    MetaInformation.setMetaKeywords("faq, faqs, cmsos, ferns, cascading meadows, choice members site owners society, TC Palya, Margondanahalli, Bangalore, Bengaluru, society");
  });
