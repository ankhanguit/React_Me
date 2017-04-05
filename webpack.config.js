module.exports = {
	context: __dirname  + "/src",
  entry: {
    jsx: "./index.jsx",
    css: "./main.css",
    html: "./index.html",
    context: __dirname  + "/src",

  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/static"
  },

  devServer: {
    contentBase: 'src',
    historyApiFallback: true
  },

  module: {
    preLoaders: [
        //Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"}
    ],
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel"]}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
