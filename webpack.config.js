const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

const SitemapWebpackPlugin = require('sitemap-webpack-plugin').default;
const CopyPlugin = require('copy-webpack-plugin');
const { env } = require('process');

const paths = ['/', '/discover'];

module.exports = () => {
  return {
    entry: { babel: '@babel/polyfill', app: './src/index' },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader',
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true, // true outputs JSX tags
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ['file-loader?name=[name].[ext]'],
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
      ],
    },
    resolve: {
      modules: ['node_modules', 'src'],
      mainFiles: ['index'],
      extensions: ['.js', '.jsx', '.tsx', '.ts', '.json', '.scss', '.css'],
      symlinks: false,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
      new ManifestPlugin({
        filename: 'asset-manifest.json',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'src/Assets/images', to: 'Assets/images' },
          { from: 'src/robots.txt', to: 'robots.txt' },
        ],
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.EnvironmentPlugin({
        TRACKING_ID: env.TRACKING_ID ? env.TRACKING_ID : '',
        GTM_ID: env.GTM ? env.GTM : '',
        NODE_ENV: env.NODE_ENV ? env.NODE_ENV : 'dev',
        API_URL: env.API_URL ? env.API_URL : 'http://localhost:8080/v0/',
      }),
      new SitemapWebpackPlugin('https://www.thecreatix.io', paths),
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
      historyApiFallback: true,
      port: env.PORT ? env.PORT : '3030',
    },
  };
};
