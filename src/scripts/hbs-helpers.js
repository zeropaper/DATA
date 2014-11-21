'use strict';
module.exports.register = function (Handlebars, options, params) {
  /**
   * Utility to get a value deep in a object.
   *
   * @param {Object} obj          - an object to dig in
   * @param {string} varPath      - the path at which the value is searched
   * @returns {*}
   */
  function atPath(obj, varPath, splitter) {
    var paths = varPath.split(splitter || '.');
    var current = obj;
    var i;
    var val;
    var name;
    var set;
    var setNow;

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
  }


  Handlebars.registerHelper('eachSorted', function (arr, prop, block) {
    var str = '';

    arr = (arr || [])
      .slice()
      .sort(function (a, b) {
        var x = parseInt(atPath(a, prop) || 0, 10);
        var y = parseInt(atPath(b, prop) || 0, 10);
        return x > y;
      })
      .forEach(function (item) {
        str += (block.fn ? block.fn : block)(item);
      });
    return str;
  });

  Handlebars.registerHelper('cssName', function (block) {
    var str;
    if (arguments.length === 2) {
      str = arguments[0];
      block = arguments[1];
    }
    str = typeof str === 'function' ? str() : str;
    str = (str || '').replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
    return str;
  });
};
