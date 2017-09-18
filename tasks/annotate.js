var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function () {
  return gulp.src('src/app.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist'));
});
