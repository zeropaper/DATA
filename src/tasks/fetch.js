/* jshint node: true */
'use strict';
module.exports = function (grunt) {
  grunt.registerMultiTask('fetch', 'Download files', function () {
    var requests = [];
    var async = require('async');
    var request = require('request');
    var done = this.async();
    var config = grunt.config('fetch.' + this.target);

    config.options = config.options || {};

    // https://www.npmjs.org/package/request#request-options-callback-
    var toCopy = [
      'uri',
      'url',
      'agentOptions',
      'qs',
      'useQuerystring',
      'method',
      'headers',
      'body',
      'form',
      'formData',
      'multipart',
      'auth',
      'json',
      'preambleCRLF',
      'postambleCRLF',
      'followRedirect',
      'followAllRedirects',
      'maxRedirects',
      'encoding',
      'pool',
      'timeout',
      'proxy',
      'oauth',
      'hawk',
      'strictSSL',
      'agentOptions',
      'jar',
      'aws',
      'httpSignature',
      'localAddress',
      'gzip',
      'tunnel',
      'proxyHeaderWhiteList',
      'proxyHeaderExclusiveList'
    ];

    function makeRequest(src, dest) {
      return function (cb) {
        grunt.log.writeln('Fetching ' + src);

        var requestOptions = {
          url: src
        };

        for (var n in toCopy) {
          var name = toCopy[n];
          if (typeof config.options[name] !== 'undefined') {
            requestOptions[name] = config.options[name];
          }
        }

        request(requestOptions, function (error, response, body) {
          if (!error && response.statusCode >= 200 && response.statusCode < 400) {
            grunt.verbose.writeln('fetched ' + src + ',');
            grunt.verbose.writeln('and writing to ' + dest + '');
            grunt.file.write(dest, body);
          }
          else {
            error = error || new Error('Status not OK (got ' + response.statusCode + ')');
            grunt.log.error(error);
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
