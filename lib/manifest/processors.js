'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _csp = require('./processor/csp');

var _csp2 = _interopRequireDefault(_csp);

var _package_json = require('./processor/package_json');

var _package_json2 = _interopRequireDefault(_package_json);

var _assets = require('./processor/assets');

var _assets2 = _interopRequireDefault(_assets);

var _action = require('./processor/action');

var _action2 = _interopRequireDefault(_action);

var _background = require('./processor/background');

var _background2 = _interopRequireDefault(_background);

var _content = require('./processor/content');

var _content2 = _interopRequireDefault(_content);

var _overrides = require('./processor/overrides');

var _overrides2 = _interopRequireDefault(_overrides);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processors = [
// Fix csp for devel
_csp2.default,
// Mege package.json
_package_json2.default,
// Process assets
_assets2.default,
// Process action (browse, or page)
_action2.default,
// Process background script
_background2.default,
// Process content script
_content2.default,
// Process overrides
_overrides2.default];

exports.default = processors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3JzLmpzIl0sIm5hbWVzIjpbInByb2Nlc3NvcnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhO0FBQ2pCO0FBRGlCO0FBR2pCO0FBSGlCO0FBS2pCO0FBTGlCO0FBT2pCO0FBUGlCO0FBU2pCO0FBVGlCO0FBV2pCO0FBWGlCO0FBYWpCO0FBYmlCLG9CQUFuQjs7a0JBaUJlQSxVIiwiZmlsZSI6InByb2Nlc3NvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3NwIGZyb20gJy4vcHJvY2Vzc29yL2NzcCc7XG5pbXBvcnQgUGFja2FnZUpzb24gZnJvbSAnLi9wcm9jZXNzb3IvcGFja2FnZV9qc29uJztcbmltcG9ydCBBc3NldHMgZnJvbSAnLi9wcm9jZXNzb3IvYXNzZXRzJztcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9wcm9jZXNzb3IvYWN0aW9uJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vcHJvY2Vzc29yL2JhY2tncm91bmQnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9wcm9jZXNzb3IvY29udGVudCc7XG5pbXBvcnQgT3ZlcnJpZGVzIGZyb20gJy4vcHJvY2Vzc29yL292ZXJyaWRlcyc7XG5cbmNvbnN0IHByb2Nlc3NvcnMgPSBbXG4gIC8vIEZpeCBjc3AgZm9yIGRldmVsXG4gIENzcCxcbiAgLy8gTWVnZSBwYWNrYWdlLmpzb25cbiAgUGFja2FnZUpzb24sXG4gIC8vIFByb2Nlc3MgYXNzZXRzXG4gIEFzc2V0cyxcbiAgLy8gUHJvY2VzcyBhY3Rpb24gKGJyb3dzZSwgb3IgcGFnZSlcbiAgQWN0aW9uLFxuICAvLyBQcm9jZXNzIGJhY2tncm91bmQgc2NyaXB0XG4gIEJhY2tncm91bmQsXG4gIC8vIFByb2Nlc3MgY29udGVudCBzY3JpcHRcbiAgQ29udGVudCxcbiAgLy8gUHJvY2VzcyBvdmVycmlkZXNcbiAgT3ZlcnJpZGVzXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzb3JzO1xuIl19