var path = require('path');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // VARIABLES

        buildOutput: 'build/',
        pkg: grunt.file.readJSON('package.json'),


        sassFiles: 'app/**/*.scss',
        sassMain: 'app/main.scss',

        // TASKS

        sass: {                                    // task
            dist: {                                // target
                files: {                        // dictionary of files
                    '<%= buildOutput %>/main.css': '<%= sassMain %>'        // 'destination': 'source'
                }
            }
        },

        watch: {

            sass: {
                tasks: ['sass'],
                files: '<%= sassFiles %>'
            }

        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    //Development
    grunt.registerTask('dev', ['default', 'watch']);
    grunt.registerTask('default', ['sass']);

};
