var angular = require("angular");
var ngAnimate = require("angular-animate");
var ngSanitize = require("angular-sanitize");
require("animate.css");
require("../scss/application.scss");



var app = angular.module("WikiViewer", [ngAnimate, ngSanitize])

.config(["$sceDelegateProvider", function($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
		"self",
		"https://en.wikipedia.org/w/**"		
	]);
}]);


require("./directives/search.js");
require("./services/wikidata.js");
require("./controllers/MainController.js");