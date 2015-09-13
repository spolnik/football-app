module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ["build"],
            release: ["dist"]
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'build/main.css': 'src/css/main.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')()
                ]
            },
            dist: {
                src: 'build/main.css'
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'build/main.js']
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/jQuery-One-Page-Nav/jquery.nav.js',
                    'build/main.js'
                ],
                dest: 'build/bundle.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/bundle.min.js': 'build/bundle.js'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/bundle.min.css': [
                        'bower_components/bootstrap/dist/css/bootstrap.min.css',
                        'bower_components/font-awesome/css/font-awesome.min.css',
                        'build/main.css'
                    ]
                }
            }
        },
        coffee: {
            compile: {
                files: {
                    'build/main.js': 'src/js/app.coffee'
                }
            }
        //},
        //imagemin: {
        //    static: {
        //        files: {
        //            'dist/overlays/02.png': 'app/overlays/02.png'
        //        }
        //    },
        //    dynamic: {
        //        files: [{
        //            expand: true,
        //            cwd: 'app/img/',
        //            src: ['**/*.{png,jpg}'],
        //            dest: 'dist/img/'
        //        }]
        //    }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('js',
        ['coffee', 'jshint', 'concat', 'uglify']
    );

    grunt.registerTask('css',
        ['sass', 'postcss', 'cssmin']
    );

    grunt.registerTask('default',
        ['clean', /*'imagemin',*/ 'js', 'css']
    );
};
