var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /(\.scss|\.css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    }
}
