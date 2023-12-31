const { composePlugins, withNx } = require('@nx/webpack');
const {NodeFederationPlugin} = require("@module-federation/node");

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.plugins.push(
    new NodeFederationPlugin({
      name: 'remote',
      filename: 'remote.js',
      library: { type: "commonjs-module" },
      exposes: {
        './Test': './src/app/test.ts',
      },
    })
  );
  return config;
});
