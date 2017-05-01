'use strict';

/**
 * @ngdoc overview
 * @name hoaApp
 * @description
 * # hoaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('hoaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ]);
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl',
      title: 'Choice Members Site Owners Society - Home',
      description: 'Welcome to Choice Members Site Owners Society. We look into the welfare and benefit of the site owners at Cascading Meadows, Bangalore',
keywords: 'Choice Members Site Owners Society, CMSOS, Society, Cascading Meadows, Ferns, Old Madras Road, Site Owners, Margondanahalli Village, Bidarahalli-2 Hobli, East Taluk, Bangalore-560036'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      title: 'About Us',
      description: 'Describing the goals and objectives of Choice Members Site Owners Society (CMSOS), as well as listing the committee members, who look for the welfare of Cascading Meadows, Bangalore',
      keywords: 'Committee Members, About Us, About, Choice Members Site Owners Society, CMSOS, Cascading Meadows'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl',
      title: 'Contact Us'
    })
    .when('/rti', {
      templateUrl: 'views/rti.html',
      controller: 'RTICtrl',
      title: 'RTI'
    })
    .when('/bye-laws', {
      templateUrl: 'views/bye-laws.html',
      controller: 'ByeLawsCtrl',
      title: 'Bye - Laws'
    })
    .when('/faqs', {
      templateUrl: 'views/faqs.html',
      controller: 'FaqsCtrl',
      title: 'FAQs'
    })
    .when('/cascadingMeadows', {
      templateUrl: 'views/cascadingMeadows.html',
      controller: 'CascadingMeadowsCtrl',
      title: 'Cascading Meadows Layout Info'
    })
    .when('/CascadingMeadows_Agm2016', {
      templateUrl: 'views/cascadingMeadows_agm2016.html',
      controller: 'CascadingMeadows_Agm2016_Ctrl',
      title: 'Cascading Meadows AGM 2016 Info'
    })
    .when('/CascadingMeadows_Agm2017', {
      templateUrl: 'views/cascadingMeadows_agm2017.html',
      controller: 'CascadingMeadows_Agm2017_Ctrl',
      title: 'Cascading Meadows AGM 2017 Info'
    })
    .otherwise({
      redirectTo: '/'
    });
	// $locationProvider.html5Mode({enabled: true});
  $.material.init();
});
app.factory('PageTitle', function() {
  var title = 'CMSOS';
  // var product = 'CMSOS';
  return {
    title: function() {
      return title;
    },
    setTitle: function(newTitle) {
      title = newTitle;
    }
  };
});
app.factory('MetaInformation', function() {
  var metaDescription = '';
  var metaKeywords = '';
  return {
    metaDescription: function() {
      return metaDescription;
    },
    metaKeywords: function() {
      return metaKeywords;
    },
    reset: function() {
      metaDescription = '';
      metaKeywords = '';
    },
    setMetaDescription: function(newMetaDescription) {
      metaDescription = newMetaDescription;
    },
	setMetaKeywords : function(newKeywords){
		metaKeywords = newKeywords;
	},
    appendMetaKeywords: function(newKeywords) {
      for (var key in newKeywords) {
        if (metaKeywords === '') {
          metaKeywords += newKeywords[key].name;
        } else {
          metaKeywords += ', ' + newKeywords[key].name;
        }
      }
    }
  };
});
