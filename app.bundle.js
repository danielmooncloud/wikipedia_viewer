webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

var mainController = angular.module("WikiViewer").controller("MainController", ["$scope", "$timeout", "wikidata", function ($scope, $timeout, wikidata) {

	var vm = this;

	vm.enter = function (e) {
		if (e.which === 13) {
			vm.results = [];
			$timeout(function () {
				wikidata.getWikis($scope.search, getData);
			}, 300);
		}
	};

	var getData = function getData(response) {
		if (response.status = 200) {
			vm.results = response.data.query.pages;
		}
	};
}]);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module("WikiViewer").directive("onKeypress", function () {
	return {
		scope: {
			handler: "&onKeypress"
		},
		link: function link(scope, element) {
			element.bind("keypress", function (e) {
				scope.handler({ $event: e });
			});
		}
	};
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module("WikiViewer").factory("wikidata", ["$http", "$log", function ($http, $log) {

	var logError = function logError(error) {
		$log.debug(error);
	};

	return {

		getWikis: function getWikis(string, callback) {
			$http.jsonp("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&titles=&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=" + string).then(callback).catch(logError);
		}
	};
}]);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);
var ngAnimate = __webpack_require__(1);
var ngSanitize = __webpack_require__(2);
__webpack_require__(7);
__webpack_require__(6);

var app = angular.module("WikiViewer", [ngAnimate, ngSanitize]).config(["$sceDelegateProvider", function ($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist(["self", "https://en.wikipedia.org/w/**"]);
}]);

__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(3);

/***/ })
],[11]);