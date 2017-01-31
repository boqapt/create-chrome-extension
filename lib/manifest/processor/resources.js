'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (manifest) {
  var resourcesScripts = manifest['web_accessible_resources'];

  if (!resourcesScripts) {
    return;
  }

  var scripts = [];

  resourcesScripts.forEach(function (scriptPath) {
    // Don't add HTML accessible resources to
    // the scripts entry
    if (/html$/.test(scriptPath)) {
      return;
    }

    scripts.push(scriptPath);
  });

  return { scripts: scripts };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYW5pZmVzdC9wcm9jZXNzb3IvcmVzb3VyY2VzLmpzIl0sIm5hbWVzIjpbIm1hbmlmZXN0IiwicmVzb3VyY2VzU2NyaXB0cyIsInNjcmlwdHMiLCJmb3JFYWNoIiwic2NyaXB0UGF0aCIsInRlc3QiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBVUEsUUFBVixFQUFvQjtBQUNqQyxNQUFNQyxtQkFBbUJELFNBQVMsMEJBQVQsQ0FBekI7O0FBRUEsTUFBSSxDQUFDQyxnQkFBTCxFQUF1QjtBQUNyQjtBQUNEOztBQUVELE1BQU1DLFVBQVUsRUFBaEI7O0FBRUFELG1CQUFpQkUsT0FBakIsQ0FBeUIsVUFBQ0MsVUFBRCxFQUFnQjtBQUN2QztBQUNBO0FBQ0EsUUFBSSxRQUFRQyxJQUFSLENBQWFELFVBQWIsQ0FBSixFQUE4QjtBQUM1QjtBQUNEOztBQUVERixZQUFRSSxJQUFSLENBQWFGLFVBQWI7QUFDRCxHQVJEOztBQVVBLFNBQU8sRUFBRUYsZ0JBQUYsRUFBUDtBQUNELEMiLCJmaWxlIjoicmVzb3VyY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG1hbmlmZXN0KSB7XG4gIGNvbnN0IHJlc291cmNlc1NjcmlwdHMgPSBtYW5pZmVzdFsnd2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzJ107XG5cbiAgaWYgKCFyZXNvdXJjZXNTY3JpcHRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc2NyaXB0cyA9IFtdO1xuXG4gIHJlc291cmNlc1NjcmlwdHMuZm9yRWFjaCgoc2NyaXB0UGF0aCkgPT4ge1xuICAgIC8vIERvbid0IGFkZCBIVE1MIGFjY2Vzc2libGUgcmVzb3VyY2VzIHRvXG4gICAgLy8gdGhlIHNjcmlwdHMgZW50cnlcbiAgICBpZiAoL2h0bWwkLy50ZXN0KHNjcmlwdFBhdGgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2NyaXB0cy5wdXNoKHNjcmlwdFBhdGgpO1xuICB9KTtcblxuICByZXR1cm4geyBzY3JpcHRzIH07XG59XG4iXX0=