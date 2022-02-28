/**
 * The module dependencies.
 */
const path = require('path');
const slash = require('slash');

// Base `src` path
module.exports.srcPath = (basePath = '', destPath = '') => slash(
	path.resolve(__dirname, '../src', basePath, destPath)
);

// Base `build` path
module.exports.buildPath = (basePath = '', destPath = '') => slash(
	path.resolve(__dirname, '../build', basePath, destPath)
);

// Base `src` path for scripts
module.exports.srcScriptsPath = destPath =>
	exports.srcPath('assets/js', destPath);

// Base `src` path for stylesheets
module.exports.srcStylesPath = destPath =>
	exports.srcPath('assets/scss', destPath);

// Base `src` path for images
module.exports.srcImagesPath = destPath =>
	exports.srcPath('assets/images', destPath);

// Base `src` path for fonts
module.exports.srcFontsPath = destPath =>
	exports.srcPath('assets/fonts', destPath);

// Base `src` path for vendor files
module.exports.srcVendorPath = destPath =>
	exports.srcPath('assets/vendor', destPath);

// Base `build` path for scripts
module.exports.buildScriptsPath = destPath =>
	exports.buildPath('assets/js', destPath);

// Base `build` path for stylesheets
module.exports.buildStylesPath = destPath =>
	exports.buildPath('assets/css', destPath);

// Base `build` path for images
module.exports.buildImagesPath = destPath =>
	exports.buildPath('assets/images', destPath);

// Base `build` path for fonts
module.exports.buildFontsPath = destPath =>
	exports.buildPath('assets/fonts', destPath);

// Base `build` path for vendor files
module.exports.buildVendorPath = destPath =>
	exports.buildPath('assets/vendor', destPath);

// Detect invironment type
module.exports.detectEnv = () => {
	const env = process.env.NODE_ENV || 'development';
	const isDev = env === 'development';
	const isProd = env === 'production';
	const isBuild = env === 'build';

	return {
		env,
		isDev,
		isProd,
		isBuild
	};
};
