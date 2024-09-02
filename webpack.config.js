// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export 
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry:'./js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loadar'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    // index.html 에 있는 내용 dist로 보내는 plugin
    new HtmlPlugin({
      template: './index.html'
    }),
    // 'static' 폴더 내용 copy 해서 dist 에 올라가게 하는 plugin
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
      
    })
  ]


}
