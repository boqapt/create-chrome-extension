"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = easyRequire;
// import Module from 'module';

function easyRequire(callback) {
  // const originalRequire = Module.prototype.require
  // const originalResolve = Module.prototype.resolve
  //
  // Module.prototype.require = function(...args) {
  //   console.log("custom require", ...args)
  //   return originalRequire.apply(this, args)
  // };
  //
  // Module.prototype.resolve = function(...args) {
  //   console.log("custom resolve", ...args)
  //   return originalResolve.apply(this, args)
  // }

  var result = callback();

  // Module.prototype.require = originalRequire
  // Module.prototype.resolve = originalResolve

  return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9lYXN5UmVxdWlyZS5qcyJdLCJuYW1lcyI6WyJlYXN5UmVxdWlyZSIsImNhbGxiYWNrIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLFc7QUFGeEI7O0FBRWUsU0FBU0EsV0FBVCxDQUFzQkMsUUFBdEIsRUFBZ0M7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1DLFNBQVNELFVBQWY7O0FBRUE7QUFDQTs7QUFFQSxTQUFPQyxNQUFQO0FBQ0QiLCJmaWxlIjoiZWFzeVJlcXVpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTW9kdWxlIGZyb20gJ21vZHVsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhc3lSZXF1aXJlIChjYWxsYmFjaykge1xuICAvLyBjb25zdCBvcmlnaW5hbFJlcXVpcmUgPSBNb2R1bGUucHJvdG90eXBlLnJlcXVpcmVcbiAgLy8gY29uc3Qgb3JpZ2luYWxSZXNvbHZlID0gTW9kdWxlLnByb3RvdHlwZS5yZXNvbHZlXG4gIC8vXG4gIC8vIE1vZHVsZS5wcm90b3R5cGUucmVxdWlyZSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcImN1c3RvbSByZXF1aXJlXCIsIC4uLmFyZ3MpXG4gIC8vICAgcmV0dXJuIG9yaWdpbmFsUmVxdWlyZS5hcHBseSh0aGlzLCBhcmdzKVxuICAvLyB9O1xuICAvL1xuICAvLyBNb2R1bGUucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gIC8vICAgY29uc29sZS5sb2coXCJjdXN0b20gcmVzb2x2ZVwiLCAuLi5hcmdzKVxuICAvLyAgIHJldHVybiBvcmlnaW5hbFJlc29sdmUuYXBwbHkodGhpcywgYXJncylcbiAgLy8gfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG5cbiAgLy8gTW9kdWxlLnByb3RvdHlwZS5yZXF1aXJlID0gb3JpZ2luYWxSZXF1aXJlXG4gIC8vIE1vZHVsZS5wcm90b3R5cGUucmVzb2x2ZSA9IG9yaWdpbmFsUmVzb2x2ZVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=