

function MainController($scope, $timeout, wikidata) {

	const vm = this;

	vm.enter = e => {
		if(e.which === 13) $timeout(() => wikidata.getWikis($scope.search, getData), 300);
	};


	const getData = response => {
		if(response.status === 200) vm.results = response.data.query.pages; 
	};

};

export default MainController;


