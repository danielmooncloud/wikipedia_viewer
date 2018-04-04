import angular from "angular";
import ngAnimate from "angular-animate";
import ngSanitize from "angular-sanitize";

import AppConfig from "./config/AppConfig.js";
import keypress from "./directives/keypress.js";
import wikidata from "./services/wikidata.js";
import MainController from "./controllers/MainController.js";

import "animate.css";
import "../scss/application.scss";


const app = angular.module("WikiViewer", [ngAnimate, ngSanitize])
	.config(["$sceDelegateProvider", AppConfig])
	.factory("wikidata", ["$http", "$log", wikidata])
	.directive("onKeypress", keypress)
	.controller("MainController", ["$scope", "$timeout", "wikidata", MainController]);







