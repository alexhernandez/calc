var elixir = require('laravel-elixir');
// var scssLint = require('laravel-elixir-scss-lint');

// Set Bower Package Path
var bowerPath = './bower_components';

// Get Bower Packages
var paths = {};

elixir(function(mix) {
    // Scripts Task
    mix.browserify([
      'reckon.js',
    ], 'dist/js/reckon.js', 'src/js/' );

    // Sass Task
    mix.sass('reckon.scss', 'dist/css', 'src/sass');
});
