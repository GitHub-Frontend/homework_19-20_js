module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'src/scss/style.scss'
                }
            }
        },
        concat: {
            js: {
              src: ['src/js/script/*.js'],
              dest: 'dist/js/script.main.js',
            },
            css: {
              src: ['css/**/*.css'],
              dest: 'dist/css/style.main.css',
            }
      },
      cssmin: {
          target: {
              files: {
                'dist/css/style.main.min.css': ['dist/css/style.main.css']
              }
            }
      },
      uglify: {
          dist: {
              src: ['dist/js/script.main.js'],
              dest: 'dist/js/script.main.min.js',
          },
    }

    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'uglify']);
};
