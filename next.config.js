const withImages = require('next-images');

const publicRuntimeConfig = {
  API_END_POINT: process.env.API_END_POINT,
  NODE_ENV: process.env.NODE_ENV,
};

module.exports = withImages({
  publicRuntimeConfig,
});
