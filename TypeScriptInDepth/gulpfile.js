var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");
var browserify = require("browserify");
var tsify = require("tsify");
var source = require('vinyl-source-stream');

gulp.task('build-functions', function () {
    return gulp.src("typescript/functions/*.ts").pipe(ts({
        out: 'functions.js'
    })).pipe(gulp.dest('build'));;
});

gulp.task('build-interfaces', function () {
    return gulp.src("typescript/interfaces/*.ts").pipe(ts(tsProject)).js.pipe(gulp.dest('build/tempinterfaces'));;
});

gulp.task("build-bundle-interfaces", ["build-interfaces"], function () {
    return browserify({
            basedir: '.',
            debug: true,
            entries: ['build/tempinterfaces/interfaces.js', 'build/tempinterfaces/enum.js', 'build/tempinterfaces/workcode.js', 'build/tempinterfaces/classes.js'],
            cache: {},
            packageCache: {}
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("build"));
});

gulp.task('build-namespaces', function () {
    return gulp.src("typescript/namespaces/*.ts").pipe(ts({
        out: 'namespaces.js'
    })).pipe(gulp.dest('build'));;
});

gulp.task('build-modules', function () {
    return gulp.src("typescript/modules/*.ts").pipe(ts(tsProject)).js.pipe(gulp.dest('build/tempmodules'));;
});

gulp.task("build-bundle-modules", ["build-modules"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['build/tempmodules/utilityFunctions.js', 'build/tempmodules/app.js', 'build/tempmodules/defaultclass.js'],
        cache: {},
        packageCache: {}
    })
        .bundle()
        .pipe(source('bundlemodules.js'))
        .pipe(gulp.dest("build"));
});

gulp.task('build-application', function () {
    return gulp.src("typescript/application/*.ts").pipe(ts({
        out: 'application.js'
    })).pipe(gulp.dest('build'));;
});

//gulp.task('watch', function () {
//    gulp.watch("typescript/**/*.ts", {}, "build");
//});
