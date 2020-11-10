/**
 * The module dependencies.
 */
const del = require('del');
const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const utils = require('./utils');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const bundler = require('webpack');
const posthtml = require('gulp-posthtml');
const imagemin = require('gulp-imagemin');
const settings = require('./settings');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const svgSprite = require('gulp-svg-sprite');

/**
 * Setup the env.
 */
const { isProd, isDev } = utils.detectEnv();

/**
 * Show notification on error.
 */
const error = function(e) {
	notify.onError({
		title: 'Gulp',
		message: e.message,
		sound: 'Beep'
	})(e);

	this.emit('end');
};

/**
 * Process Sass files through Sass and PostCSS.
 */
const styles = () => {
	const config = require('./postcss');
	const src = utils.srcStylesPath('style.scss');
	const dest = utils.buildStylesPath();

	return gulp
		.src(src)
		.pipe(gulpif(isDev, sourcemaps.init()))
		.pipe(sassGlob())
		.pipe(
			sass({
				includePaths: [
					'.',
					utils.srcVendorPath(),
					path.resolve(__dirname, '../node_modules')
				]
			}).on('error', error)
		)
		.pipe(gulpif(isDev, plumber({ errorHandler: error })))
		.pipe(postcss(config))
		.pipe(rename('bundle.css'))
		.pipe(gulpif(isDev, sourcemaps.write('./')))
		.pipe(gulp.dest(dest));
};

/**
 * Process JS files through Webpack.
 */
const scripts = () => {
	const src = utils.srcScriptsPath('main.js');
	const dest = utils.buildScriptsPath();

	return gulp
		.src(src)
		.pipe(plumber({ errorHandler: error }))
		.pipe(gulpif(
			settings.enableWebpack,
			webpack(require('./webpack'), bundler),
			rename('bundle.js')
		))
		.pipe(gulpif(
			(isProd && !settings.enableWebpack),
			uglify()
		))
		.pipe(gulp.dest(dest));
};

/**
 * Process HTML files through PostHTML.
 */
const pages = () => {
	const src = [
		utils.srcPath('**/*.html'),
		`!${utils.srcPath('partials/*.html')}`,
		`!${utils.srcPath('assets/*.html')}`
	];
	const dest = utils.buildPath();
	const config = require('./posthtml');

	return gulp
		.src(src)
		.pipe(plumber({ errorHandler: error }))
		.pipe(posthtml(config))
		.pipe(gulp.dest(dest));
};

/**
 * Copy files to build path.
 */
const copy = () => {
	const src = [
		utils.srcPath('**'),
		`!${utils.srcPath('**/*.html')}`,
		`!${utils.srcPath('partials/')}`,
		`!${utils.srcPath('partials/**')}`,
		`!${utils.srcPath('assets/{css,scss,fonts,images,js,vendor}/')}`,
		`!${utils.srcPath('assets/{css,scss,fonts,images,js,vendor}/**')}`,
		`!${utils.srcPath('assets/**/*.html')}`
	];
	const dest = utils.buildPath();

	return gulp
		.src(src)
		.pipe(plumber({ errorHandler: error }))
		.pipe(gulp.dest(dest));
};

const vendor = () => {
	const src = utils.srcVendorPath('**/*');
	const dest = utils.buildVendorPath();

	return gulp
		.src(src)
		.pipe(plumber({ errorHandler: error }))
		.pipe(gulp.dest(dest));
};

/**
 * Copy all images used in HTML files.
 */
const images = () => {
	const src = [
		utils.srcImagesPath('**/*'),
		`!${utils.srcImagesPath('sprite*')}`,
		`!${utils.srcImagesPath('sprite/*')}`
	];
	const dest = utils.buildImagesPath();

	return gulp
		.src(src)
		.pipe(plumber({ errorHandler: error }))
		.pipe(gulp.dest(dest));
};

/**
 * Create SVG sprite.
 */
