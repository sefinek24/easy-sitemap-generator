const escapeXml = str =>
	str.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');

const normalizeUrl = url => {
	const parsedUrl = new URL(url);
	parsedUrl.hash = '';
	return parsedUrl.toString();
};

const calculatePriority = (url, baseUrl) => {
	const path = url.replace(baseUrl, '').split('/').filter(Boolean);
	const depth = path.length;
	const hasQuery = url.includes('?');

	if (depth === 0) return 1.0;
	if (depth === 1) return 0.8;
	if (depth === 2) return hasQuery ? 0.51 : 0.7;
	if (depth >= 3) return hasQuery ? 0.3 : 0.41;

	return 0.5;
};

module.exports = { escapeXml, normalizeUrl, calculatePriority };
