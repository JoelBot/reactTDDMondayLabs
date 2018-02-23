const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	devtool: 'source-map',
	entry: './src/scripts/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './scripts/app.js'
	},
	module : {
		loaders: [ {
			test   : /.js$/,
			loader : 'babel-loader',
			query: {
				presets: ['es2015','react']
			}
		},
		{
			test: /\.json$/,
			loader: 'json-loader'
		}
		]

	},
	plugins: [
		new CleanWebpackPlugin('dist'),
		new HTMLWebpackPlugin({
			filename: 'index.html',
			title: 'Welcome to my poll!',
			template: 'src/index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: 'src/data',
				to: 'data/'
			}
		])
	]
};
