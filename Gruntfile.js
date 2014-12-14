'use strict';
module.exports = function (grunt) {
	grunt.initConfig({ 
    watch: {
      site: {
        files: '_site/**/*',
        options: {
          livereload: true
        }
      }
    }
	});
    
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};