var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var font2css = require('gulp-font2css')
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', () => {
    return gulp.src(['src/css/materialize.min.css', 'src/css/style.scss'])
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.min.css'))
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', () => {
    return gulp.src(['src/js/jquery.min.js', 'src/js/materialize.min.js', 'src/js/script.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.min.js'))
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['css', 'js']);
