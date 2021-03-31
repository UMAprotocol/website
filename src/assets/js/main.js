/*
 * Polyfills
 */
import "./polyfills/object-fit";

/*
 * Modules
 */

import "./modules/handle-mobile-nav";
import "./modules/handle-scroll";
import "./modules/handle-select-box";
import "./modules/handle-filter";
import "./modules/handle-scroll-other-page";

import handleFormSubmit from "./modules/handle-form-submit.js";
import fetchTvl from "./modules/fetch-tvl";

handleFormSubmit();
fetchTvl();
const fiveMinutesInMilliseconds = 1000 * 5 * 60;
setInterval(() => fetchTvl(), fiveMinutesInMilliseconds);
