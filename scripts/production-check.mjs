const origin = 'https://vaultwave.agency';

const pages = [
  ['/', 'Advertising & Marketing Agency in Kampala | Vaultwave'],
  ['/about/', 'About Vaultwave | Growth & Creative Agency in Kampala'],
  ['/services/', 'Advertising & Marketing Services in Uganda | Vaultwave'],
  ['/services/strategy-intelligence/', 'Brand & Marketing Strategy in Uganda | Vaultwave'],
  ['/services/creative-production/', 'Creative & Video Production in Kampala | Vaultwave'],
  ['/services/media-pr-activation/', 'Media Buying, PR & Activations in Uganda | Vaultwave'],
  ['/services/digital-technology/', 'Web Design & Digital Technology in Uganda | Vaultwave'],
  ['/work/', 'Selected Work & Case Study Framework | Vaultwave'],
  ['/leadership/', 'Vaultwave Leadership Team | Kampala, Uganda'],
  ['/insights/', 'Marketing & Advertising Insights for Uganda | Vaultwave'],
  ['/contact/', 'Contact Vaultwave | Advertising Agency in Kampala'],
];

const failures = [];

async function request(path, expectedType) {
  const response = await fetch(`${origin}${path}`, { redirect: 'follow' });
  const body = await response.text();
  const type = response.headers.get('content-type') || '';
  if (response.status !== 200) failures.push(`${path}: expected HTTP 200, received ${response.status}`);
  if (!type.includes(expectedType)) failures.push(`${path}: expected ${expectedType}, received ${type || 'no content type'}`);
  return { response, body };
}

for (const [path, title] of pages) {
  const { body } = await request(path, 'text/html');
  const canonical = `${origin}${path}`;
  if (!body.includes(`<title>${title}</title>`)) failures.push(`${path}: expected title not found`);
  if (!body.includes(`rel="canonical" href="${canonical}"`)) failures.push(`${path}: canonical ${canonical} not found`);
  if (!body.includes('name="robots" content="index,follow')) failures.push(`${path}: index,follow directive not found`);
}

const robots = await request('/robots.txt', 'text/plain');
for (const directive of ['User-agent: OAI-SearchBot', 'User-agent: GPTBot', `Sitemap: ${origin}/sitemap.xml`]) {
  if (!robots.body.includes(directive)) failures.push(`/robots.txt: missing ${directive}`);
}

const sitemap = await request('/sitemap.xml', 'xml');
for (const [path] of pages) {
  if (!sitemap.body.includes(`<loc>${origin}${path}</loc>`)) failures.push(`/sitemap.xml: missing ${origin}${path}`);
}

const key = 'e01c9b0f009245f1b9016355c982f5bb';
const keyFile = await request(`/${key}.txt`, 'text/plain');
if (keyFile.body.trim() !== key) failures.push('IndexNow key file has unexpected content');

const missingPath = `/seo-monitor-not-found-${Date.now()}`;
const missing = await fetch(`${origin}${missingPath}`, { redirect: 'manual' });
const missingBody = await missing.text();
if (missing.status !== 404) failures.push(`${missingPath}: expected HTTP 404, received ${missing.status}`);
if (!missingBody.includes('name="robots" content="noindex,follow"')) failures.push(`${missingPath}: noindex,follow directive not found`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Production SEO check passed for ${pages.length} canonical pages, robots.txt, sitemap.xml, IndexNow verification and a genuine HTTP 404.`);
