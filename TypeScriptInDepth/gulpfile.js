var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('build', function () {
    return gulp.src("*.ts").pipe(ts({
        noImplicitAny: true,
        out: 'output.js'
    })).pipe(gulp.dest('build'));;
});

gulp.task('watch', function () {
    gulp.watch("*.ts", {}, "build");
});
