const awsServerlessExpress = require('aws-serverless-express');
const { createApp } = require('./server');
const appPromise = createApp();

exports.nuxt = async (event, context) => {
  const app = await appPromise;

  return awsServerlessExpress.proxy(app.server, event, context, 'PROMISE').promise;
};
