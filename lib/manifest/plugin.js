'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SingleEntryPlugin = require('webpack/lib/SingleEntryPlugin');

var _SingleEntryPlugin2 = _interopRequireDefault(_SingleEntryPlugin);

var _MultiEntryPlugin = require('webpack/lib/MultiEntryPlugin');

var _MultiEntryPlugin2 = _interopRequireDefault(_MultiEntryPlugin);

var _remove = require('../utils/remove');

var Remove = _interopRequireWildcard(_remove);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ManifestPlugin = function () {
  function ManifestPlugin(Manifest) {
    _classCallCheck(this, ManifestPlugin);

    this.Manifest = Manifest;
    this.isDevelopment = process.env.NODE_ENV !== 'production';
  }

  _createClass(ManifestPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      this.Manifest.run();

      this.Manifest.scripts.forEach(function (script) {
        // name
        var name = Remove.extension(script);

        // item
        var item = void 0;
        if (_this.isDevelopment) {
          item = [require.resolve('webpack-dev-server/client') + '?https://localhost:3001', require.resolve('webpack/hot/only-dev-server'), script];
        } else {
          item = script;
        }

        var entryClass = _this.itemToPlugin(item, name);

        compiler.apply(entryClass);
      });
    }
  }, {
    key: 'itemToPlugin',
    value: function itemToPlugin(item, name) {
      if (Array.isArray(item)) {
        return new _MultiEntryPlugin2.default(null, item, name);
      } else {
        return new _SingleEntryPlugin2.default(null, item, name);
      }
    }
  }]);

  return ManifestPlugin;
}();

exports.default = ManifestPlugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYW5pZmVzdC9wbHVnaW4uanMiXSwibmFtZXMiOlsiUmVtb3ZlIiwiTWFuaWZlc3RQbHVnaW4iLCJNYW5pZmVzdCIsImlzRGV2ZWxvcG1lbnQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjb21waWxlciIsInJ1biIsInNjcmlwdHMiLCJmb3JFYWNoIiwic2NyaXB0IiwibmFtZSIsImV4dGVuc2lvbiIsIml0ZW0iLCJyZXF1aXJlIiwicmVzb2x2ZSIsImVudHJ5Q2xhc3MiLCJpdGVtVG9QbHVnaW4iLCJhcHBseSIsIkFycmF5IiwiaXNBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLE07Ozs7Ozs7O0lBRVNDLGM7QUFDbkIsMEJBQWFDLFFBQWIsRUFBdUI7QUFBQTs7QUFDckIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBOUM7QUFDRDs7OzswQkFFTUMsUSxFQUFVO0FBQUE7O0FBQ2YsV0FBS0wsUUFBTCxDQUFjTSxHQUFkOztBQUVBLFdBQUtOLFFBQUwsQ0FBY08sT0FBZCxDQUFzQkMsT0FBdEIsQ0FBOEIsVUFBQ0MsTUFBRCxFQUFZO0FBQ3hDO0FBQ0EsWUFBTUMsT0FBT1osT0FBT2EsU0FBUCxDQUFpQkYsTUFBakIsQ0FBYjs7QUFFQTtBQUNBLFlBQUlHLGFBQUo7QUFDQSxZQUFJLE1BQUtYLGFBQVQsRUFBd0I7QUFDdEJXLGlCQUFPLENBQ0xDLFFBQVFDLE9BQVIsQ0FBZ0IsMkJBQWhCLElBQStDLHlCQUQxQyxFQUVMRCxRQUFRQyxPQUFSLENBQWdCLDZCQUFoQixDQUZLLEVBR0xMLE1BSEssQ0FBUDtBQUtELFNBTkQsTUFNTztBQUNMRyxpQkFBT0gsTUFBUDtBQUNEOztBQUVELFlBQU1NLGFBQWEsTUFBS0MsWUFBTCxDQUFrQkosSUFBbEIsRUFBd0JGLElBQXhCLENBQW5COztBQUVBTCxpQkFBU1ksS0FBVCxDQUFlRixVQUFmO0FBQ0QsT0FuQkQ7QUFvQkQ7OztpQ0FFYUgsSSxFQUFNRixJLEVBQU07QUFDeEIsVUFBSVEsTUFBTUMsT0FBTixDQUFjUCxJQUFkLENBQUosRUFBeUI7QUFDdkIsZUFBTywrQkFBcUIsSUFBckIsRUFBMkJBLElBQTNCLEVBQWlDRixJQUFqQyxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxnQ0FBc0IsSUFBdEIsRUFBNEJFLElBQTVCLEVBQWtDRixJQUFsQyxDQUFQO0FBQ0Q7QUFDRjs7Ozs7O2tCQXJDa0JYLGMiLCJmaWxlIjoicGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZUVudHJ5UGx1Z2luIGZyb20gJ3dlYnBhY2svbGliL1NpbmdsZUVudHJ5UGx1Z2luJztcbmltcG9ydCBNdWx0aUVudHJ5UGx1Z2luIGZyb20gJ3dlYnBhY2svbGliL011bHRpRW50cnlQbHVnaW4nO1xuaW1wb3J0ICogYXMgUmVtb3ZlIGZyb20gJy4uL3V0aWxzL3JlbW92ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmlmZXN0UGx1Z2luIHtcbiAgY29uc3RydWN0b3IgKE1hbmlmZXN0KSB7XG4gICAgdGhpcy5NYW5pZmVzdCA9IE1hbmlmZXN0O1xuICAgIHRoaXMuaXNEZXZlbG9wbWVudCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG4gIH1cblxuICBhcHBseSAoY29tcGlsZXIpIHtcbiAgICB0aGlzLk1hbmlmZXN0LnJ1bigpO1xuXG4gICAgdGhpcy5NYW5pZmVzdC5zY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgICAgLy8gbmFtZVxuICAgICAgY29uc3QgbmFtZSA9IFJlbW92ZS5leHRlbnNpb24oc2NyaXB0KTtcblxuICAgICAgLy8gaXRlbVxuICAgICAgbGV0IGl0ZW07XG4gICAgICBpZiAodGhpcy5pc0RldmVsb3BtZW50KSB7XG4gICAgICAgIGl0ZW0gPSBbXG4gICAgICAgICAgcmVxdWlyZS5yZXNvbHZlKCd3ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50JykgKyAnP2h0dHBzOi8vbG9jYWxob3N0OjMwMDEnLFxuICAgICAgICAgIHJlcXVpcmUucmVzb2x2ZSgnd2VicGFjay9ob3Qvb25seS1kZXYtc2VydmVyJyksXG4gICAgICAgICAgc2NyaXB0XG4gICAgICAgIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtID0gc2NyaXB0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbnRyeUNsYXNzID0gdGhpcy5pdGVtVG9QbHVnaW4oaXRlbSwgbmFtZSk7XG5cbiAgICAgIGNvbXBpbGVyLmFwcGx5KGVudHJ5Q2xhc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgaXRlbVRvUGx1Z2luIChpdGVtLCBuYW1lKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIHJldHVybiBuZXcgTXVsdGlFbnRyeVBsdWdpbihudWxsLCBpdGVtLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBTaW5nbGVFbnRyeVBsdWdpbihudWxsLCBpdGVtLCBuYW1lKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==