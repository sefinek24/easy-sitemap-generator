const sitemap = require('../lib/sitemapGenerator.js');

(async () => {
	const content = await sitemap.generate('https://nekosia.cat/documentation');
	console.log(content);
	console.log('Module version:', sitemap.version);
})();