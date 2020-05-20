const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const devConfig = {
  mode: 'development', // 开发模式
  entry: path.join(__dirname, '../example/app.js'),
  output: {
    path: path.join(__dirname, '../example/'),
    filename: 'bundle.js', // 启动开发服务不会在 src 目录下生成 bundle.js 文件, 只存在内存中。
  },
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      exclude: /\.min\.css$/,
      loader: ['style-loader', 'css-loader?modules', 'sass-loader'],
    }, {
      test: /\.min\.(sa|sc|c)ss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  devServer: {
    contentBase: path.join(__dirname, '../example/'),
    compress: true,
    host: 'localhost', // 如果 localhost 启动报错, 替换为 127.0.0.1 启动
    port: 3000, // 端口号
    open: true, // 自动打开浏览器
  },
}

module.exports = merge(devConfig, baseConfig) // 合并 Webpack 配置
