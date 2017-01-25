'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pack;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _child_process = require('child_process');

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

// npm
// Native
function pack(manifest) {
  var options = {
    key: manifest.key && _path2.default.resolve(manifest.key),
    release: manifest.buildPath,
    output: _path2.default.join(manifest.buildPath, 'source')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWNrLmpzIl0sIm5hbWVzIjpbInBhY2siLCJsb2ciLCJtYWtlRXh0ZW5zaW9uIiwib3B0aW9ucyIsImtleSIsIm91dHB1dCIsInJlbGVhc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBlbmRpbmciLCJtb3ZlIiwiZXJyIiwic2V0VGltZW91dCIsImNvbW1hbmRQYXJ0cyIsInB1c2giLCJjb21tYW5kIiwiam9pbiIsImVycm9yIiwic3Rkb3V0Iiwic3RkZXJyIiwibWFuaWZlc3QiLCJidWlsZFBhdGgiLCJ0aGVuIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJkb25lIiwiY2F0Y2giLCJzdGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBa0V3QkEsSTs7QUFqRXhCOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUVBOztJQUFZQyxHOzs7Ozs7QUFFWjs7Ozs7O0FBTUEsU0FBU0MsYUFBVCxDQUF3QkMsT0FBeEIsRUFBaUM7QUFBQSxNQUN2QkMsR0FEdUIsR0FDRUQsT0FERixDQUN2QkMsR0FEdUI7QUFBQSxNQUNsQkMsTUFEa0IsR0FDRUYsT0FERixDQUNsQkUsTUFEa0I7QUFBQSxNQUNWQyxPQURVLEdBQ0VILE9BREYsQ0FDVkcsT0FEVTs7O0FBRy9CLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1IsUUFBSVMsT0FBSixpQ0FBeUNKLE9BQXpDLGtCQUEyREQsTUFBM0Q7O0FBRUE7QUFDQSxzQkFBR00sSUFBSCxDQUFRTCxPQUFSLEVBQW9CQSxPQUFwQixXQUFtQyxVQUFDTSxHQUFELEVBQVM7QUFDMUMsVUFBSUEsR0FBSixFQUFTO0FBQ1AsZUFBT0gsT0FBT0csR0FBUCxDQUFQO0FBQ0Q7O0FBRUQsd0JBQUdELElBQUgsQ0FBV0wsT0FBWCxXQUEwQkQsTUFBMUIsRUFBa0MsVUFBQ08sR0FBRCxFQUFTO0FBQ3pDLFlBQUlBLEdBQUosRUFBUztBQUNQLGlCQUFPSCxPQUFPRyxHQUFQLENBQVA7QUFDRDs7QUFFRFgsWUFBSVMsT0FBSixnQ0FBd0NKLE9BQXhDOztBQUVBTyxtQkFBVyxZQUFNO0FBQ2YsY0FBTUMsZUFBZSwrREFBOENULE1BQTlDLENBQXJCOztBQUVBLGNBQUlELEdBQUosRUFBUztBQUNQVSx5QkFBYUMsSUFBYiwyQkFBMENYLEdBQTFDO0FBQ0Q7O0FBRUQsY0FBTVksaUJBQWVGLGFBQWFHLElBQWIsQ0FBa0IsR0FBbEIsQ0FBZixNQUFOOztBQUVBLG1DQUFLRCxPQUFMLEVBQWMsVUFBQ0UsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxNQUFoQixFQUEyQjtBQUN2QyxnQkFBSUQsTUFBSixFQUFZO0FBQ1ZsQixrQkFBSVMsT0FBSixDQUFZLGFBQWFTLE1BQXpCO0FBQ0Q7O0FBRUQsZ0JBQUlDLE1BQUosRUFBWTtBQUNWLHFCQUFPWCxPQUFPLGFBQWFXLE1BQXBCLENBQVA7QUFDRDs7QUFFRCxnQkFBSUYsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLHFCQUFPVCxPQUFPLGlCQUFpQlcsTUFBeEIsQ0FBUDtBQUNEOztBQUVEWixnREFBaUNGLE9BQWpDO0FBQ0QsV0FkRDtBQWVBO0FBQ0QsU0F6QkQsRUF5QkcsSUF6Qkg7QUEwQkQsT0FqQ0Q7QUFrQ0QsS0F2Q0Q7QUF3Q0QsR0E1Q00sQ0FBUDtBQTZDRDs7QUE1REQ7QUFKQTtBQWtFZSxTQUFTTixJQUFULENBQWVxQixRQUFmLEVBQXlCO0FBQ3RDLE1BQU1sQixVQUFVO0FBQ2RDLFNBQUtpQixTQUFTakIsR0FBVCxJQUFnQixlQUFLSSxPQUFMLENBQWFhLFNBQVNqQixHQUF0QixDQURQO0FBRWRFLGFBQVNlLFNBQVNDLFNBRko7QUFHZGpCLFlBQVEsZUFBS1ksSUFBTCxDQUFVSSxTQUFTQyxTQUFuQixFQUE4QixRQUE5QjtBQUhNLEdBQWhCOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0FwQixnQkFBY0MsT0FBZDtBQUNFO0FBREYsR0FFR29CLElBRkgsQ0FFUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3ZCdkIsUUFBSXdCLE9BQUosQ0FBWUQsT0FBWjtBQUNBdkIsUUFBSXlCLElBQUo7QUFDRCxHQUxIO0FBTUU7QUFORixHQU9HQyxLQVBILENBT1MsVUFBVVQsS0FBVixFQUFpQjtBQUN0QmpCLFFBQUlpQixLQUFKLENBQVVBLE1BQU1VLEtBQU4sSUFBZVYsS0FBekI7QUFDRCxHQVRIO0FBVUQiLCJmaWxlIjoicGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5hdGl2ZVxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbi8vIG5wbVxuaW1wb3J0IGNocm9tZUJpbmFyeVBhdGggZnJvbSAnY2hyb21lLWxvY2F0aW9uJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5cbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuL3V0aWxzL2xvZyc7XG5cbi8qKlxuICogR2VuZXJhdGUgZXh0ZW5zaW9uIGZpbGUgaW5zaWRlIHJlbGVhc2UgcGF0aFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gcGF0aCBSZWxlYXNlIGRpcmVjdG9yeSBwYXRoXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiBtYWtlRXh0ZW5zaW9uIChvcHRpb25zKSB7XG4gIGNvbnN0IHsga2V5LCBvdXRwdXQsIHJlbGVhc2UgfSA9IG9wdGlvbnM7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsb2cucGVuZGluZyhgTW92aW5nIHNvdXJjZSBmaWxlcyBmcm9tICcke3JlbGVhc2V9JyBpbnRvICcke291dHB1dH0nYCk7XG5cbiAgICAvLyBNb3ZlIGZpbGVzIHRvIHN1Yi1kaXJlY3RvcnkgYnkgdXNpbmcgYSB0bXAgdGVtcG9yYXJ5IGRpclxuICAgIGZzLm1vdmUocmVsZWFzZSwgYCR7cmVsZWFzZX1fdG1wYCwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG5cbiAgICAgIGZzLm1vdmUoYCR7cmVsZWFzZX1fdG1wYCwgb3V0cHV0LCAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cucGVuZGluZyhgQnVpbGRpbmcgZXh0ZW5zaW9uIGludG8gJyR7cmVsZWFzZX0nYCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29tbWFuZFBhcnRzID0gW2AnJHtjaHJvbWVCaW5hcnlQYXRofSdgLCBgLS1wYWNrLWV4dGVuc2lvbj0ke291dHB1dH1gXTtcblxuICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGNvbW1hbmRQYXJ0cy5wdXNoKGAtLXBhY2stZXh0ZW5zaW9uLWtleT0ke2tleX1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gYCQoJHtjb21tYW5kUGFydHMuam9pbignICcpfSlgO1xuXG4gICAgICAgICAgZXhlYyhjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3Rkb3V0KSB7XG4gICAgICAgICAgICAgIGxvZy5wZW5kaW5nKCdzdGRvdXQ6ICcgKyBzdGRvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoJ3N0ZGVycjogJyArIHN0ZGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdleGVjIGVycm9yOiAnICsgc3RkZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZShgRXh0ZW5zaW9uIGJ1aWxkZWQgaW4gJyR7cmVsZWFzZX0nYCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gTG9uZyBlbm91Z2h0IHRvIHByZXZlbnQgc29tZSB1bmV4cGVjdGVkIGVycm9yc1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFjayAobWFuaWZlc3QpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBrZXk6IG1hbmlmZXN0LmtleSAmJiBwYXRoLnJlc29sdmUobWFuaWZlc3Qua2V5KSxcbiAgICByZWxlYXNlOiBtYW5pZmVzdC5idWlsZFBhdGgsXG4gICAgb3V0cHV0OiBwYXRoLmpvaW4obWFuaWZlc3QuYnVpbGRQYXRoLCAnc291cmNlJylcbiAgfTtcblxuICAvLyBUT0RPOiBjaGVjayBpZiByZWxlYXNlIGRpcmVjdG9yeSBjb250YWluICoua2V5IGZpbGVcbiAgLy8gSWYgeWVzLCB0aGVuIGFzayB1c2VyIGlmXG4gIC8vIDEpIHdhbnQgdG8gdXNlIGl0IGFzIGtleSBmb3IgYnVpbGRcbiAgLy8gMikgcmVhbGx5IHJlYWxseSByZWFsbHkgd2FudCB0byBvdmVycmlkZSBpdFxuICBtYWtlRXh0ZW5zaW9uKG9wdGlvbnMpXG4gICAgLy8gRXh0ZW5zaW9uIGRvbmVcbiAgICAudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgbG9nLnN1Y2Nlc3MobWVzc2FnZSk7XG4gICAgICBsb2cuZG9uZSgpO1xuICAgIH0pXG4gICAgLy8gU29tZSBlcnJvciBoYXBwZW5lZFxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihlcnJvci5zdGFjayB8fCBlcnJvcik7XG4gICAgfSk7XG59XG4iXX0=