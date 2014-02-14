'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var bourbon = require('node-bourbon').includePaths;
var watch = require('gulp-watch');

gutil.log('Environment', gutil.colors.blue(gutil.env.production ? 'Production' : 'Development'));

gulp.task('scripts', function() {
    return gulp.src('./client/js/app.js', {
        read: false
    })
        .pipe(browserify({
            insertGlobals: false,
            transform: ['reactify'],
            extensions: ['.jsx'],
            debug: !gulp.env.production
        }))
        .pipe(gulpif(gulp.env.production, uglify({
            mangle: {
                except: ['require', 'export', '$super']
            }
        })))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('styles', function() {
    return gulp.src('./client/scss/main.scss')
        .pipe(sass({
            outputStyle: gulp.env.production ? 'compressed' : 'expanded',
            includePaths: ['./client/scss'].concat(bourbon),
            errLogToConsole: gulp.env.watch
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function() {
    return gulp.src('./client/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch-sass', function() {
    return gulp.src('./client/scss/**/*.scss')
        .pipe(watch())
        .pipe(sass({
            outputStyle: gulp.env.production ? 'compressed' : 'expanded',
            includePaths: ['./client/scss'].concat(bourbon),
            errLogToConsole: gulp.env.watch
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', function() {
    gutil.env.watch = true;

    gulp.watch('./client/**/*.html', function(evt) {
        gulp.run('html', function() {});
    });

    gulp.watch('./client/js/**', function(evt) {
        gulp.run('scripts', function() {});
    });

    gulp.watch('client/scss/**', function(evt) {
        gulp.run('styles', function() {});
    });
});

gulp.task('build', ['styles', 'scripts', 'html']);