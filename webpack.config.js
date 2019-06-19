const HtmlWebPackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')
var path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [{
                  loader: "style-loader" // creates style nodes from JS strings
                }, {
                  loader: "css-loader" // translates CSS into CommonJS
                }, {
                  loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader"
                    }
                ]
            },
            {
                test:/\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    resolve:{
        extensions: ['*','.js','.jsx']
    },
    output:{
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebPackPlugin({    template: "./src/index.html",    filename: "./index.html"  }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot:true
    }
}