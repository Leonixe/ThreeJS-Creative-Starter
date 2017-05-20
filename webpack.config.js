const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, './src'),
        entry: {
          app: ['./js/styles.js', './js/index.js'],
        },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        inline: true,
    },
    module: {
        rules: [
          {
              test: /\.js$/,
              exclude: [/node_modules/],
              use: [{
                  loader: 'babel-loader',
                  options: { presets: ['es2015'] }
              }],
          },
          {
              test: /\.scss$/,
              use: ExtractTextPlugin
                .extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        { loader: 'css-loader', query: { modules: false, sourceMaps: true } },
                        { loader: 'sass-loader'},
                    ]
                })
          },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'stylesheet/main.css',
            allChunks: true,
        }),
    ],
}
