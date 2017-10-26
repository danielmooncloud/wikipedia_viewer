

function MainController($scope, $timeout, wikidata) {

	const vm = this;

	vm.enter = function(e) { 
		if(e.which === 13) {
			vm.results = [];
			$timeout(function() {
				wikidata.getWikis($scope.search, getData);
			}, 300);  
		}
	};

	const getData = function(response) {
		if(response.status = 200) {
			vm.results = response.data.query.pages; 
		} 
	};
};

export default MainController;


