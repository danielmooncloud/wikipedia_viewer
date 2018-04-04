webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_animate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_sanitize__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_sanitize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_sanitize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_AppConfig_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_keypress_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_wikidata_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_MainController_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_animate_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_animate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_animate_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scss_application_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scss_application_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__scss_application_scss__);












const app = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("WikiViewer", [__WEBPACK_IMPORTED_MODULE_1_angular_animate___default.a, __WEBPACK_IMPORTED_MODULE_2_angular_sanitize___default.a]).config(["$sceDelegateProvider", __WEBPACK_IMPORTED_MODULE_3__config_AppConfig_js__["a" /* default */]]).factory("wikidata", ["$http", "$log", __WEBPACK_IMPORTED_MODULE_5__services_wikidata_js__["a" /* default */]]).directive("onKeypress", __WEBPACK_IMPORTED_MODULE_4__directives_keypress_js__["a" /* default */]).controller("MainController", ["$scope", "$timeout", "wikidata", __WEBPACK_IMPORTED_MODULE_6__controllers_MainController_js__["a" /* default */]]);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const AppConfig = $sceDelegateProvider => {
	$sceDelegateProvider.resourceUrlWhitelist(["self", "https://en.wikipedia.org/w/**"]);
};

/* harmony default export */ __webpack_exports__["a"] = (AppConfig);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const keypress = () => {
	return {
		scope: {
			handler: "&onKeypress"
		},
		link(scope, element) {
			element.bind("keypress", e => {
				scope.handler({ $event: e });
			});
		}
	};
};

/* harmony default export */ __webpack_exports__["a"] = (keypress);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const wikidata = ($http, $log) => {

	const wikiAPI = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&titles=&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=";

	return {
		getWikis(query) {
			return $http.jsonp(wikiAPI + query);
		}
	};
};

/* harmony default export */ __webpack_exports__["a"] = (wikidata);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function MainController($scope, $timeout, wikidata) {

	const vm = this;

	vm.enter = e => {
		if (e.which === 13) {
			$timeout(sendQuery, 300);
		};
	};

	const sendQuery = (() => {
		var _ref = _asyncToGenerator(function* () {
			try {
				const results = yield wikidata.getWikis($scope.search);
				vm.results = results.data.query ? results.data.query.pages : [{ "title": "No Results were Found for this Query", "extract": "" }];
			} catch (e) {
				vm.results = [{ "title": "There was a problem connecting to Wikipedia", "extract": "" }];
			}
			$scope.$apply();
		});

		return function sendQuery() {
			return _ref.apply(this, arguments);
		};
	})();
};

/* harmony default export */ __webpack_exports__["a"] = (MainController);

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