'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// ////////
// Merge manifest.json with name, description and version from package.json


exports.default = function (manifest) {
  var packagePath = (0, _findupSync2.default)('package.json');

  var packageConfig = _fsExtra2.default.readJSONSync(packagePath);

  var name = packageConfig.name,
      description = packageConfig.description,
      version = packageConfig.version;


  manifest = _extends({
    name: name,
    description: description,
    version: version
  }, manifest);

  return { manifest: manifest };
};

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _findupSync = require('findup-sync');

var _findupSync2 = _interopRequireDefault(_findupSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3IvcGFja2FnZV9qc29uLmpzIl0sIm5hbWVzIjpbIm1hbmlmZXN0IiwicGFja2FnZVBhdGgiLCJwYWNrYWdlQ29uZmlnIiwicmVhZEpTT05TeW5jIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTtBQUNBOzs7a0JBQ2UsVUFBVUEsUUFBVixFQUFvQjtBQUNqQyxNQUFNQyxjQUFjLDBCQUFXLGNBQVgsQ0FBcEI7O0FBRUEsTUFBTUMsZ0JBQWdCLGtCQUFHQyxZQUFILENBQWdCRixXQUFoQixDQUF0Qjs7QUFIaUMsTUFLekJHLElBTHlCLEdBS01GLGFBTE4sQ0FLekJFLElBTHlCO0FBQUEsTUFLbkJDLFdBTG1CLEdBS01ILGFBTE4sQ0FLbkJHLFdBTG1CO0FBQUEsTUFLTkMsT0FMTSxHQUtNSixhQUxOLENBS05JLE9BTE07OztBQU9qQ047QUFDRUksY0FERjtBQUVFQyw0QkFGRjtBQUdFQztBQUhGLEtBSUtOLFFBSkw7O0FBT0EsU0FBTyxFQUFFQSxrQkFBRixFQUFQO0FBQ0QsQzs7QUFwQkQ7Ozs7QUFDQSIsImZpbGUiOiJwYWNrYWdlX2pzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuaW1wb3J0IGZpbmR1cFN5bmMgZnJvbSAnZmluZHVwLXN5bmMnO1xuXG4vLyAvLy8vLy8vL1xuLy8gTWVyZ2UgbWFuaWZlc3QuanNvbiB3aXRoIG5hbWUsIGRlc2NyaXB0aW9uIGFuZCB2ZXJzaW9uIGZyb20gcGFja2FnZS5qc29uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWFuaWZlc3QpIHtcbiAgY29uc3QgcGFja2FnZVBhdGggPSBmaW5kdXBTeW5jKCdwYWNrYWdlLmpzb24nKTtcblxuICBjb25zdCBwYWNrYWdlQ29uZmlnID0gZnMucmVhZEpTT05TeW5jKHBhY2thZ2VQYXRoKTtcblxuICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCB2ZXJzaW9uIH0gPSBwYWNrYWdlQ29uZmlnO1xuXG4gIG1hbmlmZXN0ID0ge1xuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgdmVyc2lvbixcbiAgICAuLi5tYW5pZmVzdFxuICB9O1xuXG4gIHJldHVybiB7IG1hbmlmZXN0IH07XG59XG4iXX0=