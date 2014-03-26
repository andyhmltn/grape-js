var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify')

gulp.task('scripts', function() {
  gulp.src('./grape/*.js')
    .pipe(concat('grape.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'))
});