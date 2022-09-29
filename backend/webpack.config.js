const path = require('path');

module.exports = {
  entry: './src/Server.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};