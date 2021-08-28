const path = require('path')

// commonJS = es5 (module.exports)
// => node 에서 기본적으로 채택한 모듈 방식

// esm (Ecma script module) = es6

// 브라우저에서 동작 X => Node 환경에서 돌아가는 코드
module.exports = {
  entry: path.resolve(__dirname, './src'), // 앞 뒤 경로 합쳐주는 함수, webpack config 가 있는 폴더의 경로
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    // 어떤 파일을 가져와서 어떻게 변화시킬지
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // import 시 확장자 생략 가능
  },
  plugins: [],
}
