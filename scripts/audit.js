const fs = require('fs');
const path = require('path');

const projectRoot = 'd:/Project-GameWheel';
const appDir = path.join(projectRoot, 'src/app');

// Helper to recursively find all page.tsx files
function getPageFiles(dir, baseRoute = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'api') {
        continue;
      }
      files = files.concat(getPageFiles(path.join(dir, entry.name), `${baseRoute}/${entry.name}`));
    } else if (entry.name === 'page.tsx') {
      files.push({
        filePath: path.join(dir, entry.name),
        route: baseRoute === '' ? '/' : baseRoute
      });
    }
  }

  return files;
}

const pageFiles = getPageFiles(appDir);
console.log(`Auditing ${pageFiles.length} pages...`);

const registeredRoutes = new Set(pageFiles.map(p => p.route));
// Include common static pages / assets
registeredRoutes.add('/');

let errors = [];

for (const page of pageFiles) {
  const content = fs.readFileSync(page.filePath, 'utf-8');

  // Basic check for SEO and structure
  if (!content.includes('metadata') && !content.includes('"use client"')) {
    errors.push(`[SEO Warning] Route ${page.route} might be missing metadata exports.`);
  }

  if (content.includes('Link')) {
    // Regex to find href links: href="/path" or href={`/path`}
    const linkRegex = /href=["'](\/[^"']*)["']/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      const targetRoute = match[1].split('#')[0]; // strip hash link anchors
      if (targetRoute && targetRoute !== '/' && !registeredRoutes.has(targetRoute)) {
        // Allow external links or dynamic paths if any (e.g. template details)
        if (!targetRoute.startsWith('http') && !targetRoute.includes('[') && !targetRoute.startsWith('mailto:')) {
          errors.push(`[Broken Link] Route ${page.route} links to non-existent route: ${targetRoute}`);
        }
      }
    }
  }

  // Schema verification
  if (page.route.includes('wheels') || page.route.includes('creator') || page.route.includes('games') || page.route.includes('generators')) {
    // Check if SoftwareApplication or WebApplication or schema is referenced
    // (Hub pages don't necessarily need SoftwareApplication, but game pages do)
    const isHub = pageFiles.filter(p => p.route.startsWith(page.route) && p.route !== page.route).length > 0;
    if (!isHub && !content.includes('SoftwareApplication') && !content.includes('WebApplication') && !content.includes('WheelSpinner')) {
      errors.push(`[Schema Check] Game/Tool page ${page.route} has no SoftwareApplication or WebApplication schema / WheelSpinner component.`);
    }
  }
}

if (errors.length === 0) {
  console.log("SUCCESS: Sitewide link audit and structure checks completed successfully! Zero broken links or structural anomalies found.");
} else {
  console.log(`AUDIT WARNINGS (${errors.length} issues found):`);
  errors.forEach(e => console.log(e));
}
