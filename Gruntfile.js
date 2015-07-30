module.exports = function( grunt ) {

	// load tasks
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	// initialize grunt modules 
	grunt.initConfig( {

		// task :: @see https://github.com/gruntjs/grunt-contrib-jshint#getting-started
		jshint: {
			options: {
				reporter: require( 'jshint-stylish' )
			},
			all: [ 'src/jquery.missofis-countdown.js', 'Gruntfile.js' ]
		},
		// task :: @see https://github.com/gruntjs/grunt-contrib-uglify#getting-started
		uglify: {
			dist: {
				options: {
					preserveComments: 'some'
				},
				files: {
					'dist/jquery.missofis-countdown.min.js': 'src/jquery.missofis-countdown.js'
				}
			}			
		},
		// task :: @see https://github.com/gruntjs/grunt-contrib-watch#watch-task
		watch: {
			dev: {
				files: [ 'src/jquery.missofis-countdown.js' ],
				tasks: [ 'build' ]
			},
			configFiles: {
				files: 'Gruntfile.js',
				options: {
					reload: true
				}
			}
		}

	} );

	// register custom task for browserSync server
	grunt.registerTask( 'default', [ 'watch' ] );

	// register build task
	grunt.registerTask( 'build', [ 'jshint', 'uglify' ] );

};