const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
		],
	}
}
