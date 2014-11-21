/*jshint debug: true */

var DATA = {};

var GitHubAPIURL = 'https://api.github.com';
var DATAissuesPath = 'repos/zeropaper/DATA/issues';
//

var Handlebars = require('handlebars/runtime').default;
require('./hbs-helpers').register(Handlebars);
var templates = DATA.templates = require('templates')(Handlebars);


function GitHub() {

}

GitHub.prototype.issues = function (done) {
  $.ajax({
    url: GitHubAPIURL + '/' + DATAissuesPath,
    error: done,
    success: function (response) { done(null, response); }
  });
};

var gh = new GitHub();
gh.issues(function (err, issues) {
  var html = [];
  issues.forEach(function (issue) {
    html.push('<div>' + '' + '</div>');
  });
});

