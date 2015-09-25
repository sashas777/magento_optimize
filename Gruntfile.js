 
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
        dest: './source/skin/frontend/<%= theme %>/css/'	   
      },

      js:{	    
         	nonull: true,
         	expand: true,
         	cwd: '../skin/frontend/<%= theme %>/js/',
         	src: ["*.*", "**/*.*"],
          dest: './source/skin/frontend/<%= theme %>/js/'	   
        },      
	   
      img:{	    
       	nonull: true,
     	expand: true,
     	cwd: '../skin/frontend/<%= theme %>/images/',
     	src: ["*.*", "**/*.*"],
     	dest: './source/skin/frontend/<%= theme %>/images/'	   
    },   
	    
    },
    
    cssmin: {
    	files: {
            expand: true,
            cwd: '../skin/frontend/<%= theme %>/css/',
            src: ["*.*", "**/*.*"],
            dest: './min/skin/frontend/<%= theme %>/css/'             
        }
    },          
    
    closureCompiler:  {    	 
    	options: {    		
    		checkModified: true,    		        	
        	compilerFile: './closure-compiler/build/compiler.jar',        	 
        	 
        	compilerOpts: {
        		language_in: 'ECMASCRIPT5',
        	 }
        },
          
        targetName: {
          expand: true,
    	  cwd: '../skin/frontend/<%= theme %>/js/',
    	  src: "*.js",
    	  dest: './min/skin/frontend/<%= theme %>/js/'
        }  
      },
      
     imagemin: {    
    	  
	      dynamic: {                         
	        files: [
	          {
		          expand: true,
		          cwd: '../skin/frontend/<%= theme %>/images/',
		          src: ['**/*.{png,jpg,gif}'],
		          dest: './min/skin/frontend/<%= theme %>/images/'                 
	          },
	          {
		          expand: true,
		          cwd: '../media/',
		          src: ['**/*.{png,jpg,gif}'],
		          dest: './min/media/'                 
		      }
	        ]
	      }  
		       
      }
      
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-yui-compressor');
  grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-closure-tools');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  
  // Default task(s).
  grunt.registerTask('default', ['newer:copy:css','newer:cssmin','newer:copy:js','newer:closureCompiler','newer:copy:img','newer:imagemin']);

};