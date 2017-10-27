

const wikidata = ($http, $log) => {
	
	return {
		getWikis(query, callback) {
			$http.jsonp("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&titles=&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=" + query)
				.then(callback)
				.catch($log.debug);
		}	
	};	
};

export default wikidata;


