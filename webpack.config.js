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
    // exports from src/index.js is published on this global
    library: 'CustomExample',
    libraryTarget: 'umd'
  },
  externals: {
    // Use external React and Dialob
    'react': 'React',
    'react-dom': 'ReactDOM',
    'dialob-fill-ui': 'Dialob'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
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
};
