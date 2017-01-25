'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareManifest = prepareManifest;

var _manifest = require('./manifest');

var _manifest2 = _interopRequireDefault(_manifest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* For given manifest path, process everything in it
*
* @param  {String} path Manifest file path
* @return {Promise(Manifest)}
*/
function prepareManifest(options) {
  return new Promise(function (resolve) {
    resolve(new _manifest2.default(options));
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFyZWQuanMiXSwibmFtZXMiOlsicHJlcGFyZU1hbmlmZXN0Iiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7OztRQVFnQkEsZSxHQUFBQSxlOztBQVJoQjs7Ozs7O0FBRUE7Ozs7OztBQU1PLFNBQVNBLGVBQVQsQ0FBMEJDLE9BQTFCLEVBQW1DO0FBQ3hDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QkEsWUFBUSx1QkFBYUYsT0FBYixDQUFSO0FBQ0QsR0FGTSxDQUFQO0FBR0QiLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hbmlmZXN0IGZyb20gJy4vbWFuaWZlc3QnO1xuXG4vKipcbiogRm9yIGdpdmVuIG1hbmlmZXN0IHBhdGgsIHByb2Nlc3MgZXZlcnl0aGluZyBpbiBpdFxuKlxuKiBAcGFyYW0gIHtTdHJpbmd9IHBhdGggTWFuaWZlc3QgZmlsZSBwYXRoXG4qIEByZXR1cm4ge1Byb21pc2UoTWFuaWZlc3QpfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlTWFuaWZlc3QgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZShuZXcgTWFuaWZlc3Qob3B0aW9ucykpO1xuICB9KTtcbn1cbiJdfQ==