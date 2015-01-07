var gulp = require('gulp'),
    connect = require('gulp-connect'),
    react = require('gulp-react'),
    bower = require('gulp-bower');

gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true,
        port: 8000
    });
});

gulp.task('html', function () {
    gulp.src(['./**/*.html'])
        .pipe(connect.reload());
});

gulp.task('js_refresh', function () {
    gulp.src(['./**/*.js'])
        .pipe(connect.reload());
});

gulp.task('compile_jsx', function () {
    return gulp.src('flux/js/main.js')
        .pipe(react())
        .pipe(gulp.dest('./flux/jsx/'));
});

gulp.task('bower_flux', function() {
    return bower({cwd: './flux'});
});
gulp.task('bower_angular', function() {
    return bower({cwd: './angularjs'});
});

gulp.task('watch', function () {
    gulp.watch( ['./**/*.html'], ['html']);
    //gulp.watch( ['./flux/**/*.js' ], ['compile_jsx']);
    //gulp.watch( ['./angularjs/**/*.js','./emberjs/**/*.js', './flux/**/*.js' ], ['js_refresh']);
    gulp.watch( ['./angularjs/**/*.js','./emberjs/**/*.js' ], ['js_refresh']);
});


gulp.task('default', ['connect', 'watch']);
gulp.task('install', ['bower_flux','bower_angular' ])
