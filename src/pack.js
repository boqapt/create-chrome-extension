// Native
import path from 'path';
import { exec } from 'child_process';

// npm
import chromeBinaryPath from 'chrome-location';
import fs from 'fs-extra';

import * as log from './utils/log';

/**
 * Generate extension file inside release path
 *
 * @param  {String} path Release directory path
 * @return {Promise}
 */
function makeExtension (options) {
  const { key, output, release } = options;

  return new Promise((resolve, reject) => {
    log.pending(`Moving source files from '${release}' into '${output}'`);

    // Move files to sub-directory by using a tmp temporary dir
    fs.move(release, `${release}_tmp`, (err) => {
      if (err) {
        return reject(err);
      }

      fs.move(`${release}_tmp`, output, (err) => {
        if (err) {
          return reject(err);
        }

        log.pending(`Building extension into '${release}'`);

        setTimeout(() => {
          const commandParts = [`'${chromeBinaryPath}'`, `--pack-extension=${output}`];

          if (key) {
            commandParts.push(`--pack-extension-key=${key}`);
          }

          const command = `$(${commandParts.join(' ')})`;

          exec(command, (error, stdout, stderr) => {
            if (stdout) {
              log.pending('stdout: ' + stdout);
            }

            if (stderr) {
              return reject('stderr: ' + stderr);
            }

            if (error !== null) {
              return reject('exec error: ' + stderr);
            }

            resolve(`Extension builded in '${release}'`);
          });
          // Long enought to prevent some unexpected errors
        }, 1000);
      });
    });
  });
}

export default function pack (manifest) {
  const options = {
    key: manifest.key && path.resolve(manifest.key),
    release: manifest.buildPath,
    output: path.join(manifest.buildPath, 'source')
  };

  // TODO: check if release directory contain *.key file
  // If yes, then ask user if
  // 1) want to use it as key for build
  // 2) really really really want to override it
  makeExtension(options)
    // Extension done
    .then(function (message) {
      log.success(message);
      log.done();
    })
    // Some error happened
    .catch(function (error) {
      log.error(error.stack || error);
    });
}
