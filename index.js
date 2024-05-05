'use strict';

const { ProvidePlugin } = require('webpack');

module.exports = {
  name: require('./package').name,
  options: {
    autoImport: {
      webpack: {
        node: {
          global: true,
        },
        plugins: [
          new ProvidePlugin({
            process: 'process/browser',
          }),
        ],
        resolve: {
          fallback: {
            stream: require.resolve('stream-browserify'),
            util: require.resolve('util/'),
          },
        },
      },
    },
  },
};
