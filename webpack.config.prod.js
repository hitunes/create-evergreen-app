const commonConfig = require('./webpack.config.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  
  mode: 'production',

  performance: {
    hints: 'error'
  },

  plugins: [
    new FaviconsWebpackPlugin({
      logo: './favicon.png',
      emitStats: true,
      prefix: '/',
      statsFilename: 'icons/stats.json',
      inject: true,
      title: 'Create Evergreen App',
      background: '#466628',
      icons: {
        android: true,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: false,
        windows: false
      }
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ]
  
});