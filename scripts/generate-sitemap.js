const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const appDir = path.join(projectRoot, 'src/app');
const sitemapPath = path.join(projectRoot, 'public/sitemap.xml');
const domain = 'https://www.gamewheelclub.com';

// Languages (no English prefix, no Hindi)
const LANG_CODES = [
  'es','pt','fr','de','zh','ja','ar','ru','ko','id','it','tr','vi','pl',
  'nl','sv','da','no','fi','hr','el','cs','ro','hu','sk','uk','bg',
];

// Key internal routes to include in localized sitemap
const LOCALIZED_ROUTES = [
  '',            // home (/de/)
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/games',
  '/templates',
  '/learn',
  '/learn/history-of-the-wheel',
  '/learn/math-behind-random-wheels',
  '/learn/science-of-decision-making',
  '/learn/probability-statistics',
  '/learn/encyclopedia',
  '/blog',
  '/for-teachers',
  '/for-business',
  '/for-events',
  '/wheel-of-names',
  '/decision-wheel',
  '/yes-no-wheel',
  '/flip-a-coin',
  '/dice-roller',
  '/random-number-generator',
  '/timer',
];

// Helper to recursively find all page.tsx files (English routes only)
function getRoutes(dir, baseRoute = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (
        entry.name.startsWith('_') ||
        entry.name.startsWith('.') ||
        entry.name === 'node_modules' ||
        entry.name === 'api' ||
        entry.name.startsWith('[')  // skip dynamic [lang] routes from English list
      ) {
        continue;
      }
      routes = routes.concat(getRoutes(path.join(dir, entry.name), `${baseRoute}/${entry.name}`));
    } else if (entry.name === 'page.tsx') {
      routes.push(baseRoute === '' ? '/' : baseRoute);
    }
  }

  return routes;
}

const englishRoutes = getRoutes(appDir);
englishRoutes.sort((a, b) => {
  const depthA = a.split('/').length;
  const depthB = b.split('/').length;
  if (depthA !== depthB) return depthA - depthB;
  return a.localeCompare(b);
});

const today = new Date().toISOString().split('T')[0];

let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

// ── English routes ───────────────────────────────────────────────────────────
for (const route of englishRoutes) {
  const cleanRoute = route === '/' ? '' : route;
  const priority = route === '/' ? '1.0' : (route.startsWith('/learn') ? '0.9' : (route.split('/').length > 2 ? '0.7' : '0.8'));
  const changefreq = route === '/' ? 'daily' : (route.startsWith('/learn') ? 'weekly' : 'monthly');

  // Build xhtml:link alternates for key routes
  const isLocalized = LOCALIZED_ROUTES.includes(cleanRoute);
  let alternates = '';
  if (isLocalized) {
    alternates += `    <xhtml:link rel="alternate" hreflang="en" href="${domain}${cleanRoute}/"/>\n`;
    for (const lang of LANG_CODES) {
      alternates += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${domain}/${lang}${cleanRoute}/"/>\n`;
    }
    alternates += `    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}${cleanRoute}/"/>\n`;
  }

  xmlContent += `  <url>
    <loc>${domain}${cleanRoute}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates}  </url>
`;
}

// ── Localized routes ─────────────────────────────────────────────────────────
for (const lang of LANG_CODES) {
  for (const route of LOCALIZED_ROUTES) {
    const priority = route === '' ? '0.9' : (route.startsWith('/learn') ? '0.8' : '0.7');
    const changefreq = route === '' ? 'weekly' : 'monthly';

    // hreflang alternates
    let alternates = `    <xhtml:link rel="alternate" hreflang="en" href="${domain}${route}/"/>\n`;
    for (const l2 of LANG_CODES) {
      alternates += `    <xhtml:link rel="alternate" hreflang="${l2}" href="${domain}/${l2}${route}/"/>\n`;
    }
    alternates += `    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}${route}/"/>\n`;

    xmlContent += `  <url>
    <loc>${domain}/${lang}${route}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates}  </url>
`;
  }
}

xmlContent += `</urlset>\n`;

fs.writeFileSync(sitemapPath, xmlContent, 'utf-8');

const totalUrls = englishRoutes.length + (LANG_CODES.length * LOCALIZED_ROUTES.length);
console.log(`✓ Sitemap generated at ${sitemapPath}`);
console.log(`  English routes: ${englishRoutes.length}`);
console.log(`  Localized routes: ${LANG_CODES.length} langs × ${LOCALIZED_ROUTES.length} pages = ${LANG_CODES.length * LOCALIZED_ROUTES.length}`);
console.log(`  Total URLs: ${totalUrls}`);
