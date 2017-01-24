import path from 'path';
import commander from 'commander';
import pckg from '../package.json';

class MissingOptionError extends Error {

}

/**
 * Generic settings
 */

let cmdValue;

commander
.version(pckg.version);

/**
 * Run command
 */
applyOptions(
  commander
    .command('run <manifest>')
    .description('run extension in development environment')
).action((manifest, options) => {
  cmdValue = 'run';
  runHandler(manifest, options);
});

/**
 * Build command
 */
applyOptions(
  commander
    .command('build <manifest>')
    .description('build extension for distribution')
).action((manifest, options) => {
  cmdValue = 'build';
  buildHandler(manifest, options);
});

/**
 * Pack command
 */
applyOptions(
  commander
    .command('pack <manifest>')
    .description('pack extension for distribution')
).action((manifest, options) => {
  cmdValue = 'pack';
  packHandler(manifest, options);
});

/**
 * Start it!
 */
commander.parse(process.argv);

if (typeof cmdValue === 'undefined') {
  commander.outputHelp();
  process.exit(1);
}

/**
 * Wrap command with common options
 *
 * @param  {Command} commander
 * @return {Command}
 */
function applyOptions (commander) {
  return (
    commander
    .option('-o --output <path>', 'output directory path')
  );
}

/**
 * Get path from Command option and allow to throw error for missing one
 *
 * @param  {Command} command
 * @param  {String|Boolean} option
 * @return {String}
 */
function resolvePath (pathToResolve, required = false) {
  if (required && !pathToResolve) {
    throw new MissingOptionError(`error: missing required option '${required}'`);
  }

  return path.resolve(pathToResolve);
}

/**
 * Extract options from Command
 *
 * @param  {Command} command
 * @return {Object}
 */
function processOptions (options) {
  const output = resolvePath(options.output, 'output');

  return {
    ...options,
    output
  };
}

/**
 * Returns handler for Command action with given function
 *
 * @param  {Function} runner
 * @param  {String} manifest
 * @param  {Object} options
 */
function actionHandler (runner, manifest, options) {
  try {
    runner({
      ...processOptions(options),
      manifest: path.resolve(manifest)
    });
  } catch (ex) {
    if (ex instanceof MissingOptionError) {
      console.error(`\n  ${ex.message}\n`);
    } else {
      throw ex;
    }
  }
}

function runHandler (manifest, options) {
  actionHandler(require('./run'), manifest, options);
}

function buildHandler (manifest, options) {
  actionHandler(require('./build'), manifest, options);
}

function packHandler (manifest, options) {
  actionHandler(require('./pack'), manifest, options);
}
