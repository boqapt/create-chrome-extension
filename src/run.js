process.env.NODE_ENV = 'development';

// npm
import color from 'colors/safe';

// own
import overrideHotUpdater from './webpack/override';
import { prepareManifest } from './shared';

/**
 * Override webpack package files
 * @return {Promise}
 */
function override () {
  return new Promise((resolve) => {
    resolve(overrideHotUpdater());
  });
}

function run (options) {
  override()
  .then(() => prepareManifest(options))
  // Development server ready
  .then(function (message) {
    console.log(color.green(message));
  })
  // Some error happened
  .catch(function (error) {
    console.log(color.red(error.stack || error));
  });
}

module.exports = run;
