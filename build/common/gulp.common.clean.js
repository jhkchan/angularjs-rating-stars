(function() {
  'use strict';

  var gulp = require('gulp'),
    del = require('del'),
    cache = require('gulp-cache');

  gulp.task('clean-tmp', function(callback) {
    del(['.tmp']).then(function() {
      callback();
    });
  });

  gulp.task('clean', gulp.series('clean-tmp', function(callback) {
    del(['dist']).then(function() {
      callback();
    });
  }));

  gulp.task('clean-cache', function(callback) {
    return cache.clearAll(callback);
  });

})();
