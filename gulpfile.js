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
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    //gulp.watch(['./*.html', './templates/*.html'], ['html']);
    gulp.watch(['./*/*.js','./*/*.html' ], ['html']);
});

gulp.task('default', ['connect', 'watch']);
