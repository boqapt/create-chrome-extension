'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (manifest, _ref) {
  var buildPath = _ref.buildPath,
      src = _ref.src;

  // Process icons
  if (manifest.icons && Object.keys(manifest.icons).length) {
    // Create asset directory
    var buildAssetsDirPath = _path2.default.join(buildPath, buildAssetsDir);
    _fsExtra2.default.mkdirsSync(buildAssetsDirPath);

    for (var name in manifest.icons) {
      processAsset(manifest.icons, name, src, buildPath);
    }
  }

  // TODO can there be more assets?

  return { manifest: manifest };
};

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _log = require('../../utils/log');

var log = _interopRequireWildcard(_log);

var _remove = require('../../utils/remove');

var Remove = _interopRequireWildcard(_remove);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildAssetsDir = '$assets';

var processAsset = function processAsset(object, key, src, buildPath) {
  var assetPath = object[key];

  log.pending('Processing asset \'' + assetPath + '\'');

  var assetSrcPath = _path2.default.join(src, assetPath);
  var buildAssetPath = _path2.default.join(buildAssetsDir, Remove.path(assetPath));
  var assetDestPath = _path2.default.join(buildPath, buildAssetPath);

  _fsExtra2.default.copySync(assetSrcPath, assetDestPath);

  object[key] = buildAssetPath;

  log.done('Done');

  return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3IvYXNzZXRzLmpzIl0sIm5hbWVzIjpbIm1hbmlmZXN0IiwiYnVpbGRQYXRoIiwic3JjIiwiaWNvbnMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYnVpbGRBc3NldHNEaXJQYXRoIiwiam9pbiIsImJ1aWxkQXNzZXRzRGlyIiwibWtkaXJzU3luYyIsIm5hbWUiLCJwcm9jZXNzQXNzZXQiLCJsb2ciLCJSZW1vdmUiLCJvYmplY3QiLCJrZXkiLCJhc3NldFBhdGgiLCJwZW5kaW5nIiwiYXNzZXRTcmNQYXRoIiwiYnVpbGRBc3NldFBhdGgiLCJwYXRoIiwiYXNzZXREZXN0UGF0aCIsImNvcHlTeW5jIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQTBCZSxVQUFVQSxRQUFWLFFBQXdDO0FBQUEsTUFBbEJDLFNBQWtCLFFBQWxCQSxTQUFrQjtBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFDckQ7QUFDQSxNQUFJRixTQUFTRyxLQUFULElBQWtCQyxPQUFPQyxJQUFQLENBQVlMLFNBQVNHLEtBQXJCLEVBQTRCRyxNQUFsRCxFQUEwRDtBQUN4RDtBQUNBLFFBQU1DLHFCQUFxQixlQUFLQyxJQUFMLENBQVVQLFNBQVYsRUFBcUJRLGNBQXJCLENBQTNCO0FBQ0Esc0JBQUdDLFVBQUgsQ0FBY0gsa0JBQWQ7O0FBRUEsU0FBSyxJQUFJSSxJQUFULElBQWlCWCxTQUFTRyxLQUExQixFQUFpQztBQUMvQlMsbUJBQWFaLFNBQVNHLEtBQXRCLEVBQTZCUSxJQUE3QixFQUFtQ1QsR0FBbkMsRUFBd0NELFNBQXhDO0FBQ0Q7QUFDRjs7QUFFRDs7QUFFQSxTQUFPLEVBQUVELGtCQUFGLEVBQVA7QUFDRCxDOztBQXpDRDs7OztBQUNBOzs7O0FBRUE7O0lBQVlhLEc7O0FBQ1o7O0lBQVlDLE07Ozs7OztBQUVaLElBQU1MLGlCQUFpQixTQUF2Qjs7QUFFQSxJQUFNRyxlQUFlLFNBQWZBLFlBQWUsQ0FBVUcsTUFBVixFQUFrQkMsR0FBbEIsRUFBdUJkLEdBQXZCLEVBQTRCRCxTQUE1QixFQUF1QztBQUMxRCxNQUFNZ0IsWUFBWUYsT0FBT0MsR0FBUCxDQUFsQjs7QUFFQUgsTUFBSUssT0FBSix5QkFBaUNELFNBQWpDOztBQUVBLE1BQU1FLGVBQWUsZUFBS1gsSUFBTCxDQUFVTixHQUFWLEVBQWVlLFNBQWYsQ0FBckI7QUFDQSxNQUFNRyxpQkFBaUIsZUFBS1osSUFBTCxDQUFVQyxjQUFWLEVBQTBCSyxPQUFPTyxJQUFQLENBQVlKLFNBQVosQ0FBMUIsQ0FBdkI7QUFDQSxNQUFNSyxnQkFBZ0IsZUFBS2QsSUFBTCxDQUFVUCxTQUFWLEVBQXFCbUIsY0FBckIsQ0FBdEI7O0FBRUEsb0JBQUdHLFFBQUgsQ0FBWUosWUFBWixFQUEwQkcsYUFBMUI7O0FBRUFQLFNBQU9DLEdBQVAsSUFBY0ksY0FBZDs7QUFFQVAsTUFBSVcsSUFBSjs7QUFFQSxTQUFPLElBQVA7QUFDRCxDQWhCRCIsImZpbGUiOiJhc3NldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi8uLi91dGlscy9sb2cnO1xuaW1wb3J0ICogYXMgUmVtb3ZlIGZyb20gJy4uLy4uL3V0aWxzL3JlbW92ZSc7XG5cbmNvbnN0IGJ1aWxkQXNzZXRzRGlyID0gJyRhc3NldHMnO1xuXG5jb25zdCBwcm9jZXNzQXNzZXQgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHNyYywgYnVpbGRQYXRoKSB7XG4gIGNvbnN0IGFzc2V0UGF0aCA9IG9iamVjdFtrZXldO1xuXG4gIGxvZy5wZW5kaW5nKGBQcm9jZXNzaW5nIGFzc2V0ICcke2Fzc2V0UGF0aH0nYCk7XG5cbiAgY29uc3QgYXNzZXRTcmNQYXRoID0gcGF0aC5qb2luKHNyYywgYXNzZXRQYXRoKTtcbiAgY29uc3QgYnVpbGRBc3NldFBhdGggPSBwYXRoLmpvaW4oYnVpbGRBc3NldHNEaXIsIFJlbW92ZS5wYXRoKGFzc2V0UGF0aCkpO1xuICBjb25zdCBhc3NldERlc3RQYXRoID0gcGF0aC5qb2luKGJ1aWxkUGF0aCwgYnVpbGRBc3NldFBhdGgpO1xuXG4gIGZzLmNvcHlTeW5jKGFzc2V0U3JjUGF0aCwgYXNzZXREZXN0UGF0aCk7XG5cbiAgb2JqZWN0W2tleV0gPSBidWlsZEFzc2V0UGF0aDtcblxuICBsb2cuZG9uZShgRG9uZWApO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1hbmlmZXN0LCB7IGJ1aWxkUGF0aCwgc3JjIH0pIHtcbiAgLy8gUHJvY2VzcyBpY29uc1xuICBpZiAobWFuaWZlc3QuaWNvbnMgJiYgT2JqZWN0LmtleXMobWFuaWZlc3QuaWNvbnMpLmxlbmd0aCkge1xuICAgIC8vIENyZWF0ZSBhc3NldCBkaXJlY3RvcnlcbiAgICBjb25zdCBidWlsZEFzc2V0c0RpclBhdGggPSBwYXRoLmpvaW4oYnVpbGRQYXRoLCBidWlsZEFzc2V0c0Rpcik7XG4gICAgZnMubWtkaXJzU3luYyhidWlsZEFzc2V0c0RpclBhdGgpO1xuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBtYW5pZmVzdC5pY29ucykge1xuICAgICAgcHJvY2Vzc0Fzc2V0KG1hbmlmZXN0Lmljb25zLCBuYW1lLCBzcmMsIGJ1aWxkUGF0aCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVE9ETyBjYW4gdGhlcmUgYmUgbW9yZSBhc3NldHM/XG5cbiAgcmV0dXJuIHsgbWFuaWZlc3QgfTtcbn1cbiJdfQ==