'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('style/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});
 
//gulp.task('sass:watch', function () {
 // gulp.watch('./sass/**/*.scss', ['sass']);
// });