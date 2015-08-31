 
//grunt.option('target')

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    theme: grunt.option('theme'),
    
    copy: {   
      css:{	    
       	nonull: true,
       	expand: true,
       	cwd: '../skin/frontend/<%= theme %>/css/',
       	src: ["*.*", "**/*.*"],
        dest: '../skin/frontend/<%= theme %>/source/css/'	   
      },

      js:{	    
         	nonull: true,
         	expand: true,
         	cwd: '../skin/frontend/<%= theme %>/js/',
         	src: ["*.*", "**/*.*"],
          dest: '../skin/frontend/<%= theme %>/source/js/'	   
        },      
	   
	    
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
  grunt.loadNpmTasks('grunt-closure-compiler');
  
  // Default task(s).
  grunt.registerTask('default', ['copy:css','cssmin','copy:js']);

};