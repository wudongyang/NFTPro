'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/elementFang/',
    proxyTable: {
      '/element_fang': {
        // target: 'http://10.123.100.105:8080/element_fang',
        changeOrigin: true,
        pathRewrite: {
          '^/element_fang': ''
        }
      },
    },
    // host: '0.0.0.0',
    host: 'localhost',
    port: 8080,
    historyApiFallback: {
      index: '/index.html'
    },
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: false
  },

  build: {
    index: path.resolve(__dirname, '../elementFang/index.html'),
    assetsRoot: path.resolve(__dirname, '../elementFang'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/elementFang/',
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
