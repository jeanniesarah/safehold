const { watch, src, dest, series, parallel } = require('gulp');
var ts = require('gulp-typescript');

// copyAllNonTSFiles copies non-typescript
// files and directories from `/dev` to `/src`
function copyAllNonTSFiles(cb) {
	src(['./dev/**/*', '!**/*.ts']).pipe(
		dest('../src', {
			overwrite: true,
			cwd: './dev',
		}),
	);
	cb();
}

// copyFrontendFiles copies non-typescript and
// javascript files and directories from `/dev` to `/src`
function copyFrontendFiles(cb) {
	src(['./dev/**/*', '!**/*.{ts,js}']).pipe(
		dest('../src', {
			cwd: './dev',
		}),
	);
	cb();
}

// tsCompile compiles typescript files to JS
// and move them to `/src`.
function tsCompile(cb) {
	var project = ts.createProject('tsconfig.json');
	project
		.src()
		.pipe(project())
		.js.pipe(dest('src'));
	cb();
}

// watchCompileTs is the public gulp task
// for running compilation operations
// in series
exports.watchCompileTs = () => {
	watch(
		[
			'dev/core/**/*',
			'dev/utilities/**/*',
			'dev/renderer/components/constants/*',
			'dev/renderer/components/dashboard/*.ts',
		],
		{
			ignoreInitial: false,
		},
		series(tsCompile),
	);
};

// watchAndCopyFrontend watches and copies
// non-backend files
exports.watchAndCopyFrontend = () => {
	watch(
		'dev/renderer/**/*',
		{
			ignoreInitial: false,
		},
		series(copyFrontendFiles),
	);
};

exports.compile = series(
	copyAllNonTSFiles,
	parallel(exports.watchCompileTs, exports.watchAndCopyFrontend),
);
