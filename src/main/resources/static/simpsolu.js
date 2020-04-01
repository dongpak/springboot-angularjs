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
        .when('/VaadinComparison', {
        	template: '<simpsolu-vaadin-comparison/>'
        })
        .otherwise('/');
    }
]);

angular.module('simpsoluApp').component('simpsoluNavigation', {
	templateUrl: "/Navigation.html",
	controller: function() {
		this.selections = [
			{
				name: "Home",
				route: "#!/Home",
			},
			{
				name: "Art Gallery",
				route: "#!/ArtGallery",
				image: "Castell.png"
			},
			{
				name: "Cloud Computing",
				route: "#!/CloudComputing",
				image: "CloudMonkey.gif"
			},
			{
				name: "What is Java?",
				route: "#!/WhatIsJava",
				image: "icons8-Java-48.png"
			},
			{
				name: "Vaadin Comparison",
				route: "#!/VaadinComparison"				
			},
			{
				name: "Free Chat",
				route: "/freechat/"
			}
		]
	}
});


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
		this.images = [
			{
				title: "Castell",
				author: "Hannah",
				filename: "Castell.png"
			},
			{
				title: "Cats Everywhere",
				author: "Hannah",
				filename: "catststtststtss.png"
			},
			{
				title: "Errfff",
				author: "Hannah",
				filename: "errfff.png"
			},
			{
				title: "Eurika",
				author: "Hannah",
				filename: "Eurika.jpg"
			},
			{
				title: "Fox and Girl",
				author: "Hannah",
				filename: "foxAndGirl.jpg"
			},
			{
				title: "Heart of Gold",
				author: "Hannah",
				filename: "heartOfGold.jpg"
			},
			{
				title: "Three Again",
				author: "Hannah",
				filename: "threeAgain.png"
			},
			{
				title: "Winter Partrol",
				author: "Hannah",
				filename: "winterPatrol.jpg"
			}
		]
	}
});

angular.module('simpsoluApp').component('simpsoluVaadinComparison', {
	templateUrl: "/VaadinComparison.html",
	controller: function() {
		this.selection = 1;		// main page
	}
});

