module.exports = function(grunt) {

grunt.initConfig({
    serve: {
        options: {
            port: 8000
        }
    }
});

  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['jshint']);

};