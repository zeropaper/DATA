'use strict';
module.exports.register = function (Handlebars) {
  var atPath = require('./at-path');
  var TimeTree = require('./timetree');

  function toArray(objects) {
    if (objects && !objects.slice) {
      objects = Object.keys(objects).map(function (key) { return objects[key]; });
    }
    return objects;
  }


  Handlebars.registerHelper('timetree', function (objects, prop, block) {
    var timeTree = new TimeTree(toArray(objects).map(function (item) {
      return {
        date: item[prop],
        body: (block.fn ? block.fn : block)(item)
      };
    }));

    return timeTree.render();
  });


  Handlebars.registerHelper('eachSorted', function (objects, prop, block) {
    var str = '';
    if (arguments.length < 3) {
      return 'eachSorted helper needs 2 parameters';
    }

    objects = toArray(objects);

    objects = (objects || [])
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
