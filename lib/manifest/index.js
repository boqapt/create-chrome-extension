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
      _fsExtra2.default.writeFileSync(manifestPath, JSON.stringify(this.manifest, null, 2), { encoding: 'utf8' });
      log.done();
    }
  }, {
    key: 'loadManifest',
    value: function loadManifest() {
      return JSON.parse(_fsExtra2.default.readFileSync(this.path, 'utf8'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYW5pZmVzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJNYW5pZmVzdCIsIm9wdGlvbnMiLCJwYXRoIiwibWFuaWZlc3QiLCJzcmMiLCJkaXJuYW1lIiwiYnVpbGRQYXRoIiwib3V0cHV0IiwicHJlcGFyZUJ1aWxkRGlyIiwicHJvY2Vzc01hbmlmZXN0Iiwid3JpdGVNYW5pZmVzdCIsInJlbW92ZVN5bmMiLCJta2RpcnNTeW5jIiwibWFuaWZlc3RQYXRoIiwiam9pbiIsInBlbmRpbmciLCJ3cml0ZUZpbGVTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuY29kaW5nIiwiZG9uZSIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwic2NyaXB0cyIsImxvYWRNYW5pZmVzdCIsImZvckVhY2giLCJwcm9jZXNzb3IiLCJhcHBseVByb2Nlc3NvclJlc3VsdCIsInNjcmlwdCIsInB1c2giLCJyZWR1Y2UiLCJlbnRyaWVzIiwibmFtZSIsInNwbGl0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7Ozs7O0lBRVNDLFE7QUFDbkIsb0JBQWFDLE9BQWIsRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0MsSUFBTCxHQUFZRCxRQUFRRSxRQUFwQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxlQUFLQyxPQUFMLENBQWEsS0FBS0gsSUFBbEIsQ0FBWDtBQUNBLFNBQUtJLFNBQUwsR0FBaUJMLFFBQVFNLE1BQXpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OzswQkFtQk87QUFDTCxXQUFLQyxlQUFMO0FBQ0EsV0FBS0MsZUFBTDtBQUNBLFdBQUtDLGFBQUw7QUFDRDs7O3NDQUVrQjtBQUNqQjtBQUNBLHdCQUFHQyxVQUFILENBQWMsS0FBS0wsU0FBbkI7QUFDQSx3QkFBR00sVUFBSCxDQUFjLEtBQUtOLFNBQW5CO0FBQ0Q7OztvQ0FFZ0I7QUFDZixVQUFNTyxlQUFlLGVBQUtDLElBQUwsQ0FBVSxLQUFLUixTQUFmLEVBQTBCLGVBQTFCLENBQXJCO0FBQ0FQLFVBQUlnQixPQUFKO0FBQ0Esd0JBQUdDLGFBQUgsQ0FBaUJILFlBQWpCLEVBQStCSSxLQUFLQyxTQUFMLENBQWUsS0FBS2YsUUFBcEIsRUFBOEIsSUFBOUIsRUFBb0MsQ0FBcEMsQ0FBL0IsRUFBdUUsRUFBRWdCLFVBQVUsTUFBWixFQUF2RTtBQUNBcEIsVUFBSXFCLElBQUo7QUFDRDs7O21DQUVlO0FBQ2QsYUFBT0gsS0FBS0ksS0FBTCxDQUFXLGtCQUFHQyxZQUFILENBQWdCLEtBQUtwQixJQUFyQixFQUEyQixNQUEzQixDQUFYLENBQVA7QUFDRDs7O3NDQUVrQjtBQUFBOztBQUNqQixXQUFLcUIsT0FBTCxHQUFlLEVBQWY7QUFDQSxXQUFLcEIsUUFBTCxHQUFnQixLQUFLcUIsWUFBTCxFQUFoQjs7QUFFQTtBQUNBLDJCQUFXQyxPQUFYLENBQW1CLFVBQUNDLFNBQUQsRUFBZTtBQUNoQyxjQUFLQyxvQkFBTCxDQUNFRCxVQUFVLE1BQUt2QixRQUFmLFFBREY7QUFHRCxPQUpEOztBQU1BLGFBQU8sSUFBUDtBQUNEOzs7MkNBRWlEO0FBQUE7O0FBQUEscUZBQUosRUFBSTtBQUFBLFVBQTFCQSxRQUEwQixRQUExQkEsUUFBMEI7QUFBQSxVQUFoQm9CLE9BQWdCLFFBQWhCQSxPQUFnQjs7QUFDaEQsVUFBSXBCLFFBQUosRUFBYztBQUNaLGFBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7O0FBRUQsVUFBSW9CLE9BQUosRUFBYTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxnQkFBUUUsT0FBUixDQUFnQixVQUFDRyxNQUFELEVBQVk7QUFDMUIsaUJBQUtMLE9BQUwsQ0FBYU0sSUFBYixDQUFrQkQsTUFBbEI7QUFDRCxTQUZEO0FBR0Q7QUFDRjs7O3dCQTNFYztBQUNiLGFBQU8sS0FBS0wsT0FBTCxDQUNKTyxNQURJLENBQ0csVUFBQ0MsT0FBRCxFQUFVN0IsSUFBVixFQUFtQjtBQUN6QixZQUFNOEIsT0FBTzlCLEtBQUsrQixLQUFMLENBQVcsR0FBWCxFQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBQyxDQUExQixFQUE2QnBCLElBQTdCLENBQWtDLEdBQWxDLENBQWI7O0FBRUFpQixnQkFBUUMsSUFBUixJQUFnQjlCLElBQWhCOztBQUVBLGVBQU82QixPQUFQO0FBQ0QsT0FQSSxFQU9GLEVBUEUsQ0FBUDtBQVFEOzs7Ozs7a0JBeEJrQi9CLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCBwcm9jZXNzb3JzIGZyb20gJy4vcHJvY2Vzc29ycyc7XG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuaWZlc3Qge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMucGF0aCA9IG9wdGlvbnMubWFuaWZlc3Q7XG4gICAgdGhpcy5zcmMgPSBwYXRoLmRpcm5hbWUodGhpcy5wYXRoKTtcbiAgICB0aGlzLmJ1aWxkUGF0aCA9IG9wdGlvbnMub3V0cHV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBlbnRyaWVzIGFzIFdlYnBhY2sgZm9ybWF0XG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gLSBFbnRyaWVzIGZvciBXZWJhY2ssIHdpdGggc2hhcGU6XG4gICAqICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAnY29udGVudC9pbmRleCc6ICdjb250ZW50L2luZGV4LmpzJ1xuICAgKiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAqL1xuICBnZXQgZW50cmllcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NyaXB0c1xuICAgICAgLnJlZHVjZSgoZW50cmllcywgcGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gcGF0aC5zcGxpdCgnLicpLnNsaWNlKDAsIC0xKS5qb2luKCcuJyk7XG5cbiAgICAgICAgZW50cmllc1tuYW1lXSA9IHBhdGg7XG5cbiAgICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgICB9LCB7fSk7XG4gIH1cblxuICBydW4gKCkge1xuICAgIHRoaXMucHJlcGFyZUJ1aWxkRGlyKCk7XG4gICAgdGhpcy5wcm9jZXNzTWFuaWZlc3QoKTtcbiAgICB0aGlzLndyaXRlTWFuaWZlc3QoKTtcbiAgfVxuXG4gIHByZXBhcmVCdWlsZERpciAoKSB7XG4gICAgLy8gUHJlcGFyZSBjbGVhciBidWlsZFxuICAgIGZzLnJlbW92ZVN5bmModGhpcy5idWlsZFBhdGgpO1xuICAgIGZzLm1rZGlyc1N5bmModGhpcy5idWlsZFBhdGgpO1xuICB9XG5cbiAgd3JpdGVNYW5pZmVzdCAoKSB7XG4gICAgY29uc3QgbWFuaWZlc3RQYXRoID0gcGF0aC5qb2luKHRoaXMuYnVpbGRQYXRoLCAnbWFuaWZlc3QuanNvbicpO1xuICAgIGxvZy5wZW5kaW5nKGBNYWtpbmcgJ2J1aWxkL21hbmlmZXN0Lmpzb24nYCk7XG4gICAgZnMud3JpdGVGaWxlU3luYyhtYW5pZmVzdFBhdGgsIEpTT04uc3RyaW5naWZ5KHRoaXMubWFuaWZlc3QsIG51bGwsIDIpLCB7IGVuY29kaW5nOiAndXRmOCcgfSk7XG4gICAgbG9nLmRvbmUoKTtcbiAgfVxuXG4gIGxvYWRNYW5pZmVzdCAoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHRoaXMucGF0aCwgJ3V0ZjgnKSk7XG4gIH1cblxuICBwcm9jZXNzTWFuaWZlc3QgKCkge1xuICAgIHRoaXMuc2NyaXB0cyA9IFtdO1xuICAgIHRoaXMubWFuaWZlc3QgPSB0aGlzLmxvYWRNYW5pZmVzdCgpO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGVhY2ggcHJvY2Vzc29yIGFuZCBwcm9jZXNzIG1hbmlmZXN0IHdpdGggaXRcbiAgICBwcm9jZXNzb3JzLmZvckVhY2goKHByb2Nlc3NvcikgPT4ge1xuICAgICAgdGhpcy5hcHBseVByb2Nlc3NvclJlc3VsdChcbiAgICAgICAgcHJvY2Vzc29yKHRoaXMubWFuaWZlc3QsIHRoaXMpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhcHBseVByb2Nlc3NvclJlc3VsdCAoeyBtYW5pZmVzdCwgc2NyaXB0cyB9ID0ge30pIHtcbiAgICBpZiAobWFuaWZlc3QpIHtcbiAgICAgIHRoaXMubWFuaWZlc3QgPSBtYW5pZmVzdDtcbiAgICB9XG5cbiAgICBpZiAoc2NyaXB0cykge1xuICAgICAgLy8gVE9ETyB2YWxpZGF0ZSB0aGUgc2NyaXB0c1xuICAgICAgLy9cbiAgICAgIC8vIGNvbnN0IHB1c2hTY3JpcHROYW1lID0gZnVuY3Rpb24oc2NyaXB0TmFtZSkge1xuICAgICAgLy8gICBjb25zdCBzY3JpcHRQYXRoID0gcGF0aC5qb2luKHBhdGhzLnNyYywgc2NyaXB0TmFtZSlcbiAgICAgIC8vXG4gICAgICAvLyAgIGlmKCFleGlzdHNTeW5jKHNjcmlwdFBhdGgpKSB7XG4gICAgICAvLyAgICAgY29uc29sZS53YXJuKGNvbG9ycmVkKGBNaXNzaW5nIHNjcmlwdCAke3NjcmlwdFBhdGh9YCkpXG4gICAgICAvL1xuICAgICAgLy8gICAgIHJldHVyblxuICAgICAgLy8gICB9XG4gICAgICAvL1xuICAgICAgLy8gICBpZih+c2NyaXB0cy5pbmRleE9mKHNjcmlwdE5hbWUpKVxuICAgICAgLy8gICAgIHJldHVyblxuICAgICAgLy9cbiAgICAgIC8vICAgc2NyaXB0cy5wdXNoKHNjcmlwdE5hbWUpXG4gICAgICAvLyB9XG5cbiAgICAgIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgIHRoaXMuc2NyaXB0cy5wdXNoKHNjcmlwdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==