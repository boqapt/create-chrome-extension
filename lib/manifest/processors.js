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

var _resources = require('./processor/resources');

var _resources2 = _interopRequireDefault(_resources);

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
_overrides2.default,
// Process web accessible resources
_resources2.default];

exports.default = processors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3JzLmpzIl0sIm5hbWVzIjpbInByb2Nlc3NvcnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWE7QUFDakI7QUFEaUI7QUFHakI7QUFIaUI7QUFLakI7QUFMaUI7QUFPakI7QUFQaUI7QUFTakI7QUFUaUI7QUFXakI7QUFYaUI7QUFhakI7QUFiaUI7QUFlakI7QUFmaUIsb0JBQW5COztrQkFtQmVBLFUiLCJmaWxlIjoicHJvY2Vzc29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDc3AgZnJvbSAnLi9wcm9jZXNzb3IvY3NwJztcbmltcG9ydCBQYWNrYWdlSnNvbiBmcm9tICcuL3Byb2Nlc3Nvci9wYWNrYWdlX2pzb24nO1xuaW1wb3J0IEFzc2V0cyBmcm9tICcuL3Byb2Nlc3Nvci9hc3NldHMnO1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuL3Byb2Nlc3Nvci9hY3Rpb24nO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9wcm9jZXNzb3IvYmFja2dyb3VuZCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL3Byb2Nlc3Nvci9jb250ZW50JztcbmltcG9ydCBPdmVycmlkZXMgZnJvbSAnLi9wcm9jZXNzb3Ivb3ZlcnJpZGVzJztcbmltcG9ydCBSZXNvdXJjZXMgZnJvbSAnLi9wcm9jZXNzb3IvcmVzb3VyY2VzJztcblxuY29uc3QgcHJvY2Vzc29ycyA9IFtcbiAgLy8gRml4IGNzcCBmb3IgZGV2ZWxcbiAgQ3NwLFxuICAvLyBNZWdlIHBhY2thZ2UuanNvblxuICBQYWNrYWdlSnNvbixcbiAgLy8gUHJvY2VzcyBhc3NldHNcbiAgQXNzZXRzLFxuICAvLyBQcm9jZXNzIGFjdGlvbiAoYnJvd3NlLCBvciBwYWdlKVxuICBBY3Rpb24sXG4gIC8vIFByb2Nlc3MgYmFja2dyb3VuZCBzY3JpcHRcbiAgQmFja2dyb3VuZCxcbiAgLy8gUHJvY2VzcyBjb250ZW50IHNjcmlwdFxuICBDb250ZW50LFxuICAvLyBQcm9jZXNzIG92ZXJyaWRlc1xuICBPdmVycmlkZXMsXG4gIC8vIFByb2Nlc3Mgd2ViIGFjY2Vzc2libGUgcmVzb3VyY2VzXG4gIFJlc291cmNlc1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzc29ycztcbiJdfQ==