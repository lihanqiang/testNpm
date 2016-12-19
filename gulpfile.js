var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
// var webserver = require('webserver');


//设置路径
var paths = {
	app: 'app',
	dist: 'dist',
	scriptsMain: ['app/scripts/**/*.js', 'app/scripts/**/*.coffee'], //** 表示下面的所有子文件夹
	stylesMain: ['app/styles/**/*.scss', 'app/styles/**/*.css'],
	indexMain: 'app/index.html',
	distScript: 'dist/scripts',
	distStyle: 'dist/styles',
	jsLibs: [
	    'bower_components/jquery/dist/jquery.js',
	    'bower_components/angular/angular.js',
	    'bower_components/lodash/dist/lodash.js'
 	]
}

gulp.task('copyFile', function() {
	return gulp.src('app/images/*.*')
	.pipe(plugins.plumber())
	.pipe(gulp.dest('dist/images'));
})
gulp.task('copyIndex', function() {
	return gulp.src('app/index.html')
	.pipe(plugins.plumber())
	.pipe(gulp.dest('dist'))
})
gulp.task('copyTemplates', function() {
	return gulp.src("app/templates/**/*.html")
	.pipe(plugins.plumber())
	.pipe(gulp.dest("dist/templates"))
})
gulp.task('concat', function() {
	return gulp.src(paths.jsLibs)
	.pipe(plugins.plumber())
	.pipe(plugins.concat('dependence.js'))
	.pipe(gulp.dest(paths.distScript));
})
gulp.task('sass-deploy', function() {
	return gulp.src(paths.stylesMain)
	.pipe(plugins.plumber())
	.pipe(plugins.sass({outputStyle: 'expanded'}))
 	.pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
	}))
	.pipe(gulp.dest(paths.distStyle));
})
gulp.task('coffee-deploy', function() {
	return gulp.src(paths.scriptsMain)
	.pipe(plugins.plumber())
	.pipe(plugins.coffee())
	.pipe(plugins.concat('main.js'))
	.pipe(gulp.dest(paths.distScript));
})

gulp.task('webserver', function() {
	return gulp.src('dist')
	.pipe(plugins.webserver({
		livereload: true,
		open: true,
		port: '4001'
	}))
})
gulp.task('watch', function() {
	gulp.watch('app/index.html', ['copyIndex']);
	gulp.watch('app/templates/**/*.html', ['copyTemplates']);
	gulp.watch(paths.stylesMain, ['sass-deploy']);
	gulp.watch(paths.scriptsMain, ['coffee-deploy']);
	gulp.watch(['app/index.html', 'app/styles/*.scss', 'app/scripts/**/*.coffee'])
	.on('change', plugins.livereload.changed);
})

gulp.task('default', [
		'copyFile',
		'copyIndex',
		'copyTemplates',
		'concat',
		'sass-deploy',
		'coffee-deploy',
		'watch',
		'webserver'
])

