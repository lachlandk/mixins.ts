import gulp from "gulp";
import typescriptGulp from "gulp-typescript";
import merge from "merge2";

function buildES() {
	const result = gulp.src("src/**/*.ts")
		.pipe(typescriptGulp.createProject("tsconfig.json", {
			declaration: true
		})());
	return merge([
		result.dts.pipe(gulp.dest("dist")),
		result.js.pipe(gulp.dest("dist"))
	]);
}

function watchES() {
	return gulp.watch("src/*.ts", buildES);
}

export const build = buildES;
export const watch = watchES;
