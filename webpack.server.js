const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  resolve: {
    extensions:['.js', '.json', '.tsx', 'ts']
},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }, 
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.tsx$/,
        use: 'babel-loader'
      }
    ]
  }
};