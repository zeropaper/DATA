/* jshint node: true */
'use strict';
module.exports = function (grunt) {
  var GitBeat = require('git-beat');
  var tmp = require('tmp');

  grunt.registerMultiTask('gitbeat-history', 'Make a json file of git log', function () {
    var options = grunt.config('gitbeat-history.options');
    var config = grunt.config('gitbeat-history.' + this.target + '');
    // TODO: merge options?

    var done = this.async();

    if (!config.options.dest) {
      return done(new Error('Missing `dest` for gitbeat-history:' + this.target));
    }

    console.info('config url', grunt.config('gitbeat-history.' + this.target + '.options.url'));

    tmp.setGracefulCleanup();

    tmp.dir(function (err, tmpdir) {
      var gitBeat = new GitBeat({
        cwd: tmpdir,
        logger: grunt.log.writeln
      });

      gitBeat.clone(options.url, function (err) {
        if (err) {
          return done(err);
        }

        gitBeat.checkout(config.options.branch || 'master', function (err) {
          if (err) {
            return done(err);
          }

          gitBeat.log({}, function (err, result) {
            if (err) {
              return done(err);
            }

            try {
              grunt.file.write(config.options.dest, JSON.stringify(result, null, 2));
            }
            catch (err) {
              return done();
            }

            done();
          });
        });
      });
    });
  });
};
