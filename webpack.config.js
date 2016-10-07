'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'custom-example': path.join(__dirname, './src/index')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: `./`,
    library: 'CustomExample',
    libraryTarget: 'var'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'FlexiForm': 'imports?this=>global!exports?global.FlexiForm'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'flexiform-fill-ui': 'FlexiForm'
  }
};
