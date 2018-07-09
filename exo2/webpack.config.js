const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = require('./rcms-js.config.js');

const production = process.env.WEBPACK_MODE === 'production';
const serve = process.env.WEBPACK_SERVE;

const eslintNoFail = !production && process.env.RCMS_ESLINT_NO_FAIL_DEV;

module.exports = {
  mode: production ? 'production' : 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    library: config.name,
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, config.path),
    publicPath:
      (serve ? `http://${config.devHost}:${config.devPort}` : '') +
      config.publicPath,
    filename: serve ? '[name].[hash].js' : '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        options: {
          failOnError: !eslintNoFail,
          emitWarning: eslintNoFail,
        },
        exclude: /node_modules/,
      },
      {
        test: /.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[hash].[ext]',
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin([config.path]),
    new ManifestPlugin({ publicPath: '' }),
    new MiniCssExtractPlugin({
      filename: serve ? '[name].[hash].css' : '[name].[contenthash].css',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src/') },
  },
};
