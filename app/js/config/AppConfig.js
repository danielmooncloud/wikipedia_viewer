const AppConfig = ($sceDelegateProvider) => {
	$sceDelegateProvider.resourceUrlWhitelist(["self", "https://en.wikipedia.org/w/**"]);
};



export default AppConfig;