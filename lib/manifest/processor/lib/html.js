'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (htmlFilepath, src, build) {
  log.pending('Making html \'' + htmlFilepath + '\'');

  // Read body content
  var htmlContent = _fsExtra2.default.readFileSync(_path2.default.resolve(src, htmlFilepath), { encoding: 'utf8' });

  // Get just path and name ie: 'popup/index'
  var bareFilepath = Remove.extension(htmlFilepath);

  var scriptFilepath = bareFilepath + '.js';

  var webpackScriptUrl = process.env.NODE_ENV === 'development' ? _path2.default.join('https://localhost:3001', scriptFilepath) : '/' + scriptFilepath;
  var webpackScript = '<script src="' + webpackScriptUrl + '" async defer></script>';

  (0, _script2.default)(scriptFilepath, build);

  var html = makeLayout({
    body: htmlContent,
    script: webpackScript
  });

  var fullHtmlPath = _path2.default.join(build, htmlFilepath);

  _fsExtra2.default.mkdirsSync(Remove.file(fullHtmlPath));

  _fsExtra2.default.writeFileSync(fullHtmlPath, html);

  log.done();

  return scriptFilepath;
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _log = require('../../../utils/log');

var log = _interopRequireWildcard(_log);

var _remove = require('../../../utils/remove');

var Remove = _interopRequireWildcard(_remove);

var _script = require('./script');

