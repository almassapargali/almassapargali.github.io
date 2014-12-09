'use strict';
module.exports = function (grunt) {
	grunt.initConfig({ 
        watch: {
          css: {
            files: ['styles.css', 'reset.css'],
            tasks: ['autoprefixer', 'cssmin']
          },
          html: {
            files: ['index.src.html'],
            tasks: ['htmlmin']
          }
        },
        autoprefixer: {
          css: {
              src: 'styles.css',
              dest: 'styles.prefixed.css'
          }
        },
        cssmin: {
          combine: {
            files: {
              'styles.min.css': ['reset.css', 'styles.prefixed.css', 'buttons.css']
            }
          }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    useShortDoctype: true,
                    removeRedundantAttributes: true,
                    removeAttributeQuotes: true,
                    collapseBooleanAttributes: true
                },
                files: {
                    'index.html': 'index.src.html'
                }
            },
        }
	});
    
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default', ['autoprefixer', 'cssmin', 'htmlmin', 'watch']);
};