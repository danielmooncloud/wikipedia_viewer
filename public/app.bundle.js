webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularAnimate = __webpack_require__(1);

var _angularAnimate2 = _interopRequireDefault(_angularAnimate);

var _angularSanitize = __webpack_require__(2);

var _angularSanitize2 = _interopRequireDefault(_angularSanitize);

var _AppConfig = __webpack_require__(7);

var _AppConfig2 = _interopRequireDefault(_AppConfig);

var _search = __webpack_require__(8);

var _search2 = _interopRequireDefault(_search);

var _wikidata = __webpack_require__(9);

var _wikidata2 = _interopRequireDefault(_wikidata);

var _MainController = __webpack_require__(10);

var _MainController2 = _interopRequireDefault(_MainController);

__webpack_require__(11);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _angular2.default.module("WikiViewer", [_angularAnimate2.default, _angularSanitize2.default]).config(["$sceDelegateProvider", _AppConfig2.default]).factory("wikidata", ["$http", "$log", _wikidata2.default]).directive("onKeypress", _search2.default).controller("MainController", ["$scope", "$timeout", "wikidata", _MainController2.default]);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


var wikidata = function wikidata($http, $log) {

	return {
		getWikis: function getWikis(query) {
			return $http.jsonp("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&titles=&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=" + query);
		}
	};
};

exports.default = wikidata;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function MainController($scope, $timeout, wikidata) {
	var _this = this;

	var vm = this;

	vm.enter = function (e) {
		if (e.which === 13) {
			$timeout(sendQuery, 300);
		};
	};

	var sendQuery = function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			var results;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;
							_context.next = 3;
							return wikidata.getWikis($scope.search);

						case 3:
							results = _context.sent;

							getData(results);
							_context.next = 10;
							break;

						case 7:
							_context.prev = 7;
							_context.t0 = _context["catch"](0);

							vm.results = [{ "title": "There was a problem connecting to Wikipedia", "extract": "" }];

						case 10:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, _this, [[0, 7]]);
		}));

		return function sendQuery() {
			return _ref.apply(this, arguments);
		};
	}();

	var getData = function getData(res) {
		if (res.data.query) {
			vm.results = res.data.query.pages;
		} else {
			vm.results = [{ "title": "No Results were Found for this Query", "extract": "" }];
		}
	};
};

exports.default = MainController;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[3]);