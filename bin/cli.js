#!/usr/bin/env node

const { logError } = require('../utils/kleur.js');
const { generateSitemap } = require('../lib/sitemapGenerator');

const args = process.argv.slice(2);
const urlArg = args.find(arg => arg.startsWith('--domain='));
if (!urlArg) {
	logError('No URL provided. Use: sitemap-generator --domain=<YOUR-DOMAIN>');
	process.exit(1);
}

const BASE_URL = `https://${urlArg.split('=')[1].replace(/(^\w+:|^)\/\//, '')}`;

generateSitemap(BASE_URL).catch(error => {
	logError(`An error occurred: ${error.message}`);
	process.exit(1);
});
