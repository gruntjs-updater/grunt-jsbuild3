/*
 * emp.ria-grunt-jsbuild3
 * https://code.google.com/p/emp-ria/
 *
 * Copyright (c) 2013 Volodymyt Iatsyshyn
 * Licensed under the MIT license.
 */

'use strict';

var JsBuild3 = require('emp.ria-jsbuild3');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('jsbuild3', 'EMP RIA Jsbuild3 Gruntjs plugin', function () {
        var done = this.async();

        // Merge task-specific and/or target-specific options with these defaults.
        var ARGS = this.options({
            config: 'jsbuild.json',
            modules: []
        });
        
        var logger = {
          info: function () { grunt.log.ok.apply(null, arguments); },
          warn: function () { grunt.log.subhead.apply(null, arguments); },
          log: function () { grunt.log.write.apply(null, arguments); },
          debug: function () { grunt.log.debug.apply(null, arguments); },
          error: function () { grunt.log.error.apply(null, arguments); },
        };

        JsBuild3(ARGS.config, ARGS.modules, done, logger);
    });

};
