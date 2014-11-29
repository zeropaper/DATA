var atPath = require('./at-path');

var TimeTree = module.exports = function (objects, options) {
  var self = this;
  options = options || {};

  this.data = [];
  this.dateProp = options.dateProp || 'date';

  objects.forEach(function (obj) {
    self.add(obj);
  });
};

var defaultMonthNames = [
  '',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

var defaultFlexions = [
  '',
  'st',//1st
  'nd',//2nd
  'rd',//3rd
  'th',//4th
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',//10th
  'th',//11th
  'th',//12th
  'th',//13th
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',//20th
  'st',//21st
  'nd',//22nd
  'rd',//23rd
  'th',//24th
  'th',
  'th',
  'th',
  'th',
  'th',
  'th',//30th
  'st' //31st
];



function dateParts(date) {
  date = typeof date === 'string' ? new Date(date) : date;
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    seconds: date.getSeconds(),
    offset: date.getTimezoneOffset()
  };
}


function byValue(arr, val) {
  for (var a in arr) {
    if (arr[a].value === val) {
      return arr[a];
    }
  }
}


function compareValues(a, b) {
  return a.value > b.value;
}


function startWithZero(number) {
  return ('' + number).length === 1 ? ('0' + number) : number;
}


TimeTree.prototype.add = function (item, options) {
  var date = atPath(item, this.dateProp);
  if (!date) {
    return this;
  }

  options = options || {};
  var flexions = options.flexions || defaultFlexions;
  var monthNames = options.monthNames || defaultMonthNames;
  var parts = dateParts(date);

  var year = byValue(this.data, parts.year);
  if (!year) {
    year = { value: parts.year, label: parts.year, items: [] };
    this.data.push(year);
    this.data.sort(compareValues);
  }

  var month = byValue(year.items, parts.month);
  if (!month) {
    month = { value: parts.month, label: monthNames[parts.month], items: [] };
    year.items.push(month);
    year.items.sort(compareValues);
  }

  var day = byValue(month.items, parts.day);
  if (!day) {
    day = { value: parts.day, label: parts.day + flexions[parts.day], items: [] };
    month.items.push(day);
    month.items.sort(compareValues);
  }

  var hour = byValue(day.items, parts.hour);
  if (!hour) {
    hour = { value: parts.hour, label: parts.hour, items: [] };
    day.items.push(hour);
    day.items.sort(compareValues);
  }

  var minute = byValue(hour.items, parts.minute);
  if (!minute) {
    minute = { value: parts.minute, label: startWithZero(parts.minute), items: [] };
    hour.items.push(minute);
    hour.items.sort(compareValues);
  }
  minute.items.push(item.body);

  return this;
};




TimeTree.prototype.render = function (options) {
  var str = '';

  str += '<ul class="timetree">';
  this.data.forEach(function (year) {
    str += '<li class="year" data-value="' + year.value + '">' +
           '<div class="date-label">' + year.label + '</div>' +
           '<ul class="date-items">';
    year.items.forEach(function (month) {
      str += '<li class="month" data-value="' + month.value + '">' +
             '<div class="date-label">' + month.label + '</div>' +
             '<ul class="date-items">';
      month.items.forEach(function (day) {
        str += '<li class="day" data-value="' + day.value + '">' +
               '<div class="date-label">' + day.label + '</div>' +
               '<ul class="date-items">';
        day.items.forEach(function (hour) {
          str += '<li class="hour" data-value="' + hour.value + '">' +
                 '<div class="date-label">' + hour.label + '</div>' +
                 '<ul class="date-items">';
          hour.items.forEach(function (minute) {
            str += '<li class="minute" data-value="' + minute.value + '">' +
                   '<div class="date-label">' + minute.label + '</div>' +
                   '<ul class="date-items">';
            minute.items.forEach(function (item) {
              str += '<li class="timetree-item">' +
                     item +
                     '</li>';
            });
            str += '</ul></li>';
          });
          str += '</ul></li>';
        });
        str += '</ul></li>';
      });
      str += '</ul></li>';
    });
    str += '</ul></li>';
  });
  str += '</ul>';

  return str;
};
