'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (manifest) {
  log.pending('Processing CSP');

  if (process.env.NODE_ENV === 'development') {
    var csp = manifest['content_security_policy'] || '';

    var objectSrc = "object-src 'self'";

    if (~csp.indexOf('object-src')) {
      csp = csp.replace('object-src', objectSrc);
    } else {
      csp = objectSrc + '; ' + csp;
    }

    // TODO add host into some config
    var scriptSrc = "script-src 'self' 'unsafe-eval' https://localhost:3001";

    if (~csp.indexOf('script-src')) {
      csp = csp.replace('script-src', scriptSrc);
    } else {
      csp = scriptSrc + '; ' + csp;
    }

    manifest['content_security_policy'] = csp;

    log.done('Done');
  } else {
    log.done('Skipped in production environment');
  }

  return { manifest: manifest };
};

var _log = require('../../utils/log');

var log = _interopRequireWildcard(_log);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3IvY3NwLmpzIl0sIm5hbWVzIjpbIm1hbmlmZXN0IiwibG9nIiwicGVuZGluZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNzcCIsIm9iamVjdFNyYyIsImluZGV4T2YiLCJyZXBsYWNlIiwic2NyaXB0U3JjIiwiZG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUllLFVBQVVBLFFBQVYsRUFBb0I7QUFDakNDLE1BQUlDLE9BQUosQ0FBWSxnQkFBWjs7QUFFQSxNQUFJQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsYUFBN0IsRUFBNEM7QUFDMUMsUUFBSUMsTUFBTU4sU0FBUyx5QkFBVCxLQUF1QyxFQUFqRDs7QUFFQSxRQUFNTyxZQUFZLG1CQUFsQjs7QUFFQSxRQUFJLENBQUNELElBQUlFLE9BQUosQ0FBWSxZQUFaLENBQUwsRUFBZ0M7QUFDOUJGLFlBQU1BLElBQUlHLE9BQUosQ0FBWSxZQUFaLEVBQTBCRixTQUExQixDQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELFlBQVNDLFNBQVQsVUFBdUJELEdBQXZCO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFNSSxZQUFZLHdEQUFsQjs7QUFFQSxRQUFJLENBQUNKLElBQUlFLE9BQUosQ0FBWSxZQUFaLENBQUwsRUFBZ0M7QUFDOUJGLFlBQU1BLElBQUlHLE9BQUosQ0FBWSxZQUFaLEVBQTBCQyxTQUExQixDQUFOO0FBQ0QsS0FGRCxNQUVPO0FBQ0xKLFlBQVNJLFNBQVQsVUFBdUJKLEdBQXZCO0FBQ0Q7O0FBRUROLGFBQVMseUJBQVQsSUFBc0NNLEdBQXRDOztBQUVBTCxRQUFJVSxJQUFKLENBQVMsTUFBVDtBQUNELEdBdkJELE1BdUJPO0FBQ0xWLFFBQUlVLElBQUosQ0FBUyxtQ0FBVDtBQUNEOztBQUVELFNBQU8sRUFBRVgsa0JBQUYsRUFBUDtBQUNELEM7O0FBbkNEOztJQUFZQyxHIiwiZmlsZSI6ImNzcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi8uLi91dGlscy9sb2cnO1xuXG4vLyAvLy8vLy8vL1xuLy8gQ1NQLiBGaXggQ29udGVudCBzZWN1cml0eSBwb2xpY3kgdG8gYWxsb3cgZXZhbCB3ZWJwYWNrIHNjcmlwdHMgaW4gZGV2ZWxvcG1lbnQgbW9kZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1hbmlmZXN0KSB7XG4gIGxvZy5wZW5kaW5nKCdQcm9jZXNzaW5nIENTUCcpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGxldCBjc3AgPSBtYW5pZmVzdFsnY29udGVudF9zZWN1cml0eV9wb2xpY3knXSB8fCAnJztcblxuICAgIGNvbnN0IG9iamVjdFNyYyA9IFwib2JqZWN0LXNyYyAnc2VsZidcIjtcblxuICAgIGlmICh+Y3NwLmluZGV4T2YoJ29iamVjdC1zcmMnKSkge1xuICAgICAgY3NwID0gY3NwLnJlcGxhY2UoJ29iamVjdC1zcmMnLCBvYmplY3RTcmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3AgPSBgJHtvYmplY3RTcmN9OyAke2NzcH1gO1xuICAgIH1cblxuICAgIC8vIFRPRE8gYWRkIGhvc3QgaW50byBzb21lIGNvbmZpZ1xuICAgIGNvbnN0IHNjcmlwdFNyYyA9IFwic2NyaXB0LXNyYyAnc2VsZicgJ3Vuc2FmZS1ldmFsJyBodHRwczovL2xvY2FsaG9zdDozMDAxXCI7XG5cbiAgICBpZiAofmNzcC5pbmRleE9mKCdzY3JpcHQtc3JjJykpIHtcbiAgICAgIGNzcCA9IGNzcC5yZXBsYWNlKCdzY3JpcHQtc3JjJywgc2NyaXB0U3JjKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3NwID0gYCR7c2NyaXB0U3JjfTsgJHtjc3B9YDtcbiAgICB9XG5cbiAgICBtYW5pZmVzdFsnY29udGVudF9zZWN1cml0eV9wb2xpY3knXSA9IGNzcDtcblxuICAgIGxvZy5kb25lKCdEb25lJyk7XG4gIH0gZWxzZSB7XG4gICAgbG9nLmRvbmUoJ1NraXBwZWQgaW4gcHJvZHVjdGlvbiBlbnZpcm9ubWVudCcpO1xuICB9XG5cbiAgcmV0dXJuIHsgbWFuaWZlc3QgfTtcbn1cbiJdfQ==