/* globals __dirname */
'use strict';

var autoprefixer      = require('autoprefixer');
var Webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpack       = require('html-webpack-plugin');
var path              = require('path');

var npmPath     = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: [
        './demo/bootstrap.js',
        'webpack-hot-middleware/client?path=/__webpack_hmr?http://localhost:9001'
    ],
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                loaders: ['babel'],
                exclude: npmPath
            },
            {
                test: /^((?!\.module).)*\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap'
                ],
                exclude: npmPath
            },
            {
                test: /\.module\.css$/,
                loaders: ['style-loader', 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!'
                ],
                exclude: npmPath
            }
        ]
    },
    output: {
        filename   : 'demo.js',
        path       : path.resolve(__dirname, 'demo-build'),
        publicPath : '/'
    },
    resolve : {
        extensions : ['', '.js', '.jsx', '.css']
    },
    plugins: [
        new HtmlWebpack({
            template : './demo/index.html'
        }),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.optimize.OccurenceOrderPlugin(),
        new Webpack.optimize.DedupePlugin()
    ],
    devtool : 'eval-source-map',
    postcss : function() {
        return [autoprefixer];
    }
};
