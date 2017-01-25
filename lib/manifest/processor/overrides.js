'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (manifest, _ref) {
  var buildPath = _ref.buildPath,
      src = _ref.src;

  if (!manifest.chrome_url_overrides) {
    return;
  }

  // TODO: unify with ./action.js
  var _manifest$chrome_url_ = manifest.chrome_url_overrides,
      bookmarks = _manifest$chrome_url_.bookmarks,
      history = _manifest$chrome_url_.history,
      newtab = _manifest$chrome_url_.newtab;


  var overrides = [bookmarks, history, newtab];
  var scripts = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = overrides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var override = _step.value;

      if (!override) {
        continue;
      }

      var script = (0, _html2.default)(override, src, buildPath);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3Ivb3ZlcnJpZGVzLmpzIl0sIm5hbWVzIjpbIm1hbmlmZXN0IiwiYnVpbGRQYXRoIiwic3JjIiwiY2hyb21lX3VybF9vdmVycmlkZXMiLCJib29rbWFya3MiLCJoaXN0b3J5IiwibmV3dGFiIiwib3ZlcnJpZGVzIiwic2NyaXB0cyIsIm92ZXJyaWRlIiwic2NyaXB0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQVVlLFVBQVVBLFFBQVYsUUFBd0M7QUFBQSxNQUFsQkMsU0FBa0IsUUFBbEJBLFNBQWtCO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPOztBQUNyRCxNQUFJLENBQUNGLFNBQVNHLG9CQUFkLEVBQW9DO0FBQUU7QUFBUzs7QUFFL0M7QUFIcUQsOEJBSWRILFNBQVNHLG9CQUpLO0FBQUEsTUFJN0NDLFNBSjZDLHlCQUk3Q0EsU0FKNkM7QUFBQSxNQUlsQ0MsT0FKa0MseUJBSWxDQSxPQUprQztBQUFBLE1BSXpCQyxNQUp5Qix5QkFJekJBLE1BSnlCOzs7QUFNckQsTUFBTUMsWUFBWSxDQUFDSCxTQUFELEVBQVlDLE9BQVosRUFBcUJDLE1BQXJCLENBQWxCO0FBQ0EsTUFBTUUsVUFBVSxFQUFoQjs7QUFQcUQ7QUFBQTtBQUFBOztBQUFBO0FBU3JELHlCQUFxQkQsU0FBckIsOEhBQWdDO0FBQUEsVUFBdkJFLFFBQXVCOztBQUM5QixVQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiO0FBQ0Q7O0FBRUQsVUFBTUMsU0FBUyxvQkFBS0QsUUFBTCxFQUFlUCxHQUFmLEVBQW9CRCxTQUFwQixDQUFmOztBQUVBTyxjQUFRRyxJQUFSLENBQWFELE1BQWI7QUFDRDtBQWpCb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtQnJELFNBQU8sRUFBRUYsZ0JBQUYsRUFBUDtBQUNELEM7O0FBOUJEIiwiZmlsZSI6Im92ZXJyaWRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodG1sIGZyb20gJy4vbGliL2h0bWwnO1xuXG4vLyBjb25zdCBwcm9jZXNzID0gZnVuY3Rpb24gKHsgcGFnZSwgYnVpbGRQYXRoLCBzY3JpcHRzIH0pIHtcbi8vICAgaWYgKCFwYWdlKSB7IHJldHVybjsgfVxuXG4vLyAgIHNjcmlwdHMucHVzaChodG1sKHBhZ2UsIGJ1aWxkUGF0aCkpO1xuXG4vLyAgIHJldHVybiB0cnVlO1xuLy8gfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1hbmlmZXN0LCB7IGJ1aWxkUGF0aCwgc3JjIH0pIHtcbiAgaWYgKCFtYW5pZmVzdC5jaHJvbWVfdXJsX292ZXJyaWRlcykgeyByZXR1cm47IH1cblxuICAvLyBUT0RPOiB1bmlmeSB3aXRoIC4vYWN0aW9uLmpzXG4gIGNvbnN0IHsgYm9va21hcmtzLCBoaXN0b3J5LCBuZXd0YWIgfSA9IG1hbmlmZXN0LmNocm9tZV91cmxfb3ZlcnJpZGVzO1xuXG4gIGNvbnN0IG92ZXJyaWRlcyA9IFtib29rbWFya3MsIGhpc3RvcnksIG5ld3RhYl07XG4gIGNvbnN0IHNjcmlwdHMgPSBbXTtcblxuICBmb3IgKGxldCBvdmVycmlkZSBvZiBvdmVycmlkZXMpIHtcbiAgICBpZiAoIW92ZXJyaWRlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JpcHQgPSBodG1sKG92ZXJyaWRlLCBzcmMsIGJ1aWxkUGF0aCk7XG5cbiAgICBzY3JpcHRzLnB1c2goc2NyaXB0KTtcbiAgfVxuXG4gIHJldHVybiB7IHNjcmlwdHMgfTtcbn1cbiJdfQ==