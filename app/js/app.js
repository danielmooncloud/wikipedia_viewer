var angular = require("angular");
var ngAnimate = require("angular-animate");
var ngSanitize = require("angular-sanitize");
require("animate.css");
require("../scss/application.scss");



var app = angular.module("WikiViewer", [ngAnimate, ngSanitize]);


require("./directives/search.js");
require("./services/wikidata.js");
require("./controllers/MainController.js");