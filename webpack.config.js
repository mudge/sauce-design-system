const sass = require('sass')

const sassWebpackConfig = {
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        implementation: sass,
      },
    },
  ],
}

module.exports = sassWebpackConfig
