const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");

const ManifestPlugin = require("webpack-manifest-plugin");

const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {
  return {
    entry: ["@babel/polyfill", "./src/index.js"],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "react-svg-loader",
              options: {
                jsx: true // true outputs JSX tags
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ["file-loader?name=[name].[ext]"]
        },
        {
          test: /\.json$/,
          loader: "json-loader"
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "bundle.js"
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new ManifestPlugin({
        filename: "asset-manifest.json"
      }),
      new CopyPlugin([{ from: "src/Assets/images", to: "Assets/images" }]),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        "process.env.TRACKING_ID": JSON.stringify(process.env.TRACKING_ID)
      })
    ],
    devServer: {
      contentBase: "./dist",
      hot: true,
      historyApiFallback: true
    }
  };
};
