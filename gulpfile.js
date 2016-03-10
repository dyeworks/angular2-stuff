var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var karma = require('karma');

gulp.task('bower', function () {
    return bower('./bower_components');
})

gulp.task('copyLibs', ['bower'], function () {
    gulp.src(['bower_components/angular/*.*'])
        .pipe(gulp.dest('public/libs/angular'));
  
    gulp.src(['bower_components/bootstrap/dist/css/*.*'])
        .pipe(gulp.dest('public/libs/bootstrap'));
  
    gulp.src(['bower_components/jquery/dist/*.*'])
        .pipe(gulp.dest('public/libs/jquery'));
});