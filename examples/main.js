const sitemapGenerator = require('../lib/sitemapGenerator.js');

(async () => {
	await sitemapGenerator.generate('https://example.com');
})();