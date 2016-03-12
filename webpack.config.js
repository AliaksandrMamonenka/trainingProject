'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: __dirname + '/frontend',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:3030/', // ?
        'webpack/hot/only-dev-server', // ?
        './index.js'
    ],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'script.js',
        library: 'myapp'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'frontend'],
        extensions: ['', '.js', '.css']
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel?optional[]=runtime' // 'babel-loader' is also a legal name to reference
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test:   /\.css$/,
                loader: "style!css!postcss"
            }
        ]
    },
    postcss: function () {
        return [
            autoprefixer({ browsers: ['last 2 versions'] }),
            precss
        ];
    },
    devServer: {
        host: 'localhost',
        port: 3030,
        proxy: {
            '*': 'http://localhost:3000'
        }
    }
};