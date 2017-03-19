webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);


__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("WikiViewer").controller("MainController", ["$scope", "$timeout", "wikidata", function($scope, $timeout, wikidata) {

	$scope.enter = function(e) { 
		if(e.which === 13) {
			$scope.results = [];
			$timeout(function() {
				wikidata.getWikis($scope.search, getData);
			}, 300);  
		}
	};

	const getData = function(response) {
		if(response.status = 200) {
			$scope.results = response.data.query.pages; 
		} 
	};
}]);




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);


__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("WikiViewer").directive("onKeypress", function() {
	return {
		scope: {
			handler: "&onKeypress"
		},
		link: function(scope, element) {
			element.bind("keypress", function(e) {
				scope.handler({$event: e});
			});
		}
	};  
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);


__WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("WikiViewer").service("wikidata", ["$http", "$log", function($http, $log) {
	this.getWikis = function(string, callback) {
		$http.jsonp("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&titles=&generator=search&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrsearch=" + string + "&callback=JSON_CALLBACK")
			.then(callback)
			.catch(logError);
	};

	const logError = function(error) {
		$log(error.data);
	};
}]);




/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_animate__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_animate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_animate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_animate_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_animate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_animate_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_application_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_application_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_application_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_MainController_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_search_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_wikidata_js__ = __webpack_require__(4);







var app = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("WikiViewer", [__WEBPACK_IMPORTED_MODULE_1_angular_animate___default.a]);





/***/ })
],[9]);