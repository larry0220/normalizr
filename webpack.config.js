module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};
