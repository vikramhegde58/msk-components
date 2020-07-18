const path = require('path');
const WrapperPlugin = require('wrapper-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'projects.js',
  },
  mode: "production",
  optimization: {
    minimize: false
  },
  target: "web",
  plugins: [
    new WrapperPlugin({
      test: /\.js$/, // only wrap output of bundle files with '.js' extension 
      header: `export default \`(`,
      footer: `)\``
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      "@global-config": path.resolve(__dirname, '../../../config'),
      '@msk-themes': 'msk-themes',
    },
  },
};
