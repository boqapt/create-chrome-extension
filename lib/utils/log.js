'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.done = exports.error = exports.success = exports.pending = exports.debug = undefined;

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = exports.debug = function debug() {
  var _console;

  (_console = console).log.apply(_console, arguments);
};

var pending = exports.pending = function pending(message) {
  console.log(_safe2.default.yellow(message));
};

var success = exports.success = function success(message) {
  console.log(_safe2.default.green(message));
};

var error = exports.error = function error(message) {
  console.error(_safe2.default.red(message));
};

var done = exports.done = function done() {
  success('Done');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9sb2cuanMiXSwibmFtZXMiOlsiZGVidWciLCJsb2ciLCJwZW5kaW5nIiwibWVzc2FnZSIsImNvbnNvbGUiLCJ5ZWxsb3ciLCJzdWNjZXNzIiwiZ3JlZW4iLCJlcnJvciIsInJlZCIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsd0JBQVEsU0FBUkEsS0FBUSxHQUF1QjtBQUFBOztBQUMxQyx1QkFBUUMsR0FBUjtBQUNELENBRk07O0FBSUEsSUFBTUMsNEJBQVUsU0FBVkEsT0FBVSxDQUFVQyxPQUFWLEVBQW1CO0FBQ3hDQyxVQUFRSCxHQUFSLENBQVksZUFBTUksTUFBTixDQUFhRixPQUFiLENBQVo7QUFDRCxDQUZNOztBQUlBLElBQU1HLDRCQUFVLFNBQVZBLE9BQVUsQ0FBVUgsT0FBVixFQUFtQjtBQUN4Q0MsVUFBUUgsR0FBUixDQUFZLGVBQU1NLEtBQU4sQ0FBWUosT0FBWixDQUFaO0FBQ0QsQ0FGTTs7QUFJQSxJQUFNSyx3QkFBUSxTQUFSQSxLQUFRLENBQVVMLE9BQVYsRUFBbUI7QUFDdENDLFVBQVFJLEtBQVIsQ0FBYyxlQUFNQyxHQUFOLENBQVVOLE9BQVYsQ0FBZDtBQUNELENBRk07O0FBSUEsSUFBTU8sc0JBQU8sU0FBUEEsSUFBTyxHQUFZO0FBQzlCSixVQUFRLE1BQVI7QUFDRCxDQUZNIiwiZmlsZSI6ImxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvciBmcm9tICdjb2xvcnMvc2FmZSc7XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZyA9IGZ1bmN0aW9uICguLi5tZXNzYWdlcykge1xuICBjb25zb2xlLmxvZyguLi5tZXNzYWdlcyk7XG59O1xuXG5leHBvcnQgY29uc3QgcGVuZGluZyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKGNvbG9yLnllbGxvdyhtZXNzYWdlKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3VjY2VzcyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKGNvbG9yLmdyZWVuKG1lc3NhZ2UpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIGNvbnNvbGUuZXJyb3IoY29sb3IucmVkKG1lc3NhZ2UpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkb25lID0gZnVuY3Rpb24gKCkge1xuICBzdWNjZXNzKCdEb25lJyk7XG59O1xuIl19