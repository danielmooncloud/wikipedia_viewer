 var webpack = require('webpack');
 var path = require('path');
 var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	context: __dirname + "/app/js",
	entry: {
		app: "./app.js",
		vendor: ["angular", "angular-animate", "angular-sanitize"]
	},
	output: {
		path: __dirname + "/public",
		filename: "app.bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: "/node_modules/",
				loaders: ["babel-loader", "eslint-loader"]
			},
			{
				test: /\.(scss|css)$/,
				exclude: "/node_modules/",
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader", 
					use: "css-loader!sass-loader"
				})

			}
		]
	},
	plugins: [ 
				new webpack.optimize.CommonsChunkPlugin({"name": "vendor", "filename": "app.vendor.js"}),
				new ExtractTextPlugin("[name].css")
			]
}