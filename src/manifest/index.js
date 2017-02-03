import fs from 'fs-extra';
import path from 'path';

import processors from './processors';
import * as log from '../utils/log';

export default class Manifest {
  constructor (options) {
    this.path = options.manifest;
    this.src = path.dirname(this.path);
    this.buildPath = options.output;
    this.preProcess = options.preProcess || x => x;
    this.postProcess = options.postProcess || x => x;
  }

  /**
   * Return entries as Webpack format
   *
   * @return {Object} - Entries for Weback, with shape:
   *                      {
   *                        'content/index': 'content/index.js'
   *                      }
   */
  get entries () {
    return this.scripts
      .reduce((entries, path) => {
        const name = path.split('.').slice(0, -1).join('.');

        entries[name] = path;

        return entries;
      }, {});
  }

  run () {
    this.prepareBuildDir();
    this.processManifest();
    this.writeManifest();
  }

  prepareBuildDir () {
    // Prepare clear build
    fs.removeSync(this.buildPath);
    fs.mkdirsSync(this.buildPath);
  }

  writeManifest () {
    const manifestPath = path.join(this.buildPath, 'manifest.json');
    log.pending(`Making 'build/manifest.json'`);
    fs.writeFileSync(manifestPath, JSON.stringify(this.postProcess(this.manifest), null, 2), { encoding: 'utf8' });
    log.done();
  }

  loadManifest () {
    return this.preProcess(JSON.parse(fs.readFileSync(this.path, 'utf8')));
  }

  processManifest () {
    this.scripts = [];
    this.manifest = this.loadManifest();

    // Iterate over each processor and process manifest with it
    processors.forEach((processor) => {
      this.applyProcessorResult(
        processor(this.manifest, this)
      );
    });

    return true;
  }

  applyProcessorResult ({ manifest, scripts } = {}) {
    if (manifest) {
      this.manifest = manifest;
    }

    if (scripts) {
      // TODO validate the scripts
      //
      // const pushScriptName = function(scriptName) {
      //   const scriptPath = path.join(paths.src, scriptName)
      //
      //   if(!existsSync(scriptPath)) {
      //     console.warn(colorred(`Missing script ${scriptPath}`))
      //
      //     return
      //   }
      //
      //   if(~scripts.indexOf(scriptName))
      //     return
      //
      //   scripts.push(scriptName)
      // }

      scripts.forEach((script) => {
        this.scripts.push(script);
      });
    }
  }
}
