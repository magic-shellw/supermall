const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': resolve('./src/assets'),
        'components': resolve('./src/components'),
        'common': resolve('./src/common'),
        'network': resolve('./src/network'),
        'views': resolve('./src/views')
      }
    }
  }
}