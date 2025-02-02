(function() {
  'use strict';

  function handleError(err) {
    console.error(err.toString());
    process.exit(1);
  }

  var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    size = require('gulp-size'),
    csso = require('gulp-csso');

  gulp.task('assets-sass-dev', function() {
    return gulp.src(['src/assets/styles/**/*.scss'])
      .pipe(sass({
        style: 'expanded'
      }))
      .on('error', handleError)
      .pipe(autoprefixer('last 1 version')) //Adds vendor prefixes (mozilla,webkit,etc) to the css styles
      .pipe(concat('jk-rating-stars.css'))
      .pipe(gulp.dest('.tmp'))
      .pipe(size());
  });

  gulp.task('assets-sass-prod', gulp.series('assets-sass-dev', function() {
    return gulp.src(['.tmp/jk-rating-stars.css'])
      .pipe(csso())
      .pipe(concat('jk-rating-stars.min.css'))
      .pipe(gulp.dest('.tmp'))
      .pipe(size());
  }));

  gulp.task('assets-styles', gulp.series('assets-sass-prod', function() {
    return gulp.src(['.tmp/*.css'])
      .pipe(gulp.dest('dist'))
      .pipe(size());
  }));

})();
