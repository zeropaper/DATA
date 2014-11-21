/* jshint node: true */
'use strict';
module.exports = function (grunt) {
  grunt.registerMultiTask('fetch', 'Download files', function () {
    var requests = [];
    var async = require('async');
    var request = require('request');
    var done = this.async();
    var config = grunt.config('fetch.' + this.target);

    function makeRequest(src, dest) {
      return function (cb) {
        grunt.log.writeln('Fetching ' + src);
        request(src, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            grunt.verbose.writeln('fetched ' + src + ',');
            grunt.verbose.writeln('and writing to ' + dest + '');
            grunt.file.write(dest, body);
          }
          else {
            grunt.log.error(error ? error : new Error('Status not 200'));
          }
          cb(error, dest);
        });
      };
    }


    for (var f in config.files) {
      requests.push(makeRequest(config.files[f].src, config.files[f].dest));
    }


    async.series(requests, done);
  });
};
