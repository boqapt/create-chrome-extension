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
          var commandParts = ['\'' + _chromeLocation2.default + '\'', '--disable-gpu', '--pack-extension=' + output];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWNrLmpzIl0sIm5hbWVzIjpbInBhY2siLCJsb2ciLCJtYWtlRXh0ZW5zaW9uIiwib3B0aW9ucyIsImtleSIsIm91dHB1dCIsInJlbGVhc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBlbmRpbmciLCJtb3ZlIiwiZXJyIiwic2V0VGltZW91dCIsImNvbW1hbmRQYXJ0cyIsInB1c2giLCJjb21tYW5kIiwiam9pbiIsImVycm9yIiwic3Rkb3V0Iiwic3RkZXJyIiwibWFuaWZlc3QiLCJidWlsZFBhdGgiLCJ0aGVuIiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJkb25lIiwiY2F0Y2giLCJzdGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBa0V3QkEsSTs7QUFqRXhCOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUVBOztJQUFZQyxHOzs7Ozs7QUFFWjs7Ozs7O0FBTUEsU0FBU0MsYUFBVCxDQUF3QkMsT0FBeEIsRUFBaUM7QUFBQSxNQUN2QkMsR0FEdUIsR0FDRUQsT0FERixDQUN2QkMsR0FEdUI7QUFBQSxNQUNsQkMsTUFEa0IsR0FDRUYsT0FERixDQUNsQkUsTUFEa0I7QUFBQSxNQUNWQyxPQURVLEdBQ0VILE9BREYsQ0FDVkcsT0FEVTs7O0FBRy9CLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q1IsUUFBSVMsT0FBSixpQ0FBeUNKLE9BQXpDLGtCQUEyREQsTUFBM0Q7O0FBRUE7QUFDQSxzQkFBR00sSUFBSCxDQUFRTCxPQUFSLEVBQW9CQSxPQUFwQixXQUFtQyxVQUFDTSxHQUFELEVBQVM7QUFDMUMsVUFBSUEsR0FBSixFQUFTO0FBQ1AsZUFBT0gsT0FBT0csR0FBUCxDQUFQO0FBQ0Q7O0FBRUQsd0JBQUdELElBQUgsQ0FBV0wsT0FBWCxXQUEwQkQsTUFBMUIsRUFBa0MsVUFBQ08sR0FBRCxFQUFTO0FBQ3pDLFlBQUlBLEdBQUosRUFBUztBQUNQLGlCQUFPSCxPQUFPRyxHQUFQLENBQVA7QUFDRDs7QUFFRFgsWUFBSVMsT0FBSixnQ0FBd0NKLE9BQXhDOztBQUVBTyxtQkFBVyxZQUFNO0FBQ2YsY0FBTUMsZUFBZSx5Q0FBMEIsZUFBMUIsd0JBQStEVCxNQUEvRCxDQUFyQjs7QUFFQSxjQUFJRCxHQUFKLEVBQVM7QUFDUFUseUJBQWFDLElBQWIsMkJBQTBDWCxHQUExQztBQUNEOztBQUVELGNBQU1ZLGlCQUFlRixhQUFhRyxJQUFiLENBQWtCLEdBQWxCLENBQWYsTUFBTjs7QUFFQSxtQ0FBS0QsT0FBTCxFQUFjLFVBQUNFLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsTUFBaEIsRUFBMkI7QUFDdkMsZ0JBQUlELE1BQUosRUFBWTtBQUNWbEIsa0JBQUlTLE9BQUosQ0FBWSxhQUFhUyxNQUF6QjtBQUNEOztBQUVELGdCQUFJQyxNQUFKLEVBQVk7QUFDVixxQkFBT1gsT0FBTyxhQUFhVyxNQUFwQixDQUFQO0FBQ0Q7O0FBRUQsZ0JBQUlGLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixxQkFBT1QsT0FBTyxpQkFBaUJXLE1BQXhCLENBQVA7QUFDRDs7QUFFRFosZ0RBQWlDRixPQUFqQztBQUNELFdBZEQ7QUFlQTtBQUNELFNBekJELEVBeUJHLElBekJIO0FBMEJELE9BakNEO0FBa0NELEtBdkNEO0FBd0NELEdBNUNNLENBQVA7QUE2Q0Q7O0FBNUREO0FBSkE7QUFrRWUsU0FBU04sSUFBVCxDQUFlcUIsUUFBZixFQUF5QjtBQUN0QyxNQUFNbEIsVUFBVTtBQUNkQyxTQUFLaUIsU0FBU2pCLEdBQVQsSUFBZ0IsZUFBS0ksT0FBTCxDQUFhYSxTQUFTakIsR0FBdEIsQ0FEUDtBQUVkRSxhQUFTZSxTQUFTQyxTQUZKO0FBR2RqQixZQUFRLGVBQUtZLElBQUwsQ0FBVUksU0FBU0MsU0FBbkIsRUFBOEIsUUFBOUI7QUFITSxHQUFoQjs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBcEIsZ0JBQWNDLE9BQWQ7QUFDRTtBQURGLEdBRUdvQixJQUZILENBRVEsVUFBVUMsT0FBVixFQUFtQjtBQUN2QnZCLFFBQUl3QixPQUFKLENBQVlELE9BQVo7QUFDQXZCLFFBQUl5QixJQUFKO0FBQ0QsR0FMSDtBQU1FO0FBTkYsR0FPR0MsS0FQSCxDQU9TLFVBQVVULEtBQVYsRUFBaUI7QUFDdEJqQixRQUFJaUIsS0FBSixDQUFVQSxNQUFNVSxLQUFOLElBQWVWLEtBQXpCO0FBQ0QsR0FUSDtBQVVEIiwiZmlsZSI6InBhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOYXRpdmVcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG4vLyBucG1cbmltcG9ydCBjaHJvbWVCaW5hcnlQYXRoIGZyb20gJ2Nocm9tZS1sb2NhdGlvbic7XG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuXG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuXG4vKipcbiAqIEdlbmVyYXRlIGV4dGVuc2lvbiBmaWxlIGluc2lkZSByZWxlYXNlIHBhdGhcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGggUmVsZWFzZSBkaXJlY3RvcnkgcGF0aFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZnVuY3Rpb24gbWFrZUV4dGVuc2lvbiAob3B0aW9ucykge1xuICBjb25zdCB7IGtleSwgb3V0cHV0LCByZWxlYXNlIH0gPSBvcHRpb25zO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbG9nLnBlbmRpbmcoYE1vdmluZyBzb3VyY2UgZmlsZXMgZnJvbSAnJHtyZWxlYXNlfScgaW50byAnJHtvdXRwdXR9J2ApO1xuXG4gICAgLy8gTW92ZSBmaWxlcyB0byBzdWItZGlyZWN0b3J5IGJ5IHVzaW5nIGEgdG1wIHRlbXBvcmFyeSBkaXJcbiAgICBmcy5tb3ZlKHJlbGVhc2UsIGAke3JlbGVhc2V9X3RtcGAsIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICBmcy5tb3ZlKGAke3JlbGVhc2V9X3RtcGAsIG91dHB1dCwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nLnBlbmRpbmcoYEJ1aWxkaW5nIGV4dGVuc2lvbiBpbnRvICcke3JlbGVhc2V9J2ApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbW1hbmRQYXJ0cyA9IFtgJyR7Y2hyb21lQmluYXJ5UGF0aH0nYCwgJy0tZGlzYWJsZS1ncHUnLCBgLS1wYWNrLWV4dGVuc2lvbj0ke291dHB1dH1gXTtcblxuICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGNvbW1hbmRQYXJ0cy5wdXNoKGAtLXBhY2stZXh0ZW5zaW9uLWtleT0ke2tleX1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gYCQoJHtjb21tYW5kUGFydHMuam9pbignICcpfSlgO1xuXG4gICAgICAgICAgZXhlYyhjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3Rkb3V0KSB7XG4gICAgICAgICAgICAgIGxvZy5wZW5kaW5nKCdzdGRvdXQ6ICcgKyBzdGRvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoJ3N0ZGVycjogJyArIHN0ZGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdleGVjIGVycm9yOiAnICsgc3RkZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZShgRXh0ZW5zaW9uIGJ1aWxkZWQgaW4gJyR7cmVsZWFzZX0nYCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gTG9uZyBlbm91Z2h0IHRvIHByZXZlbnQgc29tZSB1bmV4cGVjdGVkIGVycm9yc1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFjayAobWFuaWZlc3QpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBrZXk6IG1hbmlmZXN0LmtleSAmJiBwYXRoLnJlc29sdmUobWFuaWZlc3Qua2V5KSxcbiAgICByZWxlYXNlOiBtYW5pZmVzdC5idWlsZFBhdGgsXG4gICAgb3V0cHV0OiBwYXRoLmpvaW4obWFuaWZlc3QuYnVpbGRQYXRoLCAnc291cmNlJylcbiAgfTtcblxuICAvLyBUT0RPOiBjaGVjayBpZiByZWxlYXNlIGRpcmVjdG9yeSBjb250YWluICoua2V5IGZpbGVcbiAgLy8gSWYgeWVzLCB0aGVuIGFzayB1c2VyIGlmXG4gIC8vIDEpIHdhbnQgdG8gdXNlIGl0IGFzIGtleSBmb3IgYnVpbGRcbiAgLy8gMikgcmVhbGx5IHJlYWxseSByZWFsbHkgd2FudCB0byBvdmVycmlkZSBpdFxuICBtYWtlRXh0ZW5zaW9uKG9wdGlvbnMpXG4gICAgLy8gRXh0ZW5zaW9uIGRvbmVcbiAgICAudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgbG9nLnN1Y2Nlc3MobWVzc2FnZSk7XG4gICAgICBsb2cuZG9uZSgpO1xuICAgIH0pXG4gICAgLy8gU29tZSBlcnJvciBoYXBwZW5lZFxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihlcnJvci5zdGFjayB8fCBlcnJvcik7XG4gICAgfSk7XG59XG4iXX0=