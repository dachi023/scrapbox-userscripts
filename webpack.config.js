const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: {
          loader: 'raw-loader',
          options: { esModule: false },
        },
      },
    ],
  },
}
