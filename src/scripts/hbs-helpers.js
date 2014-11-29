'use strict';
module.exports.register = function (Handlebars) {
  var atPath = require('./at-path');
  var TimeTree = require('./timetree');

  Handlebars.registerHelper('timetree', function (objects, prop, block) {
    // convert object to array if needed
    if (objects && !objects.slice) {
      objects = Object.keys(objects).map(function (key) { return objects[key]; });
    }

    var timeTree = new TimeTree(objects.map(function (item) {
      item.body = (block.fn ? block.fn : block)(item);
      return item;
    }), {
      dateProp: prop
    });

    return timeTree.render();
  });


  Handlebars.registerHelper('eachSorted', function (arr, prop, block) {
    var str = '';

    // convert object to array if needed
    if (arr && !arr.slice) {
      var array = [];
      for (var k in arr) {
        array.push(arr[k]);
      }
      arr = array;
    }

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
