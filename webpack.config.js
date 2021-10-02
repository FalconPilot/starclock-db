const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.md$/,
      use: [{
        loader: 'raw-loader'
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({ configFile: './tsconfig.json' })
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    compress: true,
    port: 1337,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'static')
    }
  },
  performance: {
    hints: false
  }
}
