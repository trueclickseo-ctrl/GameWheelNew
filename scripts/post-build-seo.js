const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');
const canonicalDomain = 'https://www.gamewheelclub.com';

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (path.extname(fullPath).toLowerCase() === '.html') {
      results.push(fullPath);
    }
  });
  return results;
}

if (!fs.existsSync(outDir)) {
  console.log(`Directory ${outDir} does not exist. Please run next build first.`);
  process.exit(1);
}

const htmlFiles = getHtmlFiles(outDir);
console.log(`Processing SEO canonicalization on ${htmlFiles.length} HTML files...`);

htmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Determine canonical path relative to 'out' folder
  let relPath = path.relative(outDir, filePath).replace(/\\/g, '/'); // Normalize slashes for Windows
  
  let cleanPath = relPath;
  if (cleanPath.endsWith('index.html')) {
    cleanPath = cleanPath.slice(0, -10);
  } else if (cleanPath.endsWith('.html')) {
    cleanPath = cleanPath.slice(0, -5);
  }

  // Ensure starts with a single /
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  
  // Ensure ends with a single /
  if (!cleanPath.endsWith('/')) {
    cleanPath = cleanPath + '/';
  }

  // Squeeze multiple slashes from path
  const canonicalPath = cleanPath.replace(/\/+/g, '/');
  const canonicalUrl = `${canonicalDomain}${canonicalPath}`;

  // 1. Remove any existing canonical tag, og:url, and twitter:url
  content = content.replace(/<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/gi, '');
  content = content.replace(/<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/gi, '');
  content = content.replace(/<meta\s+name=["']twitter:url["']\s+content=["'][^"']*["']\s*\/?>/gi, '');

  // 2. Inject canonical, og:url, and twitter:url into the head
  const seoTags = `\n  <link rel="canonical" href="${canonicalUrl}" />\n  <meta property="og:url" content="${canonicalUrl}" />\n  <meta name="twitter:url" content="${canonicalUrl}" />`;
  
  if (content.includes('<head>')) {
    content = content.replace('<head>', `<head>${seoTags}`);
  } else if (content.includes('<HEAD>')) {
    content = content.replace('<HEAD>', `<HEAD>${seoTags}`);
  } else {
    // If no head is found, append to top
    content = seoTags + '\n' + content;
  }

  // 3. Update any JSON-LD script blocks
  content = content.replace(/<script\s+type=["']application\/ld\+json["']\s*>([\s\S]*?)<\/script>/gi, (match, jsonContent) => {
    try {
      let data = JSON.parse(jsonContent);
      
      function updateUrls(obj) {
        if (!obj || typeof obj !== 'object') return;
        
        for (let key in obj) {
          if (typeof obj[key] === 'string') {
            if (obj[key].includes('gamewheelclub.com') || obj[key].includes('spinverse.com')) {
              let urlVal = obj[key].replace(/https?:\/\/(www\.)?(gamewheelclub\.com|spinverse\.com)/gi, '');
              const ext = path.extname(urlVal.split('?')[0].split('#')[0]);
              if (!ext && !urlVal.endsWith('/')) {
                urlVal = urlVal + '/';
              }
              urlVal = urlVal.replace(/\/+/g, '/');
              obj[key] = `${canonicalDomain}${urlVal}`;
            }
          } else if (typeof obj[key] === 'object') {
            updateUrls(obj[key]);
          }
        }
      }
      
      updateUrls(data);
      return `<script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`;
    } catch (e) {
      return match;
    }
  });

  // 4. Safely update href attributes for internal website page routes
  content = content.replace(/href=["'](\/[^"'\s]*)["']/gi, (match, val) => {
    // Skip next assets, out folder, mailto, etc.
    if (val.startsWith('/_next') || val.startsWith('/out/') || val === '/') {
      return match;
    }

    let [mainPath, queryAndHash] = val.split(/([?#].*)/);
    queryAndHash = queryAndHash || '';

    if (mainPath.includes('.')) {
      return match;
    }

    if (mainPath !== '/' && !mainPath.endsWith('/') && !mainPath.includes('.')) {
      mainPath += '/';
    }
    mainPath = mainPath.replace(/\/+/g, '/');
    let fullUrl = `${canonicalDomain}${mainPath}${queryAndHash}`;
    return `href="${fullUrl}"`;
  });

  // Also replace absolute domain links in hrefs
  content = content.replace(/href=["']https?:\/\/(www\.)?(gamewheelclub\.com|spinverse\.com)(\/[^"'\s]*)?["']/gi, (match, www, dom, p) => {
    let rawPath = p || '/';
    let [mainPath, queryAndHash] = rawPath.split(/([?#].*)/);
    queryAndHash = queryAndHash || '';

    if (mainPath !== '/' && !mainPath.endsWith('/') && !mainPath.includes('.')) {
      mainPath += '/';
    }
    mainPath = mainPath.replace(/\/+/g, '/');
    let urlVal = `${canonicalDomain}${mainPath}${queryAndHash}`;
    return `href="${urlVal}"`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`SEO Canonicalization and link standardization completed successfully for ${htmlFiles.length} files.`);
