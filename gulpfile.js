var gulp         = require('gulp'),
    jade         = require('gulp-jade'),
    sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    browserify   = require('gulp-browserify'),
    connect      = require('gulp-connect'),
    notify       = require('gulp-notify');

gulp.task('templates', function() {
    return gulp.src('src/jade/*.jade')
            .pipe(jade())
            .pipe(gulp.dest('dist/'))
            .pipe(connect.reload())
            .pipe(notify('Do you even jade, bro?'))
});

gulp.task('styles', function() {
    return sass('src/sass/master.sass', {'style': 'compressed'})
            .on('error', function(err){
                console.log('Oh, boy! Error compiling sass');
            })
            .pipe(autoprefixer())
            .pipe(gulp.dest('dist/css'))
            .pipe(connect.reload())
            .pipe(notify('Looking good!'))
});

gulp.task('scripts', function() {
    return gulp.src(['src/js/easyphotowall.js'])
            .pipe(concat('easyphotowall.js'))
            // .pipe(browserify({
            //     insertGlobals: true
            // }))
            .pipe(gulp.dest('dist/js'))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('dist/js'))
            .pipe(connect.reload())
            .pipe(notify('Magic!'))
});

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch('src/jade/*.jade', ['templates']);
    gulp.watch('src/sass/*.sass', ['styles']);
    gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', ['connect', 'watch']);
