'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _processors = require('./processors');

var _processors2 = _interopRequireDefault(_processors);

var _log = require('../utils/log');

var log = _interopRequireWildcard(_log);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Manifest = function () {
  function Manifest(options) {
    _classCallCheck(this, Manifest);

    this.path = options.manifest;
    this.src = _path2.default.dirname(this.path);
    this.buildPath = options.output;
    this.preProcess = options.preProcess || function (x) {
      return x;
    };
    this.postProcess = options.postProcess || function (x) {
      return x;
    };
  }

  /**
   * Return entries as Webpack format
   *
   * @return {Object} - Entries for Weback, with shape:
   *                      {
   *                        'content/index': 'content/index.js'
   *                      }
   */


  _createClass(Manifest, [{
    key: 'run',
    value: function run() {
      this.prepareBuildDir();
      this.processManifest();
      this.writeManifest();
    }
  }, {
    key: 'prepareBuildDir',
    value: function prepareBuildDir() {
      // Prepare clear build
      _fsExtra2.default.removeSync(this.buildPath);
      _fsExtra2.default.mkdirsSync(this.buildPath);
    }
  }, {
    key: 'writeManifest',
    value: function writeManifest() {
      var manifestPath = _path2.default.join(this.buildPath, 'manifest.json');
      log.pending('Making \'build/manifest.json\'');
      _fsExtra2.default.writeFileSync(manifestPath, JSON.stringify(this.postProcess(this.manifest), null, 2), { encoding: 'utf8' });
      log.done();
    }
  }, {
    key: 'loadManifest',
    value: function loadManifest() {
      return this.preProcess(JSON.parse(_fsExtra2.default.readFileSync(this.path, 'utf8')));
    }
  }, {
    key: 'processManifest',
    value: function processManifest() {
      var _this = this;

      this.scripts = [];
      this.manifest = this.loadManifest();

      // Iterate over each processor and process manifest with it
      _processors2.default.forEach(function (processor) {
        _this.applyProcessorResult(processor(_this.manifest, _this));
      });

      return true;
    }
  }, {
    key: 'applyProcessorResult',
    value: function applyProcessorResult() {
      var _this2 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          manifest = _ref.manifest,
          scripts = _ref.scripts;

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

        scripts.forEach(function (script) {
          _this2.scripts.push(script);
        });
      }
    }
  }, {
    key: 'entries',
    get: function get() {
      return this.scripts.reduce(function (entries, path) {
        var name = path.split('.').slice(0, -1).join('.');

        entries[name] = path;

        return entries;
      }, {});
    }
  }]);

  return Manifest;
}();

