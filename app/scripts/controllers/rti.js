'use strict';
angular.module('hoaApp')
.controller('RTICtrl', function ($scope, $route, PageTitle, MetaInformation) {
	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];
	PageTitle.setTitle($route.current.title);
	MetaInformation.setMetaDescription("Get the Right To Information (RTI) forms here");
	MetaInformation.setMetaKeywords("rti, right to information, cmsos, choice members site owners society, cascading meadows, ferns, old madras road, bangalore, bengaluru, 560036");
});
