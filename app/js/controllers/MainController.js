

function MainController($scope, $timeout, wikidata) {

	const vm = this;

	vm.enter = e => {
		if(e.which === 13) $timeout(() => wikidata.getWikis($scope.search, getData), 300);
	};


	const getData = (err, res) => {
		if(err) {
			vm.results = [{"title": "There was a problem connecting to Wikipedia", "extract": "" }];
		} else if(res.status === 200 && res.data.query) {
			vm.results = res.data.query.pages; 
		} else if(res.status === 200) {
			vm.results = [{"title": "No Results were Found for this Query", "extract": "" }];
		} 
	};

};

export default MainController;


