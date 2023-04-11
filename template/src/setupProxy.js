const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = async function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_REMOTE_API || 'http://localhost:8000',
      changeOrigin: true,
    }),
  );
};
