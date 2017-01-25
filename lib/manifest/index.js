'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import chokidar from 'chokidar'

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

  _createClass(Manifest, [{
    key: 'run',
    value: function run() {
      this.prepareBuildDir();
      this.processManifest();
      this.writeManifest();
    }

    // watch() {
    //   chokidar.watch(this.path).on('change', this.onChange)
    // }

    // onChange = (event, path) => {
    //   this.processManifest()
    // }

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
        // TODO validace na skripty
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
  }]);

  return Manifest;
}();

exports.default = Manifest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYW5pZmVzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJNYW5pZmVzdCIsIm9wdGlvbnMiLCJwYXRoIiwibWFuaWZlc3QiLCJzcmMiLCJkaXJuYW1lIiwiYnVpbGRQYXRoIiwib3V0cHV0IiwicHJlcGFyZUJ1aWxkRGlyIiwicHJvY2Vzc01hbmlmZXN0Iiwid3JpdGVNYW5pZmVzdCIsInJlbW92ZVN5bmMiLCJta2RpcnNTeW5jIiwibWFuaWZlc3RQYXRoIiwiam9pbiIsInBlbmRpbmciLCJ3cml0ZUZpbGVTeW5jIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuY29kaW5nIiwiZG9uZSIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwic2NyaXB0cyIsImxvYWRNYW5pZmVzdCIsImZvckVhY2giLCJwcm9jZXNzb3IiLCJhcHBseVByb2Nlc3NvclJlc3VsdCIsInNjcmlwdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFGQTs7OztBQUNBOzs7O0FBR0E7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7SUFFU0MsUTtBQUNuQixvQkFBYUMsT0FBYixFQUFzQjtBQUFBOztBQUNwQixTQUFLQyxJQUFMLEdBQVlELFFBQVFFLFFBQXBCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLGVBQUtDLE9BQUwsQ0FBYSxLQUFLSCxJQUFsQixDQUFYO0FBQ0EsU0FBS0ksU0FBTCxHQUFpQkwsUUFBUU0sTUFBekI7QUFDRDs7OzswQkFFTTtBQUNMLFdBQUtDLGVBQUw7QUFDQSxXQUFLQyxlQUFMO0FBQ0EsV0FBS0MsYUFBTDtBQUNEOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7c0NBRW1CO0FBQ2pCO0FBQ0Esd0JBQUdDLFVBQUgsQ0FBYyxLQUFLTCxTQUFuQjtBQUNBLHdCQUFHTSxVQUFILENBQWMsS0FBS04sU0FBbkI7QUFDRDs7O29DQUVnQjtBQUNmLFVBQU1PLGVBQWUsZUFBS0MsSUFBTCxDQUFVLEtBQUtSLFNBQWYsRUFBMEIsZUFBMUIsQ0FBckI7QUFDQVAsVUFBSWdCLE9BQUo7QUFDQSx3QkFBR0MsYUFBSCxDQUFpQkgsWUFBakIsRUFBK0JJLEtBQUtDLFNBQUwsQ0FBZSxLQUFLZixRQUFwQixFQUE4QixJQUE5QixFQUFvQyxDQUFwQyxDQUEvQixFQUF1RSxFQUFFZ0IsVUFBVSxNQUFaLEVBQXZFO0FBQ0FwQixVQUFJcUIsSUFBSjtBQUNEOzs7bUNBRWU7QUFDZCxhQUFPSCxLQUFLSSxLQUFMLENBQVcsa0JBQUdDLFlBQUgsQ0FBZ0IsS0FBS3BCLElBQXJCLEVBQTJCLE1BQTNCLENBQVgsQ0FBUDtBQUNEOzs7c0NBRWtCO0FBQUE7O0FBQ2pCLFdBQUtxQixPQUFMLEdBQWUsRUFBZjtBQUNBLFdBQUtwQixRQUFMLEdBQWdCLEtBQUtxQixZQUFMLEVBQWhCOztBQUVBO0FBQ0EsMkJBQVdDLE9BQVgsQ0FBbUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ2hDLGNBQUtDLG9CQUFMLENBQ0VELFVBQVUsTUFBS3ZCLFFBQWYsUUFERjtBQUdELE9BSkQ7O0FBTUEsYUFBTyxJQUFQO0FBQ0Q7OzsyQ0FFaUQ7QUFBQTs7QUFBQSxxRkFBSixFQUFJO0FBQUEsVUFBMUJBLFFBQTBCLFFBQTFCQSxRQUEwQjtBQUFBLFVBQWhCb0IsT0FBZ0IsUUFBaEJBLE9BQWdCOztBQUNoRCxVQUFJcEIsUUFBSixFQUFjO0FBQ1osYUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7QUFFRCxVQUFJb0IsT0FBSixFQUFhO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxnQkFBUUUsT0FBUixDQUFnQixVQUFDRyxNQUFELEVBQVk7QUFDMUIsaUJBQUtMLE9BQUwsQ0FBYU0sSUFBYixDQUFrQkQsTUFBbEI7QUFDRCxTQUZEO0FBR0Q7QUFDRjs7Ozs7O2tCQTlFa0I1QixRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuLy8gaW1wb3J0IGNob2tpZGFyIGZyb20gJ2Nob2tpZGFyJ1xuXG5pbXBvcnQgcHJvY2Vzc29ycyBmcm9tICcuL3Byb2Nlc3NvcnMnO1xuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmlmZXN0IHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBhdGggPSBvcHRpb25zLm1hbmlmZXN0O1xuICAgIHRoaXMuc3JjID0gcGF0aC5kaXJuYW1lKHRoaXMucGF0aCk7XG4gICAgdGhpcy5idWlsZFBhdGggPSBvcHRpb25zLm91dHB1dDtcbiAgfVxuXG4gIHJ1biAoKSB7XG4gICAgdGhpcy5wcmVwYXJlQnVpbGREaXIoKTtcbiAgICB0aGlzLnByb2Nlc3NNYW5pZmVzdCgpO1xuICAgIHRoaXMud3JpdGVNYW5pZmVzdCgpO1xuICB9XG5cbiAgLy8gd2F0Y2goKSB7XG4gIC8vICAgY2hva2lkYXIud2F0Y2godGhpcy5wYXRoKS5vbignY2hhbmdlJywgdGhpcy5vbkNoYW5nZSlcbiAgLy8gfVxuXG4gIC8vIG9uQ2hhbmdlID0gKGV2ZW50LCBwYXRoKSA9PiB7XG4gIC8vICAgdGhpcy5wcm9jZXNzTWFuaWZlc3QoKVxuICAvLyB9XG5cbiAgcHJlcGFyZUJ1aWxkRGlyICgpIHtcbiAgICAvLyBQcmVwYXJlIGNsZWFyIGJ1aWxkXG4gICAgZnMucmVtb3ZlU3luYyh0aGlzLmJ1aWxkUGF0aCk7XG4gICAgZnMubWtkaXJzU3luYyh0aGlzLmJ1aWxkUGF0aCk7XG4gIH1cblxuICB3cml0ZU1hbmlmZXN0ICgpIHtcbiAgICBjb25zdCBtYW5pZmVzdFBhdGggPSBwYXRoLmpvaW4odGhpcy5idWlsZFBhdGgsICdtYW5pZmVzdC5qc29uJyk7XG4gICAgbG9nLnBlbmRpbmcoYE1ha2luZyAnYnVpbGQvbWFuaWZlc3QuanNvbidgKTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKG1hbmlmZXN0UGF0aCwgSlNPTi5zdHJpbmdpZnkodGhpcy5tYW5pZmVzdCwgbnVsbCwgMiksIHsgZW5jb2Rpbmc6ICd1dGY4JyB9KTtcbiAgICBsb2cuZG9uZSgpO1xuICB9XG5cbiAgbG9hZE1hbmlmZXN0ICgpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmModGhpcy5wYXRoLCAndXRmOCcpKTtcbiAgfVxuXG4gIHByb2Nlc3NNYW5pZmVzdCAoKSB7XG4gICAgdGhpcy5zY3JpcHRzID0gW107XG4gICAgdGhpcy5tYW5pZmVzdCA9IHRoaXMubG9hZE1hbmlmZXN0KCk7XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgZWFjaCBwcm9jZXNzb3IgYW5kIHByb2Nlc3MgbWFuaWZlc3Qgd2l0aCBpdFxuICAgIHByb2Nlc3NvcnMuZm9yRWFjaCgocHJvY2Vzc29yKSA9PiB7XG4gICAgICB0aGlzLmFwcGx5UHJvY2Vzc29yUmVzdWx0KFxuICAgICAgICBwcm9jZXNzb3IodGhpcy5tYW5pZmVzdCwgdGhpcylcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFwcGx5UHJvY2Vzc29yUmVzdWx0ICh7IG1hbmlmZXN0LCBzY3JpcHRzIH0gPSB7fSkge1xuICAgIGlmIChtYW5pZmVzdCkge1xuICAgICAgdGhpcy5tYW5pZmVzdCA9IG1hbmlmZXN0O1xuICAgIH1cblxuICAgIGlmIChzY3JpcHRzKSB7XG4gICAgICAvLyBUT0RPIHZhbGlkYWNlIG5hIHNrcmlwdHlcbiAgICAgIC8vIGNvbnN0IHB1c2hTY3JpcHROYW1lID0gZnVuY3Rpb24oc2NyaXB0TmFtZSkge1xuICAgICAgLy8gICBjb25zdCBzY3JpcHRQYXRoID0gcGF0aC5qb2luKHBhdGhzLnNyYywgc2NyaXB0TmFtZSlcbiAgICAgIC8vXG4gICAgICAvLyAgIGlmKCFleGlzdHNTeW5jKHNjcmlwdFBhdGgpKSB7XG4gICAgICAvLyAgICAgY29uc29sZS53YXJuKGNvbG9ycmVkKGBNaXNzaW5nIHNjcmlwdCAke3NjcmlwdFBhdGh9YCkpXG4gICAgICAvL1xuICAgICAgLy8gICAgIHJldHVyblxuICAgICAgLy8gICB9XG4gICAgICAvL1xuICAgICAgLy8gICBpZih+c2NyaXB0cy5pbmRleE9mKHNjcmlwdE5hbWUpKVxuICAgICAgLy8gICAgIHJldHVyblxuICAgICAgLy9cbiAgICAgIC8vICAgc2NyaXB0cy5wdXNoKHNjcmlwdE5hbWUpXG4gICAgICAvLyB9XG5cbiAgICAgIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgIHRoaXMuc2NyaXB0cy5wdXNoKHNjcmlwdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==