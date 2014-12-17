/**
 * Created by jurgo.boemo on 16/12/2014.
 */
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    react = require('gulp-react');


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
    return gulp.src('flux/main.js')
        .pipe(react())
        .pipe(gulp.dest('./flux/jsx/'));
});

gulp.task('watch', function () {
    //gulp.watch(['./*.html', './templates/*.html'], ['html']);
    gulp.watch( ['./**/*.html'], ['html']);
    gulp.watch( ['./flux/**/*.js' ], ['compile_jsx']);
    gulp.watch( ['./angularjs/**/*.js','./emberjs/**/*.js', './flux/**/*.js' ], ['js_refresh']);


});

gulp.task('default', ['connect', 'watch']);
