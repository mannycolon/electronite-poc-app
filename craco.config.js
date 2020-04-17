const { ESLINT_MODES } = require('@craco/craco');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: {
    configure: {
      target: 'electron-renderer',
       // eval-source-map allows to set inline breakpoints, and step debug at statement-level.
       devtool: 'eval-source-map',
       node: {
       // TRICKY: don't let webpack hard-code these
         __dirname: false,
         __filename: false,
       },
       plugins: [
         new CopyWebpackPlugin([
          { from: './package.json', to: 'package.json' },
         ]),
       ],
    }
  },
  eslint: { mode: ESLINT_MODES.file },
};
