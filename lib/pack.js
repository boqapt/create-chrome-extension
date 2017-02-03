'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pack;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _child_process = require('child_process');

var _crx = require('crx');

var _crx2 = _interopRequireDefault(_crx);

var _chromeLocation = require('chrome-location');

var _chromeLocation2 = _interopRequireDefault(_chromeLocation);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _log = require('./utils/log');

var log = _interopRequireWildcard(_log);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate extension file inside release path
 *
 * @param  {String} path Release directory path
 * @return {Promise}
 */


// npm
// Native
function makeExtension(options) {
  var key = options.key,
      output = options.output,
      release = options.release;


  return new Promise(function (resolve, reject) {
    log.pending('Moving source files from \'' + release + '\' into \'' + output + '\'');

    // Move files to sub-directory by using a tmp temporary dir
    _fsExtra2.default.move(release, release + '_tmp', function (err) {
      if (err) {
        return reject(err);
      }

      _fsExtra2.default.move(release + '_tmp', output, function (err) {
        if (err) {
          return reject(err);
        }

        log.pending('Building extension into \'' + release + '\'');

        setTimeout(function () {
          var commandParts = ['\'' + _chromeLocation2.default + '\'', '--pack-extension=' + output];

          if (key) {
            commandParts.push('--pack-extension-key=' + key);
          }

          var command = '$(' + commandParts.join(' ') + ')';

          (0, _child_process.exec)(command, function (error, stdout, stderr) {
            if (stdout) {
              log.pending('stdout: ' + stdout);
            }

            if (stderr) {
              return reject('stderr: ' + stderr);
            }

            if (error !== null) {
              return reject('exec error: ' + stderr);
            }

            resolve('Extension builded in \'' + release + '\'');
          });
          // Long enought to prevent some unexpected errors
        }, 1000);
      });
    });
  });
}

function makeZip(options) {
  if (!options.zip) {
    return Promise.resolve(false);
  }

  var name = options.name;

  var crx = new _crx2.default();

  return crx.load(options.output).then(function () {
    return crx.loadContents();
  }).then(function (archiveBuffer) {
    _fsExtra2.default.writeFile(_path2.default.join(options.release, name + '.zip'), archiveBuffer);
  });
}

