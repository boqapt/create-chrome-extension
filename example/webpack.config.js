const path = require('path');
const webpack = require('webpack');

const ChromeExtensionUtils = require('../');

// Contruct the output directory and process
// the Manifest file and write it
const manifest = new ChromeExtensionUtils.Manifest({
  manifest: path.resolve(__dirname, './manifest.json'),
  output: path.resolve(__dirname, './build')
});

manifest.run();

const entries = manifest.scripts
  .reduce((entries, path) => {
    const name = path.split('.').slice(0, -1).join('.');

    entries[name] = path;

    return entries;
  }, {});

module.exports = {
  cache: !true,
  devtool: '#source-map',

  entry: entries,
  output: {
    path: manifest.buildPath,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },

      {
        test: /\.css$/,
        exclude: [ /node_modules/ ],
        use: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
        ]
      },

      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)/,
        loader: 'url-loader?limit=1000000&name=[name]-[hash].[ext]'
      }
    ]
  },

  resolve: {
    modules: [
      path.join(__dirname, './'),
      path.join(__dirname, './node_modules')
    ],
    extensions: ['.json', '.js', '.jsx'],
    unsafeCache: true
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      options: {
        context: path.join(__dirname, './')
      }
    }),

    new webpack.DefinePlugin({
      'global.GENTLY': false,
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.IS_BROWSER': JSON.stringify(process.env.IS_BROWSER)
    })
  ]
};
