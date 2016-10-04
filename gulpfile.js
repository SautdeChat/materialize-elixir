var gulp = require('gulp');
var elixir = require('laravel-elixir');
var uglify = require('gulp-uglify');

var Task = elixir.Task;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.extend('uglify', function() {

	new Task('uglify', function() {
 
	    return gulp.src('public/js/*.js')
	        .pipe(uglify())
	        .pipe(gulp.dest('public/js'))
		    .on('error', function(err) {
		      console.error('Error in compress task', err.toString());
		    });
	});
});

elixir(function(mix) {
    mix.sass('app.scss', 'public/css/app.css')

    	.scripts([
    		"initial.js",
			"jquery.easing.1.3.js",
			"animation.js",
			"velocity.min.js",
			"hammer.min.js",
			"jquery.hammer.js",
			"global.js",
			"collapsible.js",
			"dropdown.js",
			"leanModal.js",
			"materialbox.js",
			"parallax.js",
			"tabs.js",
			"tooltip.js",
			"waves.js",
			"toasts.js",
			"sideNav.js",
			"scrollspy.js",
			"forms.js",
			"slider.js",
			"cards.js",
			"chips.js",
			"pushpin.js",
			"buttons.js",
			"transitions.js",
			"scrollFire.js",
			"date_picker/picker.js",
			"date_picker/picker.date.js",
			"character_counter.js",
			"carousel.js",
			"app.js"
		], 'public/js/dpt.js')

		.uglify()

		.version(['css/app.css', 'js/app.js']);
});
