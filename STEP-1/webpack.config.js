module.exports = {
  devtool: 'eval-source-map',
  
  entry:  __dirname + "/app/main.js",
  
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  
  devServer: {
    contentBase: './public',
    port: 4000,
    colors: true,
    inline: true,
    historyApiFallback: true
  }
}
