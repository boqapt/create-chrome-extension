process.env.NODE_ENV = 'production';

// npm
import fs from 'fs-extra';
import color from 'colors/safe';

// our
import { prepareManifest } from './shared';

/**
 * Clear reelase directory
 *
 * @param  {String} path Release directory path
 * @return {Promise}
 */
function prepareReleaseDir (options) {
  return new Promise((resolve, reject) => {
    fs.remove(options.release, () => {
      fs.mkdirs(options.release, () => {
        resolve();
      });
    });
  });
}

function build (options) {
  prepareReleaseDir(options)
  .then(() => prepareManifest(options))
  // Extension done
  .then(function (message) {
    console.log(color.green(message));
  })
  // Some error happened
  .catch(function (error) {
    console.log(color.red(error.stack || error));
  });
}

module.exports = build;
