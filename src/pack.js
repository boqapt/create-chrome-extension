// Native
import path from 'path';
import { exec } from 'child_process';

// npm
import color from 'colors/safe';
import chromeBinaryPath from 'chrome-location';

/**
 * Generate extension file inside release path
 *
 * @param  {String} path Release directory path
 * @return {Promise}
 */
function makeExtension (options) {
  const { key, output, release } = options;

  return new Promise((resolve, reject) => {
    console.log(color.yellow(`Building extension into '${release}'`));

    setTimeout(() => {
      const commandParts = [`'${chromeBinaryPath}'`, `--pack-extension=${output}`];

      if (key) {
        commandParts.push(`--pack-extension-key=${key}`);
      }

      const command = `$(${commandParts.join(' ')})`;

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

        resolve(`Extension builded in '${release}'`);
      });
      // Long enought to prevent some unexpected errors
    }, 1000);
  });
}

function pack (options) {
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
  makeExtension(options)
  // Extension done
  .then(function (message) {
    console.log(color.green(message));
  })
  // Some error happened
  .catch(function (error) {
    console.log(color.red(error.stack || error));
  });
}

module.exports = pack;
