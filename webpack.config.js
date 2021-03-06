const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
  filename: 'bundle.js',
  path: DIST_DIR
},
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        include : SRC_DIR,
        loader : 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
             importLoaders: 1, 
             modules: true,
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ]
  }
};