var _script2 = _interopRequireDefault(_script);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeLayout = function makeLayout(_ref) {
  var script = _ref.script,
      body = _ref.body;

  return '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charSet="utf-8" />\n    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />\n  </head>\n  <body>\n    ' + body + '\n    ' + script + '\n  </body>\n</html>';
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3IvbGliL2h0bWwuanMiXSwibmFtZXMiOlsiaHRtbEZpbGVwYXRoIiwic3JjIiwiYnVpbGQiLCJsb2ciLCJwZW5kaW5nIiwiaHRtbENvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJyZXNvbHZlIiwiZW5jb2RpbmciLCJiYXJlRmlsZXBhdGgiLCJSZW1vdmUiLCJleHRlbnNpb24iLCJzY3JpcHRGaWxlcGF0aCIsIndlYnBhY2tTY3JpcHRVcmwiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJqb2luIiwid2VicGFja1NjcmlwdCIsImh0bWwiLCJtYWtlTGF5b3V0IiwiYm9keSIsInNjcmlwdCIsImZ1bGxIdG1sUGF0aCIsIm1rZGlyc1N5bmMiLCJmaWxlIiwid3JpdGVGaWxlU3luYyIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkF1QmUsVUFBVUEsWUFBVixFQUF3QkMsR0FBeEIsRUFBNkJDLEtBQTdCLEVBQW9DO0FBQ2pEQyxNQUFJQyxPQUFKLG9CQUE0QkosWUFBNUI7O0FBRUE7QUFDQSxNQUFNSyxjQUFjLGtCQUFHQyxZQUFILENBQWdCLGVBQUtDLE9BQUwsQ0FBYU4sR0FBYixFQUFrQkQsWUFBbEIsQ0FBaEIsRUFBaUQsRUFBRVEsVUFBVSxNQUFaLEVBQWpELENBQXBCOztBQUVBO0FBQ0EsTUFBTUMsZUFBZUMsT0FBT0MsU0FBUCxDQUFpQlgsWUFBakIsQ0FBckI7O0FBRUEsTUFBTVksaUJBQW9CSCxZQUFwQixRQUFOOztBQUVBLE1BQU1JLG1CQUFtQkMsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQXpCLEdBQXlDLGVBQUtDLElBQUwsQ0FBVSx3QkFBVixFQUFvQ0wsY0FBcEMsQ0FBekMsU0FBbUdBLGNBQTVIO0FBQ0EsTUFBTU0sa0NBQWdDTCxnQkFBaEMsNEJBQU47O0FBRUEsd0JBQU9ELGNBQVAsRUFBdUJWLEtBQXZCOztBQUVBLE1BQU1pQixPQUFPQyxXQUFXO0FBQ3RCQyxVQUFNaEIsV0FEZ0I7QUFFdEJpQixZQUFRSjtBQUZjLEdBQVgsQ0FBYjs7QUFLQSxNQUFNSyxlQUFlLGVBQUtOLElBQUwsQ0FBVWYsS0FBVixFQUFpQkYsWUFBakIsQ0FBckI7O0FBRUEsb0JBQUd3QixVQUFILENBQWNkLE9BQU9lLElBQVAsQ0FBWUYsWUFBWixDQUFkOztBQUVBLG9CQUFHRyxhQUFILENBQWlCSCxZQUFqQixFQUErQkosSUFBL0I7O0FBRUFoQixNQUFJd0IsSUFBSjs7QUFFQSxTQUFPZixjQUFQO0FBQ0QsQzs7QUFyREQ7Ozs7QUFDQTs7OztBQUVBOztJQUFZVCxHOztBQUNaOztJQUFZTyxNOztBQUNaOzs7Ozs7OztBQUVBLElBQU1VLGFBQWEsU0FBYkEsVUFBYSxPQUE0QjtBQUFBLE1BQWhCRSxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxNQUFSRCxJQUFRLFFBQVJBLElBQVE7O0FBQzdDLDJOQVFJQSxJQVJKLGNBU0lDLE1BVEo7QUFhRCxDQWREIiwiZmlsZSI6Imh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5cbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi8uLi8uLi91dGlscy9sb2cnO1xuaW1wb3J0ICogYXMgUmVtb3ZlIGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlbW92ZSc7XG5pbXBvcnQgc2NyaXB0IGZyb20gJy4vc2NyaXB0JztcblxuY29uc3QgbWFrZUxheW91dCA9IGZ1bmN0aW9uICh7IHNjcmlwdCwgYm9keSB9KSB7XG4gIHJldHVybiAoXG5gPCFET0NUWVBFIGh0bWw+XG48aHRtbD5cbiAgPGhlYWQ+XG4gICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICA8bWV0YSBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIiBuYW1lPVwidmlld3BvcnRcIiAvPlxuICA8L2hlYWQ+XG4gIDxib2R5PlxuICAgICR7Ym9keX1cbiAgICAke3NjcmlwdH1cbiAgPC9ib2R5PlxuPC9odG1sPmBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChodG1sRmlsZXBhdGgsIHNyYywgYnVpbGQpIHtcbiAgbG9nLnBlbmRpbmcoYE1ha2luZyBodG1sICcke2h0bWxGaWxlcGF0aH0nYCk7XG5cbiAgLy8gUmVhZCBib2R5IGNvbnRlbnRcbiAgY29uc3QgaHRtbENvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5yZXNvbHZlKHNyYywgaHRtbEZpbGVwYXRoKSwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pO1xuXG4gIC8vIEdldCBqdXN0IHBhdGggYW5kIG5hbWUgaWU6ICdwb3B1cC9pbmRleCdcbiAgY29uc3QgYmFyZUZpbGVwYXRoID0gUmVtb3ZlLmV4dGVuc2lvbihodG1sRmlsZXBhdGgpO1xuXG4gIGNvbnN0IHNjcmlwdEZpbGVwYXRoID0gYCR7YmFyZUZpbGVwYXRofS5qc2A7XG5cbiAgY29uc3Qgd2VicGFja1NjcmlwdFVybCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gcGF0aC5qb2luKCdodHRwczovL2xvY2FsaG9zdDozMDAxJywgc2NyaXB0RmlsZXBhdGgpIDogYC8ke3NjcmlwdEZpbGVwYXRofWA7XG4gIGNvbnN0IHdlYnBhY2tTY3JpcHQgPSBgPHNjcmlwdCBzcmM9XCIke3dlYnBhY2tTY3JpcHRVcmx9XCIgYXN5bmMgZGVmZXI+PC9zY3JpcHQ+YDtcblxuICBzY3JpcHQoc2NyaXB0RmlsZXBhdGgsIGJ1aWxkKTtcblxuICBjb25zdCBodG1sID0gbWFrZUxheW91dCh7XG4gICAgYm9keTogaHRtbENvbnRlbnQsXG4gICAgc2NyaXB0OiB3ZWJwYWNrU2NyaXB0XG4gIH0pO1xuXG4gIGNvbnN0IGZ1bGxIdG1sUGF0aCA9IHBhdGguam9pbihidWlsZCwgaHRtbEZpbGVwYXRoKTtcblxuICBmcy5ta2RpcnNTeW5jKFJlbW92ZS5maWxlKGZ1bGxIdG1sUGF0aCkpO1xuXG4gIGZzLndyaXRlRmlsZVN5bmMoZnVsbEh0bWxQYXRoLCBodG1sKTtcblxuICBsb2cuZG9uZSgpO1xuXG4gIHJldHVybiBzY3JpcHRGaWxlcGF0aDtcbn1cbiJdfQ==