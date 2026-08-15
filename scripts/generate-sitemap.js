const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const appDir = path.join(projectRoot, 'src/app');
const sitemapPath = path.join(projectRoot, 'public/sitemap.xml');

// Helper to recursively find all page.tsx files
function getRoutes(dir, baseRoute = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      // Ignore Next.js special files/folders
      if (entry.name.startsWith('_') || entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'api') {
        continue;
      }
      routes = routes.concat(getRoutes(path.join(dir, entry.name), `${baseRoute}/${entry.name}`));
    } else if (entry.name === 'page.tsx') {
      routes.push(baseRoute === '' ? '/' : baseRoute);
    }
  }

  return routes;
}

const allRoutes = getRoutes(appDir);

// Sort routes to make sitemap clean
allRoutes.sort((a, b) => {
  const depthA = a.split('/').length;
  const depthB = b.split('/').length;
  if (depthA !== depthB) {
    return depthA - depthB;
  }
  return a.localeCompare(b);
});

const today = new Date().toISOString().split('T')[0];

let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const route of allRoutes) {
  // Normalize routes to use trailing slashes to match Next.js trailingSlash: true configuration
  const cleanRoute = route === '/' ? '/' : `${route}/`;
  const priority = route === '/' ? '1.0' : (route.split('/').length > 2 ? '0.7' : '0.8');
  const changefreq = route === '/' ? 'daily' : (route.split('/').length > 2 ? 'monthly' : 'weekly');

  xmlContent += `  <url>
    <loc>https://www.gamewheelclub.com${cleanRoute}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}

xmlContent += `</urlset>\n`;

fs.writeFileSync(sitemapPath, xmlContent, 'utf-8');
console.log(`Successfully generated sitemap at ${sitemapPath} with ${allRoutes.length} URLs!`);
