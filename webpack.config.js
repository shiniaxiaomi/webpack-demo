const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// "mode": 'development',
  // entry: './demo02/src/index.js',
  entry:{
  	app:'./demo02/src/index.js',
  	print:'./demo02/src/print.js'
  },
  output: {
    filename: '[name].bundle.[chunkhash].js',
    path: path.resolve(__dirname, './demo02/dist'),
    // publicPath: path.resolve(__dirname, './demo02/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management111'
    })
  ]
};