function pack(manifest) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  options.name = manifest.name;
  options.key = manifest.key && _path2.default.resolve(manifest.key);
  options.release = manifest.buildPath;
  options.output = _path2.default.join(manifest.buildPath, 'source');
  options.zip = options.zip || false;

  // TODO: check if release directory contain *.key file
  // If yes, then ask user if
  // 1) want to use it as key for build
  // 2) really really really want to override it
  makeExtension(options)
  // Extension done
  .then(function (message) {
    return makeZip(options).then(function () {
      log.success(message);
      log.done();
    });
  })
  // Some error happened
  .catch(function (error) {
    log.error(error.stack || error);
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWNrLmpzIl0sIm5hbWVzIjpbInBhY2siLCJsb2ciLCJtYWtlRXh0ZW5zaW9uIiwib3B0aW9ucyIsImtleSIsIm91dHB1dCIsInJlbGVhc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBlbmRpbmciLCJtb3ZlIiwiZXJyIiwic2V0VGltZW91dCIsImNvbW1hbmRQYXJ0cyIsInB1c2giLCJjb21tYW5kIiwiam9pbiIsImVycm9yIiwic3Rkb3V0Iiwic3RkZXJyIiwibWFrZVppcCIsInppcCIsIm5hbWUiLCJjcngiLCJsb2FkIiwidGhlbiIsImxvYWRDb250ZW50cyIsIndyaXRlRmlsZSIsImFyY2hpdmVCdWZmZXIiLCJtYW5pZmVzdCIsImJ1aWxkUGF0aCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZG9uZSIsImNhdGNoIiwic3RhY2siXSwibWFwcGluZ3MiOiI7Ozs7O2tCQW9Gd0JBLEk7O0FBbkZ4Qjs7OztBQUNBOztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOztJQUFZQyxHOzs7Ozs7QUFHWjs7Ozs7Ozs7QUFUQTtBQUpBO0FBbUJBLFNBQVNDLGFBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDO0FBQUEsTUFDdkJDLEdBRHVCLEdBQ0VELE9BREYsQ0FDdkJDLEdBRHVCO0FBQUEsTUFDbEJDLE1BRGtCLEdBQ0VGLE9BREYsQ0FDbEJFLE1BRGtCO0FBQUEsTUFDVkMsT0FEVSxHQUNFSCxPQURGLENBQ1ZHLE9BRFU7OztBQUcvQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENSLFFBQUlTLE9BQUosaUNBQXlDSixPQUF6QyxrQkFBMkRELE1BQTNEOztBQUVBO0FBQ0Esc0JBQUdNLElBQUgsQ0FBUUwsT0FBUixFQUFvQkEsT0FBcEIsV0FBbUMsVUFBQ00sR0FBRCxFQUFTO0FBQzFDLFVBQUlBLEdBQUosRUFBUztBQUNQLGVBQU9ILE9BQU9HLEdBQVAsQ0FBUDtBQUNEOztBQUVELHdCQUFHRCxJQUFILENBQVdMLE9BQVgsV0FBMEJELE1BQTFCLEVBQWtDLFVBQUNPLEdBQUQsRUFBUztBQUN6QyxZQUFJQSxHQUFKLEVBQVM7QUFDUCxpQkFBT0gsT0FBT0csR0FBUCxDQUFQO0FBQ0Q7O0FBRURYLFlBQUlTLE9BQUosZ0NBQXdDSixPQUF4Qzs7QUFFQU8sbUJBQVcsWUFBTTtBQUNmLGNBQU1DLGVBQWUsK0RBQThDVCxNQUE5QyxDQUFyQjs7QUFFQSxjQUFJRCxHQUFKLEVBQVM7QUFDUFUseUJBQWFDLElBQWIsMkJBQTBDWCxHQUExQztBQUNEOztBQUVELGNBQU1ZLGlCQUFlRixhQUFhRyxJQUFiLENBQWtCLEdBQWxCLENBQWYsTUFBTjs7QUFFQSxtQ0FBS0QsT0FBTCxFQUFjLFVBQUNFLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsTUFBaEIsRUFBMkI7QUFDdkMsZ0JBQUlELE1BQUosRUFBWTtBQUNWbEIsa0JBQUlTLE9BQUosQ0FBWSxhQUFhUyxNQUF6QjtBQUNEOztBQUVELGdCQUFJQyxNQUFKLEVBQVk7QUFDVixxQkFBT1gsT0FBTyxhQUFhVyxNQUFwQixDQUFQO0FBQ0Q7O0FBRUQsZ0JBQUlGLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixxQkFBT1QsT0FBTyxpQkFBaUJXLE1BQXhCLENBQVA7QUFDRDs7QUFFRFosZ0RBQWlDRixPQUFqQztBQUNELFdBZEQ7QUFlQTtBQUNELFNBekJELEVBeUJHLElBekJIO0FBMEJELE9BakNEO0FBa0NELEtBdkNEO0FBd0NELEdBNUNNLENBQVA7QUE2Q0Q7O0FBRUQsU0FBU2UsT0FBVCxDQUFrQmxCLE9BQWxCLEVBQTJCO0FBQ3pCLE1BQUksQ0FBQ0EsUUFBUW1CLEdBQWIsRUFBa0I7QUFDaEIsV0FBT2YsUUFBUUMsT0FBUixDQUFnQixLQUFoQixDQUFQO0FBQ0Q7O0FBSHdCLE1BS2pCZSxJQUxpQixHQUtScEIsT0FMUSxDQUtqQm9CLElBTGlCOztBQU16QixNQUFNQyxNQUFNLG1CQUFaOztBQUVBLFNBQU9BLElBQUlDLElBQUosQ0FBU3RCLFFBQVFFLE1BQWpCLEVBQ0pxQixJQURJLENBQ0M7QUFBQSxXQUFNRixJQUFJRyxZQUFKLEVBQU47QUFBQSxHQURELEVBRUpELElBRkksQ0FFQyx5QkFBaUI7QUFDckIsc0JBQUdFLFNBQUgsQ0FBYSxlQUFLWCxJQUFMLENBQVVkLFFBQVFHLE9BQWxCLEVBQThCaUIsSUFBOUIsVUFBYixFQUF3RE0sYUFBeEQ7QUFDRCxHQUpJLENBQVA7QUFLRDs7QUFFYyxTQUFTN0IsSUFBVCxDQUFlOEIsUUFBZixFQUF1QztBQUFBLE1BQWQzQixPQUFjLHVFQUFKLEVBQUk7O0FBQ3BEQSxVQUFRb0IsSUFBUixHQUFlTyxTQUFTUCxJQUF4QjtBQUNBcEIsVUFBUUMsR0FBUixHQUFjMEIsU0FBUzFCLEdBQVQsSUFBZ0IsZUFBS0ksT0FBTCxDQUFhc0IsU0FBUzFCLEdBQXRCLENBQTlCO0FBQ0FELFVBQVFHLE9BQVIsR0FBa0J3QixTQUFTQyxTQUEzQjtBQUNBNUIsVUFBUUUsTUFBUixHQUFpQixlQUFLWSxJQUFMLENBQVVhLFNBQVNDLFNBQW5CLEVBQThCLFFBQTlCLENBQWpCO0FBQ0E1QixVQUFRbUIsR0FBUixHQUFjbkIsUUFBUW1CLEdBQVIsSUFBZSxLQUE3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBcEIsZ0JBQWNDLE9BQWQ7QUFDRTtBQURGLEdBRUd1QixJQUZILENBRVEsVUFBVU0sT0FBVixFQUFtQjtBQUN2QixXQUFPWCxRQUFRbEIsT0FBUixFQUFpQnVCLElBQWpCLENBQXNCLFlBQU07QUFDakN6QixVQUFJZ0MsT0FBSixDQUFZRCxPQUFaO0FBQ0EvQixVQUFJaUMsSUFBSjtBQUNELEtBSE0sQ0FBUDtBQUlELEdBUEg7QUFRRTtBQVJGLEdBU0dDLEtBVEgsQ0FTUyxVQUFVakIsS0FBVixFQUFpQjtBQUN0QmpCLFFBQUlpQixLQUFKLENBQVVBLE1BQU1rQixLQUFOLElBQWVsQixLQUF6QjtBQUNELEdBWEg7QUFZRCIsImZpbGUiOiJwYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTmF0aXZlXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuLy8gbnBtXG5pbXBvcnQgQ2hyb21lRXh0ZW5zaW9uIGZyb20gJ2NyeCc7XG5pbXBvcnQgY2hyb21lQmluYXJ5UGF0aCBmcm9tICdjaHJvbWUtbG9jYXRpb24nO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcblxuXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuXG5cbi8qKlxuICogR2VuZXJhdGUgZXh0ZW5zaW9uIGZpbGUgaW5zaWRlIHJlbGVhc2UgcGF0aFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCBSZWxlYXNlIGRpcmVjdG9yeSBwYXRoXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiBtYWtlRXh0ZW5zaW9uIChvcHRpb25zKSB7XG4gIGNvbnN0IHsga2V5LCBvdXRwdXQsIHJlbGVhc2UgfSA9IG9wdGlvbnM7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsb2cucGVuZGluZyhgTW92aW5nIHNvdXJjZSBmaWxlcyBmcm9tICcke3JlbGVhc2V9JyBpbnRvICcke291dHB1dH0nYCk7XG5cbiAgICAvLyBNb3ZlIGZpbGVzIHRvIHN1Yi1kaXJlY3RvcnkgYnkgdXNpbmcgYSB0bXAgdGVtcG9yYXJ5IGRpclxuICAgIGZzLm1vdmUocmVsZWFzZSwgYCR7cmVsZWFzZX1fdG1wYCwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG5cbiAgICAgIGZzLm1vdmUoYCR7cmVsZWFzZX1fdG1wYCwgb3V0cHV0LCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cucGVuZGluZyhgQnVpbGRpbmcgZXh0ZW5zaW9uIGludG8gJyR7cmVsZWFzZX0nYCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29tbWFuZFBhcnRzID0gW2AnJHtjaHJvbWVCaW5hcnlQYXRofSdgLCBgLS1wYWNrLWV4dGVuc2lvbj0ke291dHB1dH1gXTtcblxuICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGNvbW1hbmRQYXJ0cy5wdXNoKGAtLXBhY2stZXh0ZW5zaW9uLWtleT0ke2tleX1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gYCQoJHtjb21tYW5kUGFydHMuam9pbignICcpfSlgO1xuXG4gICAgICAgICAgZXhlYyhjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3Rkb3V0KSB7XG4gICAgICAgICAgICAgIGxvZy5wZW5kaW5nKCdzdGRvdXQ6ICcgKyBzdGRvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoJ3N0ZGVycjogJyArIHN0ZGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdleGVjIGVycm9yOiAnICsgc3RkZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZShgRXh0ZW5zaW9uIGJ1aWxkZWQgaW4gJyR7cmVsZWFzZX0nYCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gTG9uZyBlbm91Z2h0IHRvIHByZXZlbnQgc29tZSB1bmV4cGVjdGVkIGVycm9yc1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZVppcCAob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMuemlwKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gIH1cblxuICBjb25zdCB7IG5hbWUgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGNyeCA9IG5ldyBDaHJvbWVFeHRlbnNpb24oKTtcblxuICByZXR1cm4gY3J4LmxvYWQob3B0aW9ucy5vdXRwdXQpXG4gICAgLnRoZW4oKCkgPT4gY3J4LmxvYWRDb250ZW50cygpKVxuICAgIC50aGVuKGFyY2hpdmVCdWZmZXIgPT4ge1xuICAgICAgZnMud3JpdGVGaWxlKHBhdGguam9pbihvcHRpb25zLnJlbGVhc2UsIGAke25hbWV9LnppcGApLCBhcmNoaXZlQnVmZmVyKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFjayAobWFuaWZlc3QsIG9wdGlvbnMgPSB7fSkge1xuICBvcHRpb25zLm5hbWUgPSBtYW5pZmVzdC5uYW1lO1xuICBvcHRpb25zLmtleSA9IG1hbmlmZXN0LmtleSAmJiBwYXRoLnJlc29sdmUobWFuaWZlc3Qua2V5KTtcbiAgb3B0aW9ucy5yZWxlYXNlID0gbWFuaWZlc3QuYnVpbGRQYXRoO1xuICBvcHRpb25zLm91dHB1dCA9IHBhdGguam9pbihtYW5pZmVzdC5idWlsZFBhdGgsICdzb3VyY2UnKTtcbiAgb3B0aW9ucy56aXAgPSBvcHRpb25zLnppcCB8fCBmYWxzZTtcblxuICAvLyBUT0RPOiBjaGVjayBpZiByZWxlYXNlIGRpcmVjdG9yeSBjb250YWluICoua2V5IGZpbGVcbiAgLy8gSWYgeWVzLCB0aGVuIGFzayB1c2VyIGlmXG4gIC8vIDEpIHdhbnQgdG8gdXNlIGl0IGFzIGtleSBmb3IgYnVpbGRcbiAgLy8gMikgcmVhbGx5IHJlYWxseSByZWFsbHkgd2FudCB0byBvdmVycmlkZSBpdFxuICBtYWtlRXh0ZW5zaW9uKG9wdGlvbnMpXG4gICAgLy8gRXh0ZW5zaW9uIGRvbmVcbiAgICAudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG1ha2VaaXAob3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgIGxvZy5zdWNjZXNzKG1lc3NhZ2UpO1xuICAgICAgICBsb2cuZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAvLyBTb21lIGVycm9yIGhhcHBlbmVkXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgbG9nLmVycm9yKGVycm9yLnN0YWNrIHx8IGVycm9yKTtcbiAgICB9KTtcbn1cbiJdfQ==