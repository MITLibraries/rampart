module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    backstop: {
      setup: {
        options: {
          backstop_path: './bower_components/backstopjs',
          test_path: './tests',
          setup: false,
          configure: true
        }
      },
      test: {
        options: {
          backstop_path: './bower_components/backstopjs',
          test_path: './tests',
          create_references: false,
          run_tests: true
        }
      },
      reference: {
        options: {
          backstop_path: './bower_components/backstopjs',
          test_path: './tests',
          create_references: true,
          run_tests: false
        }
      }
    }
  });

  // Load the plugin that provies the "uglify" task.
  grunt.loadNpmTasks('grunt-backstop');

  // Default task.
  grunt.registerTask('default', ['backstop:test']);

};