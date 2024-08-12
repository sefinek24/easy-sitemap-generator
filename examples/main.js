const sitemap = require('../lib/sitemapGenerator.js');

(async () => {
	const content = await sitemap.generate('https://example.com');
	console.log(content);
})();