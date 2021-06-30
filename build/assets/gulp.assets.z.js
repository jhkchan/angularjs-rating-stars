(function() {
  'use strict';

  var gulp = require('gulp');

  gulp.task('assets', gulp.series('assets-styles', async function() {}));

})();