exports.default = Manifest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYW5pZmVzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJNYW5pZmVzdCIsIm9wdGlvbnMiLCJwYXRoIiwibWFuaWZlc3QiLCJzcmMiLCJkaXJuYW1lIiwiYnVpbGRQYXRoIiwib3V0cHV0IiwicHJlUHJvY2VzcyIsIngiLCJwb3N0UHJvY2VzcyIsInByZXBhcmVCdWlsZERpciIsInByb2Nlc3NNYW5pZmVzdCIsIndyaXRlTWFuaWZlc3QiLCJyZW1vdmVTeW5jIiwibWtkaXJzU3luYyIsIm1hbmlmZXN0UGF0aCIsImpvaW4iLCJwZW5kaW5nIiwid3JpdGVGaWxlU3luYyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmNvZGluZyIsImRvbmUiLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsInNjcmlwdHMiLCJsb2FkTWFuaWZlc3QiLCJmb3JFYWNoIiwicHJvY2Vzc29yIiwiYXBwbHlQcm9jZXNzb3JSZXN1bHQiLCJzY3JpcHQiLCJwdXNoIiwicmVkdWNlIiwiZW50cmllcyIsIm5hbWUiLCJzcGxpdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7OztJQUVTQyxRO0FBQ25CLG9CQUFhQyxPQUFiLEVBQXNCO0FBQUE7O0FBQ3BCLFNBQUtDLElBQUwsR0FBWUQsUUFBUUUsUUFBcEI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsZUFBS0MsT0FBTCxDQUFhLEtBQUtILElBQWxCLENBQVg7QUFDQSxTQUFLSSxTQUFMLEdBQWlCTCxRQUFRTSxNQUF6QjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JQLFFBQVFPLFVBQVIsSUFBdUI7QUFBQSxhQUFLQyxDQUFMO0FBQUEsS0FBekM7QUFDQSxTQUFLQyxXQUFMLEdBQW1CVCxRQUFRUyxXQUFSLElBQXdCO0FBQUEsYUFBS0QsQ0FBTDtBQUFBLEtBQTNDO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OzswQkFtQk87QUFDTCxXQUFLRSxlQUFMO0FBQ0EsV0FBS0MsZUFBTDtBQUNBLFdBQUtDLGFBQUw7QUFDRDs7O3NDQUVrQjtBQUNqQjtBQUNBLHdCQUFHQyxVQUFILENBQWMsS0FBS1IsU0FBbkI7QUFDQSx3QkFBR1MsVUFBSCxDQUFjLEtBQUtULFNBQW5CO0FBQ0Q7OztvQ0FFZ0I7QUFDZixVQUFNVSxlQUFlLGVBQUtDLElBQUwsQ0FBVSxLQUFLWCxTQUFmLEVBQTBCLGVBQTFCLENBQXJCO0FBQ0FQLFVBQUltQixPQUFKO0FBQ0Esd0JBQUdDLGFBQUgsQ0FBaUJILFlBQWpCLEVBQStCSSxLQUFLQyxTQUFMLENBQWUsS0FBS1gsV0FBTCxDQUFpQixLQUFLUCxRQUF0QixDQUFmLEVBQWdELElBQWhELEVBQXNELENBQXRELENBQS9CLEVBQXlGLEVBQUVtQixVQUFVLE1BQVosRUFBekY7QUFDQXZCLFVBQUl3QixJQUFKO0FBQ0Q7OzttQ0FFZTtBQUNkLGFBQU8sS0FBS2YsVUFBTCxDQUFnQlksS0FBS0ksS0FBTCxDQUFXLGtCQUFHQyxZQUFILENBQWdCLEtBQUt2QixJQUFyQixFQUEyQixNQUEzQixDQUFYLENBQWhCLENBQVA7QUFDRDs7O3NDQUVrQjtBQUFBOztBQUNqQixXQUFLd0IsT0FBTCxHQUFlLEVBQWY7QUFDQSxXQUFLdkIsUUFBTCxHQUFnQixLQUFLd0IsWUFBTCxFQUFoQjs7QUFFQTtBQUNBLDJCQUFXQyxPQUFYLENBQW1CLFVBQUNDLFNBQUQsRUFBZTtBQUNoQyxjQUFLQyxvQkFBTCxDQUNFRCxVQUFVLE1BQUsxQixRQUFmLFFBREY7QUFHRCxPQUpEOztBQU1BLGFBQU8sSUFBUDtBQUNEOzs7MkNBRWlEO0FBQUE7O0FBQUEscUZBQUosRUFBSTtBQUFBLFVBQTFCQSxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxVQUFoQnVCLE9BQWdCLFFBQWhCQSxPQUFnQjs7QUFDaEQsVUFBSXZCLFFBQUosRUFBYztBQUNaLGFBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7O0FBRUQsVUFBSXVCLE9BQUosRUFBYTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxnQkFBUUUsT0FBUixDQUFnQixVQUFDRyxNQUFELEVBQVk7QUFDMUIsaUJBQUtMLE9BQUwsQ0FBYU0sSUFBYixDQUFrQkQsTUFBbEI7QUFDRCxTQUZEO0FBR0Q7QUFDRjs7O3dCQTNFYztBQUNiLGFBQU8sS0FBS0wsT0FBTCxDQUNKTyxNQURJLENBQ0csVUFBQ0MsT0FBRCxFQUFVaEMsSUFBVixFQUFtQjtBQUN6QixZQUFNaUMsT0FBT2pDLEtBQUtrQyxLQUFMLENBQVcsR0FBWCxFQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBQyxDQUExQixFQUE2QnBCLElBQTdCLENBQWtDLEdBQWxDLENBQWI7O0FBRUFpQixnQkFBUUMsSUFBUixJQUFnQmpDLElBQWhCOztBQUVBLGVBQU9nQyxPQUFQO0FBQ0QsT0FQSSxFQU9GLEVBUEUsQ0FBUDtBQVFEOzs7Ozs7a0JBMUJrQmxDLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCBwcm9jZXNzb3JzIGZyb20gJy4vcHJvY2Vzc29ycyc7XG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuaWZlc3Qge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMucGF0aCA9IG9wdGlvbnMubWFuaWZlc3Q7XG4gICAgdGhpcy5zcmMgPSBwYXRoLmRpcm5hbWUodGhpcy5wYXRoKTtcbiAgICB0aGlzLmJ1aWxkUGF0aCA9IG9wdGlvbnMub3V0cHV0O1xuICAgIHRoaXMucHJlUHJvY2VzcyA9IG9wdGlvbnMucHJlUHJvY2VzcyB8fCAoeCA9PiB4KTtcbiAgICB0aGlzLnBvc3RQcm9jZXNzID0gb3B0aW9ucy5wb3N0UHJvY2VzcyB8fCAoeCA9PiB4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gZW50cmllcyBhcyBXZWJwYWNrIGZvcm1hdFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IC0gRW50cmllcyBmb3IgV2ViYWNrLCB3aXRoIHNoYXBlOlxuICAgKiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQvaW5kZXgnOiAnY29udGVudC9pbmRleC5qcydcbiAgICogICAgICAgICAgICAgICAgICAgICAgfVxuICAgKi9cbiAgZ2V0IGVudHJpZXMgKCkge1xuICAgIHJldHVybiB0aGlzLnNjcmlwdHNcbiAgICAgIC5yZWR1Y2UoKGVudHJpZXMsIHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3BsaXQoJy4nKS5zbGljZSgwLCAtMSkuam9pbignLicpO1xuXG4gICAgICAgIGVudHJpZXNbbmFtZV0gPSBwYXRoO1xuXG4gICAgICAgIHJldHVybiBlbnRyaWVzO1xuICAgICAgfSwge30pO1xuICB9XG5cbiAgcnVuICgpIHtcbiAgICB0aGlzLnByZXBhcmVCdWlsZERpcigpO1xuICAgIHRoaXMucHJvY2Vzc01hbmlmZXN0KCk7XG4gICAgdGhpcy53cml0ZU1hbmlmZXN0KCk7XG4gIH1cblxuICBwcmVwYXJlQnVpbGREaXIgKCkge1xuICAgIC8vIFByZXBhcmUgY2xlYXIgYnVpbGRcbiAgICBmcy5yZW1vdmVTeW5jKHRoaXMuYnVpbGRQYXRoKTtcbiAgICBmcy5ta2RpcnNTeW5jKHRoaXMuYnVpbGRQYXRoKTtcbiAgfVxuXG4gIHdyaXRlTWFuaWZlc3QgKCkge1xuICAgIGNvbnN0IG1hbmlmZXN0UGF0aCA9IHBhdGguam9pbih0aGlzLmJ1aWxkUGF0aCwgJ21hbmlmZXN0Lmpzb24nKTtcbiAgICBsb2cucGVuZGluZyhgTWFraW5nICdidWlsZC9tYW5pZmVzdC5qc29uJ2ApO1xuICAgIGZzLndyaXRlRmlsZVN5bmMobWFuaWZlc3RQYXRoLCBKU09OLnN0cmluZ2lmeSh0aGlzLnBvc3RQcm9jZXNzKHRoaXMubWFuaWZlc3QpLCBudWxsLCAyKSwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pO1xuICAgIGxvZy5kb25lKCk7XG4gIH1cblxuICBsb2FkTWFuaWZlc3QgKCkge1xuICAgIHJldHVybiB0aGlzLnByZVByb2Nlc3MoSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmModGhpcy5wYXRoLCAndXRmOCcpKSk7XG4gIH1cblxuICBwcm9jZXNzTWFuaWZlc3QgKCkge1xuICAgIHRoaXMuc2NyaXB0cyA9IFtdO1xuICAgIHRoaXMubWFuaWZlc3QgPSB0aGlzLmxvYWRNYW5pZmVzdCgpO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGVhY2ggcHJvY2Vzc29yIGFuZCBwcm9jZXNzIG1hbmlmZXN0IHdpdGggaXRcbiAgICBwcm9jZXNzb3JzLmZvckVhY2goKHByb2Nlc3NvcikgPT4ge1xuICAgICAgdGhpcy5hcHBseVByb2Nlc3NvclJlc3VsdChcbiAgICAgICAgcHJvY2Vzc29yKHRoaXMubWFuaWZlc3QsIHRoaXMpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhcHBseVByb2Nlc3NvclJlc3VsdCAoeyBtYW5pZmVzdCwgc2NyaXB0cyB9ID0ge30pIHtcbiAgICBpZiAobWFuaWZlc3QpIHtcbiAgICAgIHRoaXMubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgICB9XG5cbiAgICBpZiAoc2NyaXB0cykge1xuICAgICAgLy8gVE9ETyB2YWxpZGF0ZSB0aGUgc2NyaXB0c1xuICAgICAgLy9cbiAgICAgIC8vIGNvbnN0IHB1c2hTY3JpcHROYW1lID0gZnVuY3Rpb24oc2NyaXB0TmFtZSkge1xuICAgICAgLy8gICBjb25zdCBzY3JpcHRQYXRoID0gcGF0aC5qb2luKHBhdGhzLnNyYywgc2NyaXB0TmFtZSlcbiAgICAgIC8vXG4gICAgICAvLyAgIGlmKCFleGlzdHNTeW5jKHNjcmlwdFBhdGgpKSB7XG4gICAgICAvLyAgICAgY29uc29sZS53YXJuKGNvbG9ycmVkKGBNaXNzaW5nIHNjcmlwdCAke3NjcmlwdFBhdGh9YCkpXG4gICAgICAvL1xuICAgICAgLy8gICAgIHJldHVyblxuICAgICAgLy8gICB9XG4gICAgICAvL1xuICAgICAgLy8gICBpZih+c2NyaXB0cy5pbmRleE9mKHNjcmlwdE5hbWUpKVxuICAgICAgLy8gICAgIHJldHVyblxuICAgICAgLy9cbiAgICAgIC8vICAgc2NyaXB0cy5wdXNoKHNjcmlwdE5hbWUpXG4gICAgICAvLyB9XG5cbiAgICAgIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgIHRoaXMuc2NyaXB0cy5wdXNoKHNjcmlwdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==