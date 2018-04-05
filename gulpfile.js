var gulp = require ('gulp'),
watch = require('gulp-watch');


gulp.task('default', function(){
	console.log("Nice, this is a gulp task!");
});

gulp.task('html', function(){
	console.log("Something beind done to my index.html");
});

gulp.task('styles', function(){
	console.log("Something beind done to any of my css file");
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});