const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const jpegtran = require('imagemin-jpegtran');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

//Copy all HTML Files
gulp.task('copyhtml', () =>
    gulp.src('*.html')
        .pipe(gulp.dest('dist'))
);

//Optimize Images
gulp.task('imageMin', () =>
    gulp.src('img/*')
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true})
        ], {
            verbose: true
        }))
        .pipe(gulp.dest('dist/static/images'))
);

//Minify JS
gulp.task('minify', ()=>
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/static/js'))
)

//Compile Sass to CSS
gulp.task('sass', () =>
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
)

gulp.task('default', gulp.series(['copyhtml', 'imageMin', 'minify', 'sass']));

gulp.task('watch', ()=>
        gulp.watch('img/*', gulp.series(['imageMin'])),
        gulp.watch('scss/*.scss', gulp.series(['sass'])),
        gulp.watch('*.html', gulp.series(['copyhtml']))
)