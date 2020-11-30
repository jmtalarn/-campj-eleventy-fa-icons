require("intl-list-format");
require("intl-list-format/locale-data/en");

const fs = require("fs");
const path = require("path");
const camelCase = require("camelcase");
const {
	icon,
	toHtml,
	dom,
	library,
	findIconDefinition,
} = require("@fortawesome/fontawesome-svg-core");

// const allBrandsIcons = require("@fortawesome/free-brands-svg-icons");
// const allSolidIcons = require("@fortawesome/pro-solid-svg-icons");
// const allRegularIcons = require("@fortawesome/pro-regular-svg-icons");
// const allLightIcons = require("@fortawesome/pro-light-svg-icons");
// const allDuotoneIcons = require("@fortawesome/pro-duotone-svg-icons");

const fab = require("@fortawesome/free-brands-svg-icons").fab;
const fas = require("@fortawesome/pro-solid-svg-icons").fas;
const far = require("@fortawesome/pro-regular-svg-icons").far;
const fal = require("@fortawesome/pro-light-svg-icons").fal;
const fad = require("@fortawesome/pro-duotone-svg-icons").fad;

library.add(fab);

library.add(fas);

library.add(far);

library.add(fal);

library.add(fad);

function FontAwesomeCss() {
	console.log({ css: dom.css() });
	return dom.css();
}

function FontAwesomeIcon({ prefix, iconName, ...rest }) {
	console.log({
		prefix,
		iconName,
		icon: findIconDefinition({ prefix, iconName, ...rest }),
		...rest,
	});
	return icon(findIconDefinition({ prefix, iconName, ...rest })).html;
}

https: module.exports = { FontAwesomeIcon, FontAwesomeCss };
