'use strict';

/**
 * @ngdoc function
 * @name hoaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoaApp
 */
function renderMap() {
  var cascadingMeadowsP1Center = new google.maps.LatLng(13.032750, 77.695892);

  var mapOptions = {
    zoom: 17,
    center: cascadingMeadowsP1Center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var cascadingMeadowsP1, cascadingMeadowsP2;

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

    // set data for phase-I

  // Define the LatLng coordinates for the polygon's path.
  var polyCoordinatesPhase1 = [
    new google.maps.LatLng(13.032802, 77.693825),
    new google.maps.LatLng(13.033288, 77.693990),
    new google.maps.LatLng(13.034332, 77.694210),
    new google.maps.LatLng(13.034145, 77.695267),
    new google.maps.LatLng(13.033902, 77.696353),
    new google.maps.LatLng(13.033724, 77.696996),
    new google.maps.LatLng(13.033568, 77.696985),
    new google.maps.LatLng(13.033402, 77.697656),
    new google.maps.LatLng(13.032378, 77.697263),
    new google.maps.LatLng(13.032850, 77.694795),
    new google.maps.LatLng(13.032204, 77.694663),
    new google.maps.LatLng(13.032231, 77.694301),
    new google.maps.LatLng(13.032594, 77.694295),
    new google.maps.LatLng(13.032633, 77.694117),
    new google.maps.LatLng(13.032802, 77.693825)
  ];

  // Construct the polygon.
  cascadingMeadowsP1 = new google.maps.Polygon({
    paths: polyCoordinatesPhase1,
    strokeColor: '#90C695',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#90C695',
    fillOpacity: 0.35
  });

// marker with label for phase-I
  var cascadingMeadowsP1Marker = new MarkerWithLabel({
    position: new google.maps.LatLng(13.033263, 77.695893),
    draggable: false,
    map: map,
    labelContent: 'Cascading Meadows Phase-I',
    labelAnchor: new google.maps.Point(30, 0),
    labelClass: 'google-maps-label', // the CSS class for the label
    labelStyle: {
      opacity: 0.75
    }
  });

  // set data for phase-II

  // Define the LatLng coordinates for the polygon's path.
  var polyCoordinatesPhase2 = [
    new google.maps.LatLng(13.032622, 77.695981),
    new google.maps.LatLng(13.032045, 77.695901),
    new google.maps.LatLng(13.031983, 77.695875),
    new google.maps.LatLng(13.032042, 77.695723),
    new google.maps.LatLng(13.031465, 77.695526),
    new google.maps.LatLng(13.031053, 77.696617),
    new google.maps.LatLng(13.031372, 77.696780),
    new google.maps.LatLng(13.031489, 77.698636),
    new google.maps.LatLng(13.031609, 77.698619),
    new google.maps.LatLng(13.031501, 77.696847),
    new google.maps.LatLng(13.031845, 77.697048),
    new google.maps.LatLng(13.032378, 77.697263),
    new google.maps.LatLng(13.032622, 77.695981)
  ];

  // Construct the polygon.
  cascadingMeadowsP2 = new google.maps.Polygon({
    paths: polyCoordinatesPhase2,
    strokeColor: '#90C695',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#90C695',
    fillOpacity: 0.35
  });

  var cascadingMeadowsP2Marker = new MarkerWithLabel({
    position: new google.maps.LatLng(13.032014, 77.696499),
    draggable: false,
    map: map,
    labelContent: 'Cascading Meadows Phase-II',
    labelAnchor: new google.maps.Point(30, 0),
    labelClass: 'google-maps-label', // the CSS class for the label
    labelStyle: {
      opacity: 0.75
    }
  });

  cascadingMeadowsP1.setMap(map);
  cascadingMeadowsP2.setMap(map);
}


// function renderMap2() {
//   var cascadingMeadowsP2Center = new google.maps.LatLng(13.031964, 77.697535);
//
//   var mapOptions = {
//     zoom: 17,
//     center: cascadingMeadowsP2Center,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//
//   var cascadingMeadowsP2;
//
//   var map = new google.maps.Map(document.getElementById('map-canvas-phase-2'),
//     mapOptions);
//
//   // Define the LatLng coordinates for the polygon's path.
//   var polyCoordinates = [
//     new google.maps.LatLng(13.032622, 77.695981),
//     new google.maps.LatLng(13.032045, 77.695901),
//     new google.maps.LatLng(13.031983, 77.695875),
//     new google.maps.LatLng(13.032042, 77.695723),
//     new google.maps.LatLng(13.031465, 77.695526),
//     new google.maps.LatLng(13.031053, 77.696617),
//     new google.maps.LatLng(13.031372, 77.696780),
//     new google.maps.LatLng(13.031478, 77.698502),
//     new google.maps.LatLng(13.031597, 77.698505),
//     new google.maps.LatLng(13.031501, 77.696847),
//     new google.maps.LatLng(13.031845, 77.697048),
//     new google.maps.LatLng(13.032378, 77.697263),
//     new google.maps.LatLng(13.032622, 77.695981)
//   ];
//
//   // Construct the polygon.
//   cascadingMeadowsP2 = new google.maps.Polygon({
//     paths: polyCoordinates,
//     strokeColor: '#FF0000',
//     strokeOpacity: 0.8,
//     strokeWeight: 2,
//     fillColor: '#FF0000',
//     fillOpacity: 0.35
//   });
//
//   var cascadingMeadowsP2Marker = new MarkerWithLabel({
//     position: new google.maps.LatLng(13.032014, 77.696499),
//     draggable: true,
//     map: map,
//     labelContent: 'Cascading Meadows Phase-II',
//     labelAnchor: new google.maps.Point(30, 0),
//     labelClass: 'google-maps-label', // the CSS class for the label
//     labelStyle: {
//       opacity: 0.75
//     }
//   });
//
//   cascadingMeadowsP2.setMap(map);
// }

angular.module('hoaApp')
  .controller('CascadingMeadowsCtrl', function($scope, $route, $timeout, PageTitle, MetaInformation) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    PageTitle.setTitle($route.current.title);
    MetaInformation.setMetaDescription("Information about the Ferns Cascading Meadows CMSOS society located at K.R. Puram, Old Madras Road.");
    MetaInformation.setMetaKeywords("ferns, cascading meadows, cascading, meadows, old madras road, society, bangalore, 560036");
    $timeout(renderMap, 500);
    // $timeout(renderMap2, 600);
  });
