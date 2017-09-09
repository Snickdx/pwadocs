var gulp = require('gulp'),
	inject = require('gulp-inject-string'),
	textTransformation = require('gulp-text-simple'),
	shell = require('gulp-shell'),
	path = require('path'),
	template = require('gulp-template'),
	swPrecache = require('sw-precache'),
	runSequence = require('run-sequence'),
	fs = require('fs'),
	rootDir = 'site';

gulp.task('mkdocs-build', shell.task([
	'mkdocs build --clean'
]));

gulp.task('inject-pwa', function() {
	
	fs.readFile('config.json', function(err, data){
		var config = JSON.parse(data);
		
		gulp.src("PWA/manifest.json").pipe(gulp.dest('site/'));
		gulp.src("assets/**/*").pipe(gulp.dest('site/assets/'));
		gulp.src('PWA/index.html').pipe((textTransformation(function(str){
			gulp.src('site/**/index.html')
				.pipe(inject.after('</title>', str))
				.pipe(template(config))
				.pipe(gulp.dest('site'));
			return str;
		}))());
		
		config.icons = [
			{
				"src": config.img_36,
				"sizes": "36x36",
				"type": "image/png"
			},
			{
				"src": config.img_192,
				"sizes": "192x192",
				"type": "image/png"
			},
			{
				"src": config.img_512,
				"sizes": "512x512",
				"type": "image/png"
			}
		];
		
		config.display = "standalone";
		config.scope = "/";
		fs.writeFile("site/manifest.json", JSON.stringify(config), function(err) {
			if(err) {
				return console.log(err);
			}
		});
		
	});
	
	
});

gulp.task('generate-sw', function(){
	swPrecache.write(path.join(rootDir, 'service-worker.js'), {
		staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,json}'],
		stripPrefix: rootDir
	});
});

gulp.task('build-site', function(){
	runSequence('mkdocs-build', 'inject-pwa', 'generate-sw');
});

gulp.task('default', ['build-site'], function() {
});