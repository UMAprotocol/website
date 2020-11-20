const userAgent = window.navigator.userAgent;

/**
 * Check whether the browser is Internet Explorer.
 *
 * @return {boolean}
 */
export const isIe = () => {
	return userAgent.indexOf('Trident/') > 0;
};

/**
 * Check whether the browser is Edge.
 *
 * @return {boolean}
 */
export const isEdge = () => {
	return userAgent.indexOf('Edge/') > 0;
};
