

const wikidata = ($http, $log) => {
	
	const wikiAPI = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&titles=&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=";

	return {
		getWikis(query) {
			return $http.jsonp(wikiAPI + query);
		}	
	};	
};

export default wikidata;


