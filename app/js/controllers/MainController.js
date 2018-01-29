

function MainController($scope, $timeout, wikidata) {

	const vm = this;

	vm.enter = (e) => {
		if(e.which === 13) {
			$timeout(sendQuery, 300);
		};
	};

	const sendQuery = async () => {
		try {
			const results = await wikidata.getWikis($scope.search);
			vm.results = results.data.query ? results.data.query.pages : [{"title": "No Results were Found for this Query", "extract": "" }];
		} catch(e) {
			vm.results = [{"title": "There was a problem connecting to Wikipedia", "extract": "" }];
		}
		$scope.$apply();
	};
};

export default MainController;


