'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (manifest, _ref) {
  var buildPath = _ref.buildPath,
      src = _ref.src;

  // TODO: unify with ./overrides.js
  var actions = [manifest.browser_action, manifest.page_action];
  var scripts = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = actions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var action = _step.value;

      if (!action || !action.default_popup) {
        continue;
      }

      var script = (0, _html2.default)(action.default_popup, src, buildPath);

      scripts.push(script);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return { scripts: scripts };
};

var _html = require('./lib/html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3IvYWN0aW9uLmpzIl0sIm5hbWVzIjpbIm1hbmlmZXN0IiwiYnVpbGRQYXRoIiwic3JjIiwiYWN0aW9ucyIsImJyb3dzZXJfYWN0aW9uIiwicGFnZV9hY3Rpb24iLCJzY3JpcHRzIiwiYWN0aW9uIiwiZGVmYXVsdF9wb3B1cCIsInNjcmlwdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFFZSxVQUFVQSxRQUFWLFFBQXdDO0FBQUEsTUFBbEJDLFNBQWtCLFFBQWxCQSxTQUFrQjtBQUFBLE1BQVBDLEdBQU8sUUFBUEEsR0FBTzs7QUFDckQ7QUFDQSxNQUFNQyxVQUFVLENBQUNILFNBQVNJLGNBQVYsRUFBMEJKLFNBQVNLLFdBQW5DLENBQWhCO0FBQ0EsTUFBTUMsVUFBVSxFQUFoQjs7QUFIcUQ7QUFBQTtBQUFBOztBQUFBO0FBS3JELHlCQUFtQkgsT0FBbkIsOEhBQTRCO0FBQUEsVUFBbkJJLE1BQW1COztBQUMxQixVQUFJLENBQUNBLE1BQUQsSUFBVyxDQUFDQSxPQUFPQyxhQUF2QixFQUFzQztBQUNwQztBQUNEOztBQUVELFVBQU1DLFNBQVMsb0JBQUtGLE9BQU9DLGFBQVosRUFBMkJOLEdBQTNCLEVBQWdDRCxTQUFoQyxDQUFmOztBQUVBSyxjQUFRSSxJQUFSLENBQWFELE1BQWI7QUFDRDtBQWJvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVyRCxTQUFPLEVBQUVILGdCQUFGLEVBQVA7QUFDRCxDOztBQWxCRCIsImZpbGUiOiJhY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHRtbCBmcm9tICcuL2xpYi9odG1sJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1hbmlmZXN0LCB7IGJ1aWxkUGF0aCwgc3JjIH0pIHtcbiAgLy8gVE9ETzogdW5pZnkgd2l0aCAuL292ZXJyaWRlcy5qc1xuICBjb25zdCBhY3Rpb25zID0gW21hbmlmZXN0LmJyb3dzZXJfYWN0aW9uLCBtYW5pZmVzdC5wYWdlX2FjdGlvbl07XG4gIGNvbnN0IHNjcmlwdHMgPSBbXTtcblxuICBmb3IgKGxldCBhY3Rpb24gb2YgYWN0aW9ucykge1xuICAgIGlmICghYWN0aW9uIHx8ICFhY3Rpb24uZGVmYXVsdF9wb3B1cCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2NyaXB0ID0gaHRtbChhY3Rpb24uZGVmYXVsdF9wb3B1cCwgc3JjLCBidWlsZFBhdGgpO1xuXG4gICAgc2NyaXB0cy5wdXNoKHNjcmlwdCk7XG4gIH1cblxuICByZXR1cm4geyBzY3JpcHRzIH07XG59XG4iXX0=