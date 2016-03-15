var gulp = require('gulp');
var bower = require('gulp-bower');
//var concat = require('gulp-concat');
//var karma = require('karma');

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

gulp.task('deploywyfsprd3', ['bower'], function () {
    gulp.src(['./**/*.{html,png,jpg,jpeg,gif,css}', './package.json', '!./*.js', '!./hero/**', '!./bower_components/**', '!./node_modules/**', '!./typings/**'])
        .pipe(gulp.dest('//wyfsprd3/e$/Apps/A2'));

        gulp.src(['./**/*.js', '!./*.js', '!./hero/**', '!./bower_components/**', '!./node_modules/**', '!./typings/**'])
          .pipe(uglify())
          .pipe(gulp.dest('//wyfsprd3/e$/Apps/A2'));
});

var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  gulp.src(['./**/*.js', '!./node_modules/**'])
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

/*
var robocopy = require('robocopy');

gulp.task('xdeploywyfsprd3', ['nunit'], function() {
      return robocopy({
          source: '.',
          destination: '//wyfsprd3/e$/Apps/A2',
          files: ['*.html', '*.js',
                  '*.png', '*.jpg', '*.jpeg', '*.gif', '*.css'],
          copy: {
              mirror: true
          },
          file: {
              excludeFiles: ['.gitignore', '*.json'],
              excludeDirs: ['bower_components', 'node_modules', 'typings'],
          },
          retry: {
              count: 2,
              wait: 3
          }
      });
  });

  var sc = require('windows-service-controller');

  gulp.task('stop-services', ['nunit'], function() {
      return sc.stop('MyServer', 'MyService');
  });

  gulp.task('start-services', ['deploy'], function() {
      return sc.start('MyServer', 'MyService');
  });
*/