const svgs = () => {
	const src = utils.srcImagesPath('svg/*');
	const dest = utils.buildImagesPath();
	const svgSettings = {
		dest: dest,
		svg: {
			xmlDeclaration: false,
			doctypeDeclaration: false,
			transform: [
				/**
				 * Custom sprite SVG transformation
				 *
				 * @param {String} svg Sprite SVG
				 * @return {String} Processed SVG
				 *
				 * Remove stroke and fill and styles from the SVG elements so they can be styled
				 */
				function(svg) {
					let tempSVG;

					if (settings.cleanSVGs) {
						const fillRegEx = new RegExp('fill="[^"]+"', 'g');
						const strokeRegEx = new RegExp('stroke="[^"]+"', 'g');
						const styleRegEx = /<style[\s\S]+?<\/style>/gm;

						let newSVG = svg.replace(fillRegEx, '').replace(strokeRegEx, '').replace(styleRegEx, '');

						tempSVG = newSVG;
					} else {
						tempSVG = svg;
					};

					return tempSVG;
				}
			]
		},
		mode: {
			symbol: {
				dest: '',
				inline: true,
				example: true,
				sprite: ''
			}
		}
	};

	return gulp
		.src(src)
		.pipe(plumber({ errorHandler: error }))
		.pipe(svgSprite(svgSettings))
		.pipe(gulp.dest(dest));
};


/**
 * Optimize all images in the build folder.
 */
const optimize = () => {
	const src = utils.buildImagesPath('**/*');
	const dest = utils.buildImagesPath();

	return gulp
		.src(src)
		.pipe(plumber({ errorHandler: error }))
		.pipe(imagemin(settings.imageminSettings))
		.pipe(gulp.dest(dest));
};

/**
 * Compile a single html page
 */
const page = (file, folder) => {
	const dest = utils.buildPath(folder);
	const config = require('./posthtml');

	return gulp
		.src(file)
		.pipe(plumber({ errorHandler: error }))
		.pipe(posthtml(config))
		.pipe(gulp.dest(dest));
};

/**
 * Watch for changes and run through different tasks.
 */
const watch = () => {
	gulp.watch(
		[utils.srcStylesPath('**/*.scss'), utils.srcImagesPath('sprite/*.png')],
		styles
	);

	gulp.watch([utils.srcPath('partials/*')], pages);

	gulp.watch([utils.srcPath('ajax/*')]).on('change', file => {
		page(file, 'ajax/');
	});

	if (!settings.enableWebpack) {
		gulp.watch([
			utils.srcScriptsPath('*.js')
		], scripts);
	}

	gulp
		.watch([
			utils.srcPath('**/*.html'),
			`!${utils.srcPath('partials/*')}`,
			`!${utils.srcPath('ajax/*')}`
		])
		.on('change', file => {
			page(file, '');
		});

	gulp.watch(
		[
			utils.srcPath('**'),
			`!${utils.srcPath('**/*.html')}`,
			`!${utils.srcPath('partials/')}`,
			`!${utils.srcPath('partials/**')}`,
			`!${utils.srcPath('assets/{scss,css,fonts,images,js,vendor}/')}`,
			`!${utils.srcPath('assets/{scss,css,fonts,images,js,vendor}/**')}`,
			`!${utils.srcPath('assets/**/*.html')}`
		],
		copy
	);

	gulp.watch([utils.srcVendorPath('**/*')], vendor);

	gulp.watch([utils.srcImagesPath('**/*')], images);

	gulp.watch([utils.srcImagesPath('svg/*')], svgs);
};

/**
 * Refresh the browser when a file is changed.
 */
const reload = () => {
	const config = require('./browsersync');

	browserSync(config);
};

/**
 * Remove the build.
 */
const clean = () => {
	return del([utils.buildPath()], { force: true });
};

/**
 * Register the tasks.
 */
gulp.task(
	'dev',
	gulp.series(
		clean,
		svgs,
		gulp.parallel(
			styles,
			scripts,
			pages,
			copy,
			vendor,
			images,
			watch,
			reload
		)
	)
);

gulp.task(
	'build',
	gulp.series(clean, svgs, styles, scripts, pages, copy, vendor, images, optimize)
);

/**
 * Register default gulp task.
 */
gulp.task('default', gulp.parallel('dev'));
