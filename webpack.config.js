const path = require('path');

module.exports = {
  entry: './src/scripts/script.js', // The entry point of your application
  resolve: {
    alias: {
      three: false // Exclude resolution of 'three' from 'node_modules'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // The output directory
    filename: 'bundle.js', // The name of the bundled output file
  },
};
