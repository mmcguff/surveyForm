const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  module:{
    rules:[
      {test:/\.scss$/, use: ['style-loader','css-loader', 'sass-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Template | freecodecamp.org',
      minify:{
          collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html'
    })
  ]
}