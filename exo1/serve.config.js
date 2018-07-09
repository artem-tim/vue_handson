const config = require('./rcms-js.config');

module.exports = {
  host: config.devHost,
  port: config.devPort,
  dev: {
    publicPath: config.publicPath,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
