const gulp = require("gulp");
const typescript = require("gulp-typescript");
const merge = require("merge2");

const project = typescript.createProject("tsconfig.json");

function build() {
	const result = gulp.src("src/*.ts")
		.pipe(project())
	return merge([
		result.dts.pipe(gulp.dest("dist")),
		result.js.pipe(gulp.dest("dist"))
	]);
}

function watch() {
	return gulp.watch("src/*.ts", build)
}

exports.build = build;
exports.watch = watch;
