var gulp         = require('gulp'),
    jade         = require('gulp-jade'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    concat       = require('gulp-concat'),
    connect      = require('gulp-connect'),
    notify       = require('gulp-notify');

gulp.task('templates', function() {
    return gulp.src('src/jade/*.jade')
            .pipe(jade({ pretty: true }))
            .pipe(gulp.dest('dist/'))
            .pipe(connect.reload())
            .pipe(notify('Do you even jade, bro?'))
});

gulp.task('styles', function() {
    return gulp.src('src/sass/easyphotowall.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(gulp.dest('dist/css'))
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('dist/css'))
            .pipe(connect.reload())
            .pipe(notify('Looking good!'))
});

gulp.task('demo_styles', function() {
    return gulp.src('src/sass/demo.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(gulp.dest('dist/css'))
            .pipe(connect.reload())
            .pipe(notify('Looking good!'))
});

gulp.task('scripts', function() {
    return gulp.src(['src/js/easyphotowall.js'])
            .pipe(concat('easyphotowall.js'))
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
    gulp.watch('src/sass/demo.sass', ['demo_styles']);
    gulp.watch('src/js/*.js', ['scripts']);
});

gulp.task('default', ['connect', 'watch']);
