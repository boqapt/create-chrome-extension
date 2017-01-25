'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (manifest, _ref) {
  var buildPath = _ref.buildPath;
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
    scripts.push((0, _html2.default)(background.page, buildPath));
  }

  return { manifest: manifest, scripts: scripts };
};

var _script = require('./lib/script');

var _script2 = _interopRequireDefault(_script);

var _html = require('./lib/html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3IvYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6WyJtYW5pZmVzdCIsImJ1aWxkUGF0aCIsImJhY2tncm91bmQiLCJzY3JpcHRzIiwiZm9yRWFjaCIsInNjcmlwdFBhdGgiLCJwdXNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUdlLFVBQVVBLFFBQVYsUUFBbUM7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFBQSxNQUN4Q0MsVUFEd0MsR0FDekJGLFFBRHlCLENBQ3hDRSxVQUR3Qzs7QUFHaEQ7O0FBQ0EsTUFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQUU7QUFBUzs7QUFFNUIsTUFBTUMsVUFBVSxFQUFoQjs7QUFFQTtBQUNBLE1BQUlELFdBQVdDLE9BQWYsRUFBd0I7QUFDdEJELGVBQVdDLE9BQVgsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQUNDLFVBQUQsRUFBZ0I7QUFDekMsNEJBQU9BLFVBQVAsRUFBbUJKLFNBQW5CO0FBQ0FFLGNBQVFHLElBQVIsQ0FBYUQsVUFBYjtBQUNELEtBSEQ7QUFJRDs7QUFFRDtBQUNBLE1BQUlILFdBQVdLLElBQWYsRUFBcUI7QUFDbkJKLFlBQVFHLElBQVIsQ0FBYSxvQkFBS0osV0FBV0ssSUFBaEIsRUFBc0JOLFNBQXRCLENBQWI7QUFDRDs7QUFFRCxTQUFPLEVBQUVELGtCQUFGLEVBQVlHLGdCQUFaLEVBQVA7QUFDRCxDOztBQXpCRDs7OztBQUNBIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2NyaXB0IGZyb20gJy4vbGliL3NjcmlwdCc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2xpYi9odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1hbmlmZXN0LCB7IGJ1aWxkUGF0aCB9KSB7XG4gIGNvbnN0IHsgYmFja2dyb3VuZCB9ID0gbWFuaWZlc3Q7XG5cbiAgLy8gU2tpcCB3aGVuIHRoZXJlIGlzIG5vIGJhY2tncm91bmQgcHJvcGVydHlcbiAgaWYgKCFiYWNrZ3JvdW5kKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IHNjcmlwdHMgPSBbXTtcblxuICAvLyBQcm9jZXNzIGJhY2tncm91bmQgc2NyaXB0c1xuICBpZiAoYmFja2dyb3VuZC5zY3JpcHRzKSB7XG4gICAgYmFja2dyb3VuZC5zY3JpcHRzLmZvckVhY2goKHNjcmlwdFBhdGgpID0+IHtcbiAgICAgIHNjcmlwdChzY3JpcHRQYXRoLCBidWlsZFBhdGgpO1xuICAgICAgc2NyaXB0cy5wdXNoKHNjcmlwdFBhdGgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQmFja2dyb3VuZCBwYWdlXG4gIGlmIChiYWNrZ3JvdW5kLnBhZ2UpIHtcbiAgICBzY3JpcHRzLnB1c2goaHRtbChiYWNrZ3JvdW5kLnBhZ2UsIGJ1aWxkUGF0aCkpO1xuICB9XG5cbiAgcmV0dXJuIHsgbWFuaWZlc3QsIHNjcmlwdHMgfTtcbn1cbiJdfQ==