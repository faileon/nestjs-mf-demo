const { composePlugins, withNx } = require('@nx/webpack');
const {NodeFederationPlugin} = require("@module-federation/node");



// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.plugins.push(
    new NodeFederationPlugin({
      name: 'host',
      library: { type: "commonjs-module" },
      remotes: {
        remote: 'remote@http://localhost:3001/remote.js'
      },
    })
    );
  return config;
});
