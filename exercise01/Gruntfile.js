'use strict';

module.exports = function (grunt) {

    grunt.config.init({
        eslint: {
            target: ['src**/*.js', '!reactComponents**/*.js']
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.js', '!reactComponents/**', '!server**/*.*','!items**/*.js'],
                    dest: 'build'
                }]
            }

        },
        cssmin: {
            main: {
                files: {
                    'build/main.min.css': ['src/css/layouts/**/*.css', 'src/css/main/**/*.css'],
                    'build/theme_bright.min.css': ['src/css/themes/theme-bright/**/*.css', 'src/css/themes/tooltip.css'],
                    'build/theme_dark.min.css': ['src/css/themes/theme-dark/**/*.css', 'src/css/themes/tooltip.css']
                }
            }
        },
        processhtml: {
            'build/index.html': ['src/index.html']
        },
        clean: {
            src: ['build']
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['!index.html', 'items**/*.js', 'server**/*.*'],
                        dest: 'build/'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('build', ['clean', 'copy', 'uglify', 'cssmin', 'processhtml'])
};