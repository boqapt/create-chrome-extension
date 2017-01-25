'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (scriptName, build) {
  if (process.env.NODE_ENV === 'development') {
    log.pending('Making injector \'' + scriptName + '\'');

    var injectorScript = makeInjector(scriptName);
    var injectorFilepath = _path2.default.join(build, scriptName);
    var injectorPath = Remove.file(injectorFilepath);

    (0, _fsExtra.mkdirsSync)(injectorPath);
    (0, _fsExtra.writeFileSync)(injectorFilepath, injectorScript, { encoding: 'utf8' });

    log.done();
  }
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _log = require('../../../utils/log');

var log = _interopRequireWildcard(_log);

var _remove = require('../../../utils/remove');

var Remove = _interopRequireWildcard(_remove);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeInjector = function makeInjector(scriptName) {
  return '// Injector file for \'' + scriptName + '\'\nvar context = this;\n\n// http://stackoverflow.com/questions/8403108/calling-eval-in-particular-context/25859853#25859853\nfunction evalInContext(js, context) {\n  return function() { return eval(js); }.call(context);\n}\n\nfunction reqListener () {\n  evalInContext(this.responseText, context)\n}\n\nvar request = new XMLHttpRequest();\nrequest.onload = reqListener;\nrequest.open("get", "https://localhost:3001/' + scriptName + '", true);\nrequest.send();';
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3IvbGliL3NjcmlwdC5qcyJdLCJuYW1lcyI6WyJzY3JpcHROYW1lIiwiYnVpbGQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJsb2ciLCJwZW5kaW5nIiwiaW5qZWN0b3JTY3JpcHQiLCJtYWtlSW5qZWN0b3IiLCJpbmplY3RvckZpbGVwYXRoIiwiam9pbiIsImluamVjdG9yUGF0aCIsIlJlbW92ZSIsImZpbGUiLCJlbmNvZGluZyIsImRvbmUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkEyQmUsVUFBVUEsVUFBVixFQUFzQkMsS0FBdEIsRUFBNkI7QUFDMUMsTUFBSUMsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQTdCLEVBQTRDO0FBQzFDQyxRQUFJQyxPQUFKLHdCQUFnQ04sVUFBaEM7O0FBRUEsUUFBTU8saUJBQWlCQyxhQUFhUixVQUFiLENBQXZCO0FBQ0EsUUFBTVMsbUJBQW1CLGVBQUtDLElBQUwsQ0FBVVQsS0FBVixFQUFpQkQsVUFBakIsQ0FBekI7QUFDQSxRQUFNVyxlQUFlQyxPQUFPQyxJQUFQLENBQVlKLGdCQUFaLENBQXJCOztBQUVBLDZCQUFXRSxZQUFYO0FBQ0EsZ0NBQWNGLGdCQUFkLEVBQWdDRixjQUFoQyxFQUFnRCxFQUFFTyxVQUFVLE1BQVosRUFBaEQ7O0FBRUFULFFBQUlVLElBQUo7QUFDRDtBQUNGLEM7O0FBeENEOzs7O0FBQ0E7O0FBRUE7O0lBQVlWLEc7O0FBQ1o7O0lBQVlPLE07Ozs7OztBQUVaLElBQU1KLGVBQWUsU0FBZkEsWUFBZSxDQUFVUixVQUFWLEVBQXNCO0FBQ3pDLHFDQUN1QkEsVUFEdkIseWFBZTRDQSxVQWY1QztBQWtCRCxDQW5CRCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IG1rZGlyc1N5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tICdmcy1leHRyYSc7XG5cbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi8uLi8uLi91dGlscy9sb2cnO1xuaW1wb3J0ICogYXMgUmVtb3ZlIGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlbW92ZSc7XG5cbmNvbnN0IG1ha2VJbmplY3RvciA9IGZ1bmN0aW9uIChzY3JpcHROYW1lKSB7XG4gIHJldHVybiAoXG5gLy8gSW5qZWN0b3IgZmlsZSBmb3IgJyR7c2NyaXB0TmFtZX0nXG52YXIgY29udGV4dCA9IHRoaXM7XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODQwMzEwOC9jYWxsaW5nLWV2YWwtaW4tcGFydGljdWxhci1jb250ZXh0LzI1ODU5ODUzIzI1ODU5ODUzXG5mdW5jdGlvbiBldmFsSW5Db250ZXh0KGpzLCBjb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIGV2YWwoanMpOyB9LmNhbGwoY29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIHJlcUxpc3RlbmVyICgpIHtcbiAgZXZhbEluQ29udGV4dCh0aGlzLnJlc3BvbnNlVGV4dCwgY29udGV4dClcbn1cblxudmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbnJlcXVlc3Qub25sb2FkID0gcmVxTGlzdGVuZXI7XG5yZXF1ZXN0Lm9wZW4oXCJnZXRcIiwgXCJodHRwczovL2xvY2FsaG9zdDozMDAxLyR7c2NyaXB0TmFtZX1cIiwgdHJ1ZSk7XG5yZXF1ZXN0LnNlbmQoKTtgXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc2NyaXB0TmFtZSwgYnVpbGQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgbG9nLnBlbmRpbmcoYE1ha2luZyBpbmplY3RvciAnJHtzY3JpcHROYW1lfSdgKTtcblxuICAgIGNvbnN0IGluamVjdG9yU2NyaXB0ID0gbWFrZUluamVjdG9yKHNjcmlwdE5hbWUpO1xuICAgIGNvbnN0IGluamVjdG9yRmlsZXBhdGggPSBwYXRoLmpvaW4oYnVpbGQsIHNjcmlwdE5hbWUpO1xuICAgIGNvbnN0IGluamVjdG9yUGF0aCA9IFJlbW92ZS5maWxlKGluamVjdG9yRmlsZXBhdGgpO1xuXG4gICAgbWtkaXJzU3luYyhpbmplY3RvclBhdGgpO1xuICAgIHdyaXRlRmlsZVN5bmMoaW5qZWN0b3JGaWxlcGF0aCwgaW5qZWN0b3JTY3JpcHQsIHsgZW5jb2Rpbmc6ICd1dGY4JyB9KTtcblxuICAgIGxvZy5kb25lKCk7XG4gIH1cbn1cbiJdfQ==