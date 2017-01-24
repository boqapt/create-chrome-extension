process.env.NODE_ENV = 'production';

// Native
import path from 'path';
import { exec } from 'child_process';

// npm
import fs from 'fs-extra';
import color from 'colors/safe';
import chromeBinaryPath from 'chrome-location';

// our
import * as log from './utils/log';
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

/**
 * Generate extension file inside release path
 *
 * @param  {String} path Release directory path
 * @return {Promise}
 */
function makeExtension (options) {
  return new Promise((resolve, reject) => {
    console.log(color.yellow(`Building extension into '${options.release}'`));

    setTimeout(() => {
      const commandParts = [`'${chromeBinaryPath}'`, `--pack-extension=${options.output}`];

      if (options.key) {
        commandParts.push(`--pack-extension-key=${options.key}`);
      }

      const command = `\$(${commandParts.join(' ')})`;

      exec(command, (error, stdout, stderr) => {
        if (stdout) {
          console.log(color.yellow('stdout: ' + stdout));
        }

        if (stderr) {
          return reject('stderr: ' + stderr);
        }

        if (error !== null) {
          return reject('exec error: ' + stderr);
        }

        resolve(`Extension builded in '${options.release}'`);
      });
      // Long enought to prevent some unexpected errors
    }, 1000);
  });
}

function build (options) {
  options = {
    ...options,
    key: options.key && path.resolve(options.key),
    release: options.output,
    output: path.join(options.output, 'source')
  };

  // TODO: check if release directory contain *.key file
  // If yes, then ask user if
  // 1) want to use it as key for build
  // 2) really really really want to override it
  prepareReleaseDir(options)
  .then(() => prepareManifest(options))
  .then(() => makeExtension(options))
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
