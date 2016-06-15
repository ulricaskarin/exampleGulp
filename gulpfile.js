// Include gulp [Gulp Core & plugins for tasks]
var gulp = require("gulp");

// Include Our Plugins
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var express = require("express");
var app = express();

gulp.task("express", function() {
    app.use(express.static(__dirname));
    app.listen(6006, "0.0.0.0"); // <- CHANGE PORT NUMBER TO PREFERRED CHOICE
});

// Lint Task [Checks any JS in our source/javascript/ directory and makes sure there are no errors]
gulp.task("lint", function() {
    return gulp.src("./source/javascript/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

// Compile Our Sass [Compiles our Sass files in source/sass/directory into CSS and saves CSS in public/stylesheet]
gulp.task("sass", function() {
    return gulp.src("./source/sass/*.sass")
        .pipe(sass())
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./public/stylesheet"));
});

// Concatenate & Minify JS [Concatenates all JS files in source/javascript/ directory and saves output to public/javascript]
// The concatenated file is then minified, renamed and saved
gulp.task("scripts", function() {
    return gulp.src("./source/javascript/*.js")
        .pipe(concat("all.js"))
        .pipe(gulp.dest("./public/javascript"))
        .pipe(rename("all.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./public/javascript"));
});

// Watch Files For Changes [Runs tasks as we make changes to our files]
gulp.task("watch", function() {
    gulp.watch("./source/javascript/*.js", ["lint", "scripts"]);
    gulp.watch("./source/sass/*.sass", ["sass"]);
});

// Default Task [Grouped reference to our other tasks]
gulp.task("default", ["express", "lint", "sass", "scripts", "watch"]);
