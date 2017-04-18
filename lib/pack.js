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

  options.name = manifest.loadManifest().name;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWNrLmpzIl0sIm5hbWVzIjpbInBhY2siLCJsb2ciLCJtYWtlRXh0ZW5zaW9uIiwib3B0aW9ucyIsImtleSIsIm91dHB1dCIsInJlbGVhc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBlbmRpbmciLCJtb3ZlIiwiZXJyIiwic2V0VGltZW91dCIsImNvbW1hbmRQYXJ0cyIsInB1c2giLCJjb21tYW5kIiwiam9pbiIsImVycm9yIiwic3Rkb3V0Iiwic3RkZXJyIiwibWFrZVppcCIsInppcCIsIm5hbWUiLCJjcngiLCJsb2FkIiwidGhlbiIsImxvYWRDb250ZW50cyIsIndyaXRlRmlsZSIsImFyY2hpdmVCdWZmZXIiLCJtYW5pZmVzdCIsImxvYWRNYW5pZmVzdCIsImJ1aWxkUGF0aCIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwiZG9uZSIsImNhdGNoIiwic3RhY2siXSwibWFwcGluZ3MiOiI7Ozs7O2tCQW9Gd0JBLEk7O0FBbkZ4Qjs7OztBQUNBOztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOztJQUFZQyxHOzs7Ozs7QUFHWjs7Ozs7Ozs7QUFUQTtBQUpBO0FBbUJBLFNBQVNDLGFBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDO0FBQUEsTUFDdkJDLEdBRHVCLEdBQ0VELE9BREYsQ0FDdkJDLEdBRHVCO0FBQUEsTUFDbEJDLE1BRGtCLEdBQ0VGLE9BREYsQ0FDbEJFLE1BRGtCO0FBQUEsTUFDVkMsT0FEVSxHQUNFSCxPQURGLENBQ1ZHLE9BRFU7OztBQUcvQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENSLFFBQUlTLE9BQUosaUNBQXlDSixPQUF6QyxrQkFBMkRELE1BQTNEOztBQUVBO0FBQ0Esc0JBQUdNLElBQUgsQ0FBUUwsT0FBUixFQUFvQkEsT0FBcEIsV0FBbUMsVUFBQ00sR0FBRCxFQUFTO0FBQzFDLFVBQUlBLEdBQUosRUFBUztBQUNQLGVBQU9ILE9BQU9HLEdBQVAsQ0FBUDtBQUNEOztBQUVELHdCQUFHRCxJQUFILENBQVdMLE9BQVgsV0FBMEJELE1BQTFCLEVBQWtDLFVBQUNPLEdBQUQsRUFBUztBQUN6QyxZQUFJQSxHQUFKLEVBQVM7QUFDUCxpQkFBT0gsT0FBT0csR0FBUCxDQUFQO0FBQ0Q7O0FBRURYLFlBQUlTLE9BQUosZ0NBQXdDSixPQUF4Qzs7QUFFQU8sbUJBQVcsWUFBTTtBQUNmLGNBQU1DLGVBQWUseUNBQTBCLGVBQTFCLHdCQUErRFQsTUFBL0QsQ0FBckI7O0FBRUEsY0FBSUQsR0FBSixFQUFTO0FBQ1BVLHlCQUFhQyxJQUFiLDJCQUEwQ1gsR0FBMUM7QUFDRDs7QUFFRCxjQUFNWSxpQkFBZUYsYUFBYUcsSUFBYixDQUFrQixHQUFsQixDQUFmLE1BQU47O0FBRUEsbUNBQUtELE9BQUwsRUFBYyxVQUFDRSxLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLE1BQWhCLEVBQTJCO0FBQ3ZDLGdCQUFJRCxNQUFKLEVBQVk7QUFDVmxCLGtCQUFJUyxPQUFKLENBQVksYUFBYVMsTUFBekI7QUFDRDs7QUFFRCxnQkFBSUMsTUFBSixFQUFZO0FBQ1YscUJBQU9YLE9BQU8sYUFBYVcsTUFBcEIsQ0FBUDtBQUNEOztBQUVELGdCQUFJRixVQUFVLElBQWQsRUFBb0I7QUFDbEIscUJBQU9ULE9BQU8saUJBQWlCVyxNQUF4QixDQUFQO0FBQ0Q7O0FBRURaLGdEQUFpQ0YsT0FBakM7QUFDRCxXQWREO0FBZUE7QUFDRCxTQXpCRCxFQXlCRyxJQXpCSDtBQTBCRCxPQWpDRDtBQWtDRCxLQXZDRDtBQXdDRCxHQTVDTSxDQUFQO0FBNkNEOztBQUVELFNBQVNlLE9BQVQsQ0FBa0JsQixPQUFsQixFQUEyQjtBQUN6QixNQUFJLENBQUNBLFFBQVFtQixHQUFiLEVBQWtCO0FBQ2hCLFdBQU9mLFFBQVFDLE9BQVIsQ0FBZ0IsS0FBaEIsQ0FBUDtBQUNEOztBQUh3QixNQUtqQmUsSUFMaUIsR0FLUnBCLE9BTFEsQ0FLakJvQixJQUxpQjs7QUFNekIsTUFBTUMsTUFBTSxtQkFBWjs7QUFFQSxTQUFPQSxJQUFJQyxJQUFKLENBQVN0QixRQUFRRSxNQUFqQixFQUNKcUIsSUFESSxDQUNDO0FBQUEsV0FBTUYsSUFBSUcsWUFBSixFQUFOO0FBQUEsR0FERCxFQUVKRCxJQUZJLENBRUMseUJBQWlCO0FBQ3JCLHNCQUFHRSxTQUFILENBQWEsZUFBS1gsSUFBTCxDQUFVZCxRQUFRRyxPQUFsQixFQUE4QmlCLElBQTlCLFVBQWIsRUFBd0RNLGFBQXhEO0FBQ0QsR0FKSSxDQUFQO0FBS0Q7O0FBRWMsU0FBUzdCLElBQVQsQ0FBZThCLFFBQWYsRUFBdUM7QUFBQSxNQUFkM0IsT0FBYyx1RUFBSixFQUFJOztBQUNwREEsVUFBUW9CLElBQVIsR0FBZU8sU0FBU0MsWUFBVCxHQUF3QlIsSUFBdkM7QUFDQXBCLFVBQVFDLEdBQVIsR0FBYzBCLFNBQVMxQixHQUFULElBQWdCLGVBQUtJLE9BQUwsQ0FBYXNCLFNBQVMxQixHQUF0QixDQUE5QjtBQUNBRCxVQUFRRyxPQUFSLEdBQWtCd0IsU0FBU0UsU0FBM0I7QUFDQTdCLFVBQVFFLE1BQVIsR0FBaUIsZUFBS1ksSUFBTCxDQUFVYSxTQUFTRSxTQUFuQixFQUE4QixRQUE5QixDQUFqQjtBQUNBN0IsVUFBUW1CLEdBQVIsR0FBY25CLFFBQVFtQixHQUFSLElBQWUsS0FBN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQXBCLGdCQUFjQyxPQUFkO0FBQ0U7QUFERixHQUVHdUIsSUFGSCxDQUVRLFVBQVVPLE9BQVYsRUFBbUI7QUFDdkIsV0FBT1osUUFBUWxCLE9BQVIsRUFBaUJ1QixJQUFqQixDQUFzQixZQUFNO0FBQ2pDekIsVUFBSWlDLE9BQUosQ0FBWUQsT0FBWjtBQUNBaEMsVUFBSWtDLElBQUo7QUFDRCxLQUhNLENBQVA7QUFJRCxHQVBIO0FBUUU7QUFSRixHQVNHQyxLQVRILENBU1MsVUFBVWxCLEtBQVYsRUFBaUI7QUFDdEJqQixRQUFJaUIsS0FBSixDQUFVQSxNQUFNbUIsS0FBTixJQUFlbkIsS0FBekI7QUFDRCxHQVhIO0FBWUQiLCJmaWxlIjoicGFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5hdGl2ZVxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5cbi8vIG5wbVxuaW1wb3J0IENocm9tZUV4dGVuc2lvbiBmcm9tICdjcngnO1xuaW1wb3J0IGNocm9tZUJpbmFyeVBhdGggZnJvbSAnY2hyb21lLWxvY2F0aW9uJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5cblxuaW1wb3J0ICogYXMgbG9nIGZyb20gJy4vdXRpbHMvbG9nJztcblxuXG4vKipcbiAqIEdlbmVyYXRlIGV4dGVuc2lvbiBmaWxlIGluc2lkZSByZWxlYXNlIHBhdGhcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGggUmVsZWFzZSBkaXJlY3RvcnkgcGF0aFxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZnVuY3Rpb24gbWFrZUV4dGVuc2lvbiAob3B0aW9ucykge1xuICBjb25zdCB7IGtleSwgb3V0cHV0LCByZWxlYXNlIH0gPSBvcHRpb25zO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbG9nLnBlbmRpbmcoYE1vdmluZyBzb3VyY2UgZmlsZXMgZnJvbSAnJHtyZWxlYXNlfScgaW50byAnJHtvdXRwdXR9J2ApO1xuXG4gICAgLy8gTW92ZSBmaWxlcyB0byBzdWItZGlyZWN0b3J5IGJ5IHVzaW5nIGEgdG1wIHRlbXBvcmFyeSBkaXJcbiAgICBmcy5tb3ZlKHJlbGVhc2UsIGAke3JlbGVhc2V9X3RtcGAsIChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICBmcy5tb3ZlKGAke3JlbGVhc2V9X3RtcGAsIG91dHB1dCwgKGVycikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nLnBlbmRpbmcoYEJ1aWxkaW5nIGV4dGVuc2lvbiBpbnRvICcke3JlbGVhc2V9J2ApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbW1hbmRQYXJ0cyA9IFtgJyR7Y2hyb21lQmluYXJ5UGF0aH0nYCwgJy0tZGlzYWJsZS1ncHUnLCBgLS1wYWNrLWV4dGVuc2lvbj0ke291dHB1dH1gXTtcblxuICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGNvbW1hbmRQYXJ0cy5wdXNoKGAtLXBhY2stZXh0ZW5zaW9uLWtleT0ke2tleX1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gYCQoJHtjb21tYW5kUGFydHMuam9pbignICcpfSlgO1xuXG4gICAgICAgICAgZXhlYyhjb21tYW5kLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3Rkb3V0KSB7XG4gICAgICAgICAgICAgIGxvZy5wZW5kaW5nKCdzdGRvdXQ6ICcgKyBzdGRvdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoJ3N0ZGVycjogJyArIHN0ZGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdleGVjIGVycm9yOiAnICsgc3RkZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZShgRXh0ZW5zaW9uIGJ1aWxkZWQgaW4gJyR7cmVsZWFzZX0nYCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gTG9uZyBlbm91Z2h0IHRvIHByZXZlbnQgc29tZSB1bmV4cGVjdGVkIGVycm9yc1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZVppcCAob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMuemlwKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gIH1cblxuICBjb25zdCB7IG5hbWUgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGNyeCA9IG5ldyBDaHJvbWVFeHRlbnNpb24oKTtcblxuICByZXR1cm4gY3J4LmxvYWQob3B0aW9ucy5vdXRwdXQpXG4gICAgLnRoZW4oKCkgPT4gY3J4LmxvYWRDb250ZW50cygpKVxuICAgIC50aGVuKGFyY2hpdmVCdWZmZXIgPT4ge1xuICAgICAgZnMud3JpdGVGaWxlKHBhdGguam9pbihvcHRpb25zLnJlbGVhc2UsIGAke25hbWV9LnppcGApLCBhcmNoaXZlQnVmZmVyKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFjayAobWFuaWZlc3QsIG9wdGlvbnMgPSB7fSkge1xuICBvcHRpb25zLm5hbWUgPSBtYW5pZmVzdC5sb2FkTWFuaWZlc3QoKS5uYW1lO1xuICBvcHRpb25zLmtleSA9IG1hbmlmZXN0LmtleSAmJiBwYXRoLnJlc29sdmUobWFuaWZlc3Qua2V5KTtcbiAgb3B0aW9ucy5yZWxlYXNlID0gbWFuaWZlc3QuYnVpbGRQYXRoO1xuICBvcHRpb25zLm91dHB1dCA9IHBhdGguam9pbihtYW5pZmVzdC5idWlsZFBhdGgsICdzb3VyY2UnKTtcbiAgb3B0aW9ucy56aXAgPSBvcHRpb25zLnppcCB8fCBmYWxzZTtcblxuICAvLyBUT0RPOiBjaGVjayBpZiByZWxlYXNlIGRpcmVjdG9yeSBjb250YWluICoua2V5IGZpbGVcbiAgLy8gSWYgeWVzLCB0aGVuIGFzayB1c2VyIGlmXG4gIC8vIDEpIHdhbnQgdG8gdXNlIGl0IGFzIGtleSBmb3IgYnVpbGRcbiAgLy8gMikgcmVhbGx5IHJlYWxseSByZWFsbHkgd2FudCB0byBvdmVycmlkZSBpdFxuICBtYWtlRXh0ZW5zaW9uKG9wdGlvbnMpXG4gICAgLy8gRXh0ZW5zaW9uIGRvbmVcbiAgICAudGhlbihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIG1ha2VaaXAob3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgIGxvZy5zdWNjZXNzKG1lc3NhZ2UpO1xuICAgICAgICBsb2cuZG9uZSgpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAvLyBTb21lIGVycm9yIGhhcHBlbmVkXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgbG9nLmVycm9yKGVycm9yLnN0YWNrIHx8IGVycm9yKTtcbiAgICB9KTtcbn1cbiJdfQ==