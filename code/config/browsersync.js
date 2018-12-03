/**
 * The module dependencies.
 */
const fs = require('fs');
const url = require('url');
const path = require('path');
const argv = require('yargs').argv;
const utils = require('./utils');

/**
 * Prepare the configuration.
 */
const config = {
	host: 'localhost',
	port: 3000,
	open: 'external',
	files: [
		utils.buildPath('**/*.css'),
		utils.buildPath('**/*.js'),
		utils.buildPath('**/*.html')
	],
	ghostMode: {
		clicks: false,
		scroll: true,
		forms: {
			submit: true,
			inputs: true,
			toggles: true
		}
	},
	snippetOptions: {
		rule: {
			match: /<\/body>/i,
			fn: (snippet, match) => `${snippet}${match}`
		}
	},
	server: {
		baseDir: utils.buildPath(),
		directory: true
	},
	reloadThrottle: 100
};

/**
 * Load the proxy configuration from cli arguments.
 */
if (argv.devUrl !== undefined) {
	config.host = url.parse(argv.devUrl).hostname;
	config.proxy = argv.devUrl;

	delete config.server;
}

module.exports = config;
