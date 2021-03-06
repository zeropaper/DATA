/**
 * Utility to get a value deep in a object.
 *
 * @param {Object} obj          - an object to dig in
 * @param {string} varPath      - the path at which the value is searched
 * @returns {*}
 */
var atPath = module.exports = function (obj, varPath, splitter) {
  var paths = varPath.split(splitter || '.');
  var current = obj;
  var i;
  var val;
  var name;

  if (!varPath) {
    throw new Error('Missing argument, `obj` and `path` are required.');
  }

  for (i = 0; i < paths.length; ++i) {
    name = paths[i];
    val = current[name];

    if (typeof val === 'undefined') {
      if (i === paths.length - 1) { return; }
      current[name] = val || {};
      current = current[name];
    }
    else {
      current = val;
    }
  }

  return current;
};
