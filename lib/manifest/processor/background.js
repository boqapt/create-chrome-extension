'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (manifest, _ref) {
  var buildPath = _ref.buildPath,
      src = _ref.src;
  var background = manifest.background;

  // Skip when there is no background property

  if (!background) {
    return;
  }

  var scripts = [];

  // Process background scripts
  if (background.scripts) {
    background.scripts.forEach(function (scriptPath) {
      (0, _script2.default)(scriptPath, buildPath);
      scripts.push(scriptPath);
    });
  }

  // Background page
  if (background.page) {
    scripts.push((0, _html2.default)(background.page, src, buildPath));
  }

  return { manifest: manifest, scripts: scripts };
};

var _script = require('./lib/script');

var _script2 = _interopRequireDefault(_script);

var _html = require('./lib/html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3IvYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6WyJtYW5pZmVzdCIsImJ1aWxkUGF0aCIsInNyYyIsImJhY2tncm91bmQiLCJzY3JpcHRzIiwiZm9yRWFjaCIsInNjcmlwdFBhdGgiLCJwdXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUdlLFVBQVVBLFFBQVYsUUFBd0M7QUFBQSxNQUFsQkMsU0FBa0IsUUFBbEJBLFNBQWtCO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQUEsTUFDN0NDLFVBRDZDLEdBQzlCSCxRQUQ4QixDQUM3Q0csVUFENkM7O0FBR3JEOztBQUNBLE1BQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUFFO0FBQVM7O0FBRTVCLE1BQU1DLFVBQVUsRUFBaEI7O0FBRUE7QUFDQSxNQUFJRCxXQUFXQyxPQUFmLEVBQXdCO0FBQ3RCRCxlQUFXQyxPQUFYLENBQW1CQyxPQUFuQixDQUEyQixVQUFDQyxVQUFELEVBQWdCO0FBQ3pDLDRCQUFPQSxVQUFQLEVBQW1CTCxTQUFuQjtBQUNBRyxjQUFRRyxJQUFSLENBQWFELFVBQWI7QUFDRCxLQUhEO0FBSUQ7O0FBRUQ7QUFDQSxNQUFJSCxXQUFXSyxJQUFmLEVBQXFCO0FBQ25CSixZQUFRRyxJQUFSLENBQWEsb0JBQUtKLFdBQVdLLElBQWhCLEVBQXNCTixHQUF0QixFQUEyQkQsU0FBM0IsQ0FBYjtBQUNEOztBQUVELFNBQU8sRUFBRUQsa0JBQUYsRUFBWUksZ0JBQVosRUFBUDtBQUNELEM7O0FBekJEOzs7O0FBQ0EiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzY3JpcHQgZnJvbSAnLi9saWIvc2NyaXB0JztcbmltcG9ydCBodG1sIGZyb20gJy4vbGliL2h0bWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFuaWZlc3QsIHsgYnVpbGRQYXRoLCBzcmMgfSkge1xuICBjb25zdCB7IGJhY2tncm91bmQgfSA9IG1hbmlmZXN0O1xuXG4gIC8vIFNraXAgd2hlbiB0aGVyZSBpcyBubyBiYWNrZ3JvdW5kIHByb3BlcnR5XG4gIGlmICghYmFja2dyb3VuZCkgeyByZXR1cm47IH1cblxuICBjb25zdCBzY3JpcHRzID0gW107XG5cbiAgLy8gUHJvY2VzcyBiYWNrZ3JvdW5kIHNjcmlwdHNcbiAgaWYgKGJhY2tncm91bmQuc2NyaXB0cykge1xuICAgIGJhY2tncm91bmQuc2NyaXB0cy5mb3JFYWNoKChzY3JpcHRQYXRoKSA9PiB7XG4gICAgICBzY3JpcHQoc2NyaXB0UGF0aCwgYnVpbGRQYXRoKTtcbiAgICAgIHNjcmlwdHMucHVzaChzY3JpcHRQYXRoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEJhY2tncm91bmQgcGFnZVxuICBpZiAoYmFja2dyb3VuZC5wYWdlKSB7XG4gICAgc2NyaXB0cy5wdXNoKGh0bWwoYmFja2dyb3VuZC5wYWdlLCBzcmMsIGJ1aWxkUGF0aCkpO1xuICB9XG5cbiAgcmV0dXJuIHsgbWFuaWZlc3QsIHNjcmlwdHMgfTtcbn1cbiJdfQ==