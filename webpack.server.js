const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, 'server/index.js'),

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, './server-build'),
    filename: 'index.js'
  },
  resolve: {
    extensions:['.js', 'jsx', '.json', '.tsx', 'ts']
},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }, 
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.tsx$/,
        use: ['babel-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: { 
            loader:'babel-loader',
            options:  {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
      }
    ]
  }
};