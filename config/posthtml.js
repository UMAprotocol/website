/**
 * The module dependencies.
 */
const utils = require('./utils');

/**
 * Export the configuration.
 */
module.exports = context => {
	return {
		plugins: [
			require('posthtml-include')({
				root: utils.srcPath('partials')
			})
		]
	};
};
