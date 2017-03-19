"use strict";

angular.module("WikiViewer").service("wikidata", ["$http", "$log", function($http, $log) {
	this.getWikis = function(string, callback) {
		$http.jsonp("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&titles=&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=" + string + "&callback=JSON_CALLBACK")
			.then(callback)
			.catch(logError);
	};

	const logError = function(error) {
		$log(error.data);
	};
}]);


