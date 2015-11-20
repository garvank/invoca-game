module.exports = function(grunt) {
  
  // Configure Grunt
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['Grunfile.js', 'src/**/*.js']
    },
    uglify: {
      options: {
        banner: '/* ----------------- *\n * The Game          *\n * Updated: <%= grunt.template.today("mm/dd/yy") %> *\n * ----------------- */\n\n'
      },
      build: {
        files: {
          'game.min.js': 'src/*'
        }
      }
    }

  });


  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register tasks
  grunt.registerTask('default', ['jshint', 'uglify']);
};