/**
 * 
 */
'use strict';

angular.module('simpsoluApp').config(['$locationProvider', '$routeProvider', 
	function config($locationProvider, $routeProvider) {
		// $locationProvider.html5Mode(true);
		//$locationProvider.hashPrefix('!');
      
		$routeProvider.when('/', {
			template: '<simpsolu-main-article/>'
        })
        .when('/CloudComputing', {
        	template: '<simpsolu-cloud-computing/>'
        })
        .when('/WhatIsJava', {
        	template: '<simpsolu-what-is-java/>'
        })        
        .when('/ArtGallery', {
        	template: '<simpsolu-art-gallery/>'
        })
        .otherwise('/');
    }
]);

angular.module('simpsoluApp').component('simpsoluMainArticle', {
	templateUrl: "/SimpSolu.html",			
	controller: function() {
		this.selection = 1;		// main page		
	}
});

angular.module('simpsoluApp').component('simpsoluCloudComputing', {
	templateUrl: "/CloudComputing.html",
	controller: function() {
		this.selection = 1;		// main page		
	}
});

angular.module('simpsoluApp').component('simpsoluWhatIsJava', {
	templateUrl: "/WhatIsJava.html",
	controller: function() {
		this.selection = 1;		// main page
	}
});

angular.module('simpsoluApp').component('simpsoluArtGallery', {
	templateUrl: "/ArtGallery.html",
	controller: function() {
		this.selection = 1;		// main page
	}
});

