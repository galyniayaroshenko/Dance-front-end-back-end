var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var webserver = require('gulp-webserver');
var less = require('gulp-less');

gulp.task('buildLib', function() {
  gulp.src(require('./dependencies.json').dependencies)
  .pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});

// gulp.task('webserver', function() {
//   gulp.src('./build/')
//   .pipe(webserver({
//     livereload: true,
//     open: true
//   }));
// });

gulp.task('webserver', function() {
  gulp.src('./build/')
  .pipe(webserver({
    port: 6630,
    livereload: true,
    open: true,
    fallback: './build/index.html'
  }));
});

gulp.task('cssConcat', function() {
  return gulp.src(require('./stylesheets-dependencies.json').dependencies)
  .pipe(autoprefixer())
  .pipe(concat('all.css'))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('cssMin', function() {
  return gulp.src(require('./stylesheets-dependencies.json').dependencies)
  .pipe(cssmin())
  .pipe(concat('all.min.css'))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('jsUglify', function() {
  return gulp.src('./app/js/**/*.js')
  .pipe(concat('all.js'))
  .pipe(ngmin())
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});

gulp.task('imageMin', function() {
  return gulp.src(['./app/img/**/*.*'])
  .pipe(imagemin({
    optimizationLevel: 7
  }))
  .pipe(gulp.dest('./build/images'));
});

gulp.task('less', function () {
  return gulp.src('./app/less/**/*.less')
  .pipe(less())
  .pipe(gulp.dest('./build/css'));
});

gulp.task('templates', function() {
  return gulp.src('./app/index.html')
  .pipe(gulp.dest('./build'));
});

gulp.task('templatesDirect', function() {
  return gulp.src(['./app/templates/**/*.html'])
  .pipe(gulp.dest('./build/templates'));
});

gulp.task('watch', ['cssConcat'], function () {
  gulp.watch('./app/less/**/*.less', ['less', 'cssConcat']);
  gulp.watch('./app/js/**/*.js', ['jsUglify']);
  gulp.watch('./app/templates/**/*.html', ['templatesDirect']);
  gulp.watch('./app/index.html', ['templates']);
});

gulp.task('default', ['imageMin','cssConcat', 'jsUglify', 'webserver', 'templates', 'templatesDirect', 'buildLib', 'less', 'watch']);
