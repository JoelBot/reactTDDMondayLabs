const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackplugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: './src/scripts/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './dist/scripts/app.js'
	},
	module : {
		loaders: [ {
			test : /.js$/,
			loader : 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins: [
		new CleanWebpackPlugin('dist'),
		new HTMLWebpackplugin({
			filename: 'index.html',
			title: 'Welcome to my page!',
			mainDiv: 'welcome-message',
			template: 'src/index.html'
		})
	]
};