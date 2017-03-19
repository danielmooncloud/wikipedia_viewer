var angular = require("angular");

angular.module("WikiViewer").factory("wikidata", ["$http", "$log", function($http, $log) {
	
	
	const logError = function(error) {
		$log.debug(error);
	};


	return {
		
		getWikis: function(string, callback) {
			$http.jsonp("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&titles=&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=" + string)
				.then(callback)
				.catch(logError);
		}	
	};	
}]);


