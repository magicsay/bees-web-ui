const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 将组件中 css 单独打包成并输出到 lib 目录中

const prodConfig = {
  mode: 'production', // 生产模式
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../lib/'),
    filename: 'index.js',
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default', // 兼容 ES6 模块系统、CommonJS 和 AMD 模块规范
  },
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader?modules',
        'sass-loader',
      ],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.min.css', // 提取后生成的 css 文件名
    }),
  ],
  // 外部依赖, 避免把 react 和 react-dom 打包进去
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
}

module.exports = merge(prodConfig, baseConfig) // 合并 Webpack 配置
