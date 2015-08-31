 
//grunt.option('target')

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    theme: grunt.option('theme'),
    
    copy: {
      files: {    	
    	nonull: true,
    	expand: true,
    	cwd: '../skin/frontend/<%= theme %>/css/',
    	src: ["*.*", "**/*.*"],
        dest: '../skin/frontend/<%= theme %>/source/css/'
      }  
    },
    
    cssmin: {
    	files: {
            expand: true,
            cwd: '../skin/frontend/<%= theme %>/css/',
            src: ["*.*", "**/*.*"],
            dest: '../skin/frontend/<%= theme %>/min/css/'             
        }
    },          
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-yui-compressor');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  // Default task(s).
  grunt.registerTask('default', ['copy','cssmin']);

};