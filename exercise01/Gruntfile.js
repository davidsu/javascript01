'use strict';

module.exports = function (grunt) {

    grunt.config.init({
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
                    'build/css//main/main.css': ['src/css/layouts/**/*.css', 'src/css/main/**/*.css'],
                    'build/css/themes/theme-bright/main.css': ['src/css/themes/theme-bright/**/*.css', 'src/css/themes/tooltip.css'],
                    'build/css/themes//theme-dark/main.css': ['src/css/themes/theme-dark/**/*.css', 'src/css/themes/tooltip.css']
                }
            }
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
                        src: ['index.html', 'items**/*.js', 'server**/*.*'],
                        dest: 'build/'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['clean', 'copy', 'uglify', 'cssmin'])
};