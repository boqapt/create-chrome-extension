'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (manifest, _ref) {
  var buildPath = _ref.buildPath;

  var contentScripts = manifest['content_scripts'];

  if (!contentScripts) {
    return;
  }

  var scripts = [];

  contentScripts.forEach(function () {
    var contentScript = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    // TODO content_script can contain css too.
    // Maybe we can be strict, throw error and tell user to add css into scripts and leave it on webpack too
    contentScript.js.forEach(function (scriptPath) {
      (0, _script2.default)(scriptPath, buildPath);
      scripts.push(scriptPath);
    });
  });

  return { scripts: scripts };
};

var _script = require('./lib/script');

var _script2 = _interopRequireDefault(_script);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3IvY29udGVudC5qcyJdLCJuYW1lcyI6WyJtYW5pZmVzdCIsImJ1aWxkUGF0aCIsImNvbnRlbnRTY3JpcHRzIiwic2NyaXB0cyIsImZvckVhY2giLCJjb250ZW50U2NyaXB0IiwianMiLCJzY3JpcHRQYXRoIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUVlLFVBQVVBLFFBQVYsUUFBbUM7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7O0FBQ2hELE1BQU1DLGlCQUFpQkYsU0FBUyxpQkFBVCxDQUF2Qjs7QUFFQSxNQUFJLENBQUNFLGNBQUwsRUFBcUI7QUFBRTtBQUFTOztBQUVoQyxNQUFNQyxVQUFVLEVBQWhCOztBQUVBRCxpQkFBZUUsT0FBZixDQUF1QixZQUF3QjtBQUFBLFFBQXZCQyxhQUF1Qix1RUFBUCxFQUFPOztBQUM3QztBQUNBO0FBQ0FBLGtCQUFjQyxFQUFkLENBQWlCRixPQUFqQixDQUF5QixVQUFDRyxVQUFELEVBQWdCO0FBQ3ZDLDRCQUFPQSxVQUFQLEVBQW1CTixTQUFuQjtBQUNBRSxjQUFRSyxJQUFSLENBQWFELFVBQWI7QUFDRCxLQUhEO0FBSUQsR0FQRDs7QUFTQSxTQUFPLEVBQUVKLGdCQUFGLEVBQVA7QUFDRCxDOztBQW5CRCIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNjcmlwdCBmcm9tICcuL2xpYi9zY3JpcHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFuaWZlc3QsIHsgYnVpbGRQYXRoIH0pIHtcbiAgY29uc3QgY29udGVudFNjcmlwdHMgPSBtYW5pZmVzdFsnY29udGVudF9zY3JpcHRzJ107XG5cbiAgaWYgKCFjb250ZW50U2NyaXB0cykgeyByZXR1cm47IH1cblxuICBjb25zdCBzY3JpcHRzID0gW107XG5cbiAgY29udGVudFNjcmlwdHMuZm9yRWFjaCgoY29udGVudFNjcmlwdCA9IFtdKSA9PiB7XG4gICAgLy8gVE9ETyBjb250ZW50X3NjcmlwdCBjYW4gY29udGFpbiBjc3MgdG9vLlxuICAgIC8vIE1heWJlIHdlIGNhbiBiZSBzdHJpY3QsIHRocm93IGVycm9yIGFuZCB0ZWxsIHVzZXIgdG8gYWRkIGNzcyBpbnRvIHNjcmlwdHMgYW5kIGxlYXZlIGl0IG9uIHdlYnBhY2sgdG9vXG4gICAgY29udGVudFNjcmlwdC5qcy5mb3JFYWNoKChzY3JpcHRQYXRoKSA9PiB7XG4gICAgICBzY3JpcHQoc2NyaXB0UGF0aCwgYnVpbGRQYXRoKTtcbiAgICAgIHNjcmlwdHMucHVzaChzY3JpcHRQYXRoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgc2NyaXB0cyB9O1xufVxuIl19