/**
 * Created by jurgo.boemo on 16/12/2014.
 */
var gulp = require('gulp'),
    connect = require('gulp-connect');

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

gulp.task('watch', function () {
    gulp.watch( ['./**/*.html'], ['html']);
    gulp.watch( ['./angularjs/**/*.js','./emberjs/**/*.js', './flux/**/*.js' ], ['js_refresh']);

});

gulp.task('default', ['connect', 'watch']);
