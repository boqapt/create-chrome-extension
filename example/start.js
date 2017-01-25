const path = require('path');
const webpack = require('webpack');
const WebpackStats = require('webpack/lib/Stats');
const ChromeExtensionUtils = require('../');

const WebpackConfig = require('./webpack.config');

const compiler = webpack(WebpackConfig);

const manifest = new ChromeExtensionUtils.Manifest({
  manifest: path.resolve(__dirname, './manifest.json'),
  output: path.resolve(__dirname, './build')
});

function handler (cb) {
  return (err, stats) => {
    if (err) {
      return console.error(err);
    }

    // @see https://github.com/webpack/webpack/blob/324d309107f00cfc38ec727521563d309339b2ec/lib/Stats.js#L790
    // Accepted values: none, errors-only, minimal, normal, verbose
    const options = WebpackStats.presetToOptions('normal');
    options.timings = true;

    const output = stats.toString(options);

    process.stdout.write('\n');
    process.stdout.write(output);
    process.stdout.write('\n\n');

    if (cb && typeof cb === 'function') {
      cb();
    }
  };
}

if (process.env.NODE_ENV === 'production') {
  const h = handler(() => {
    ChromeExtensionUtils.pack(manifest);
  });

  compiler.run(h);
} else {
  compiler.watch({}, handler());
}
