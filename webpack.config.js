'use strict';

var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        publicPath: '/dist/',
        filename: 'skyux.js'
    },

    module: {
        loaders: [
            {
                test : /\.jsx?$/,
                include: SRC_DIR,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}

module.exports = config;