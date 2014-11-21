/*
 * Generated on 2014-10-03
 * generator-assemble v0.5.0
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 *
 * Edited by Valentin Vago for DATA project
 */

'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  function processName(filePath) {
    var returned = filePath
          .split('client/').pop()
          .split('partials/').pop()
          .replace(/\.hbs$/, '')
          .replace(/\//g, '--');
    return returned;
  }

  var pkg = grunt.file.readJSON(__dirname + '/package.json');

  // Project configuration.
  grunt.initConfig({
    pkg: pkg,

    'gitbeat-history': {
      options: {
        url: pkg.repository.url
        // url: 'file://' + __dirname + '/.git',
      },
      manifest: {
        options: {
          branch: 'master',
          dest: '.grunt/data/git-log-master.json'
        }
      },
      site: {
        options: {
          branch: 'site',
          dest: '.grunt/data/git-log-site.json'
        }
      }
    },

    gitstatus: {
      options: {
        currentRepository: true,
        dest: '.grunt/data/'
      },
      master: {
        options: {
          branch: 'master'
        },
        files: [
          'DATAmanifest.md'
        ]
      }
    },

    config: {
      src: 'src',
      dist: 'dist',
      DATAauthor: 'zeropaper',
      DATArepo: 'DATA',
      facebookAppId: '450048841802606'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
      },
      scripts: {
        options: {
          jshintrc: '<%= config.src %>/scripts/.jshintrc',
        },
        files: {
          src: [
            '<%= config.src %>/scripts/**/*.js'
          ]
        }
      },
      lib: {
        files: {
          src: [
            'Gruntfile.js',
            '<%= config.src %>/lib/**/*.js',
            '<%= config.src %>/tasks/*.js'
          ],
        }
      },
      mocha: {
        options: {
          jshintrc: 'test/.jshintrc',
        },
        files: {
          src: [
            'test/lib/*Spec.js',
            'test/lib/**/*Spec.js'
          ]
        }
      },
      mochacli: {
        options: {
          jshintrc: 'test/.jshintrc',
        },
        files: {
          src: [
            'test/lib/*Spec.js',
            'test/lib/**/*Spec.js'
          ],
        }
      }
    },

    jscs: {
      options: {
        config: '.jscs.json'
      },
      scripts: {
        files: {
          src: [
            '<%= config.src %>/scripts/**/*.js'
          ]
        }
      },
      lib: {
        files: {
          src: [
            'Gruntfile.js',
            '<%= config.src %>/lib/**/*.js',
            '<%= config.src %>/tasks/*.js'
          ],
        }
      },
      mocha: {
        files: {
          src: [
            'test/scripts/**/*Spec.js'
          ]
        }
      },
      mochacli: {
        files: {
          src: [
            'test/lib/**/*Spec.js'
          ]
        }
      }
    },

    mocha: {
      scripts: {}
    },

    mochacli: {
      options: {
        files: [
          'test/lib/**/*Spec.js'
        ]
      },
      spec: {
        options: {
          bail: true,
          reporter: 'spec',
          timeout: 10000
        }
      }
    },


    watch: {
      assemble: {
        files: [
          '<%= config.src %>/{content,data,templates}/**/*.{md,hbs,yml}',
          '<%= config.src %>/scripts/hbs-helpers.js'
        ],
        tasks: ['assemble']
      },
      less: {
        files: ['<%= config.src %>/styles/**/*.less'],
        tasks: ['less:styles']
      },
      handlebars: {
        files: ['<%= config.src %>/templates/client/**/*.hbs'],
        tasks: ['handlebars']
      },
      lib: {
        files: [
          '<%= config.src %>/lib/**/*.js'
        ],
        tasks: [
          'jshint:lib',
          'jscs:lib',
          'mochacli'
        ]
      },
      scripts: {
        files: [
          '<%= config.src %>/scripts/**/*.js',
          '.grunt/templates.js'
        ],
        tasks: [
          'jshint:scripts',
          'jscs:scripts',
          'mocha',
          'browserify:scripts'
        ]
      },
      mocha: {
        files: [
          'test/scripts/**/*Spec.js'
        ],
        tasks: [
          'jshint:mocha',
          'jscs:mocha',
          'mocha'
        ]
      },
      mochacli: {
        files: [
          'test/lib/**/*Spec.js'
        ],
        tasks: [
          'jshint:mochacli',
          'jscs:mochacli',
          'mochacli'
        ]
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      options: {
        flatten: true,
        expand: true,
        assets: '<%= config.dist %>/assets',
        layout: '<%= config.src %>/templates/layouts/default.hbs',
        data: '{<%= config.src %>,.grunt}/data/*.{json,yml}',
        partials: [
          '{<%= config.src %>,.grunt}/templates/partials/*.hbs',
          '{<%= config.src %>,.grunt}/templates/client/partials/*.hbs'
        ],
        helpers: [
          'handlebars-helper-moment',
          '<%= config.src %>/scripts/hbs-helpers.js'
        ]
      },

      pages: {
        files: [
          {
            flatten: false,
            expand: true,
            cwd: '<%= config.src %>/templates/pages/',
            src: '**/*.hbs',
            dest: '<%= config.dist %>/'
          },
          {
            flatten: false,
            expand: true,
            cwd: '.grunt/templates/pages/',
            src: '**/*.hbs',
            dest: '<%= config.dist %>/'
          }
        ]
      }
    },

    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/assets/',
            src: '**',
            dest: '<%= config.dist %>/assets/'
          },
          {
            expand: true,
            cwd: '.grunt/assets/',
            src: '**',
            dest: '<%= config.dist %>/assets/'
          },
          {
            expand: true,
            cwd: '<%= config.src %>',
            src: 'CNAME',
            dest: '<%= config.dist %>/'
          }
        ]
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>'],

    handlebars: {
      options: {
        namespace: 'DATA.templates',
        commonjs: true,
        partialRegex: /.+/,
        partialsPathRegex: /partial/g,
        processName: processName,
        processPartialName: processName,

        compilerOptions: {
          // // knownHelpers: {
          // // },
          // knownHelpersOnly: false
        }
      },
      templates: {
        files: [
          {
            src: '{<%= config.src %>,.grunt}/templates/client/**/*.hbs',
            // dest: '<%= config.src %>/scripts/templates.js'
            dest: '.grunt/templates.js'
          }
        ]
      }
    },

    less: {
      styles: {
        options: {
          cleancss: true,
        },
        files: {
          'dist/assets/css/styles.css': '<%= config.src %>/styles/styles.less'
        }
      }
    },


    browserify: {
      scripts: {
        options: {
          alias: ['./.grunt/templates.js:templates'],
          browserifyOptions: {
            debug: true
          }
        },
        files: [{
          dest: '<%= config.dist %>/assets/js/scripts.js',
          src: ['<%= config.src %>/scripts/index.js']
        }]
      }
    },


    fetch: {
      FAQ: {
        files: [
          {
            src: 'https://raw.github.com/<%= (config.DATAauthor +"/"+ config.DATArepo) %>/master/FAQ.md',
            dest: '.grunt/content/FAQ.md'
          },
          {
            src: 'https://raw.github.com/<%= (config.DATAauthor +"/"+ config.DATArepo) %>/master/DATAmanifest.md',
            dest: '.grunt/content/manifest.md'
          },
          {
            src: 'http://adodson.com/hello.js/dist/hello.all.js',
            dest: '.grunt/assets/js/hello.all.js'
          }
        ]
      }
    },


    'gh-pages': {
      options: {
        base: '<%= config.dist %>'
      },
      src: '**/*'
    }
  });

  grunt.loadTasks('src/tasks');

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'less',
    'handlebars',
    'browserify',
    'copy',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('publish-pages', [
    'gitbeat-history',
    'fetch',
    'build',
    'gh-pages'
  ]);

};
