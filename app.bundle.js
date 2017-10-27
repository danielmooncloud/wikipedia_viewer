webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var AppConfig = function AppConfig($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist(["self", "https://en.wikipedia.org/w/**"]);
};

exports.default = AppConfig;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


function MainController($scope, $timeout, wikidata) {

	var vm = this;

	vm.enter = function (e) {
		if (e.which === 13) $timeout(function () {
			return wikidata.getWikis($scope.search, getData);
		}, 300);
	};

	var getData = function getData(response) {
		if (response.status === 200) vm.results = response.data.query.pages;
	};
};

exports.default = MainController;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


var search = function search() {
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
};

exports.default = search;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


var wikidata = function wikidata($http, $log) {

	return {
		getWikis: function getWikis(query, callback) {
			$http.jsonp("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&titles=&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=" + query).then(callback).catch($log.debug);
		}
	};
};

exports.default = wikidata;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(2);

var _angular2 = _interopRequireDefault(_angular);

var _angularAnimate = __webpack_require__(0);

var _angularAnimate2 = _interopRequireDefault(_angularAnimate);

var _angularSanitize = __webpack_require__(1);

var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

var _AppConfig = __webpack_require__(5);

var _AppConfig2 = _interopRequireDefault(_AppConfig);

var _search = __webpack_require__(7);

var _search2 = _interopRequireDefault(_search);

var _wikidata = __webpack_require__(8);

var _wikidata2 = _interopRequireDefault(_wikidata);

var _MainController = __webpack_require__(6);

var _MainController2 = _interopRequireDefault(_MainController);

__webpack_require__(4);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _angular2.default.module("WikiViewer", [_angularAnimate2.default, _angularSanitize2.default]).config(["$sceDelegateProvider", _AppConfig2.default]).factory("wikidata", ["$http", "$log", _wikidata2.default]).directive("onKeypress", _search2.default).controller("MainController", ["$scope", "$timeout", "wikidata", _MainController2.default]);

/***/ })
],[9]);