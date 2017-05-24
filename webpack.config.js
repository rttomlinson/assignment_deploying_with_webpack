const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader'
            }

        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([{ from: 'index.html', to: 'index.html'}])    
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        host: process.env.IP,
        //https: true,
        port: process.env.PORT,
        "public": "vikingcodeschool-rttomlinson.c9users.io" //no trailing slash
    }

};
