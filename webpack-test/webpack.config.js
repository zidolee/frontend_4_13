const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
      reules:[
          {
              test:/\.m?js$/,
              exclude:/(node_modules|dist)/,
              use:{
                  loader : 'babel-loader',
                  options: {
                      presets:['@bable/preset-env']
                  }
              }
          },
          
      ]
  }
};