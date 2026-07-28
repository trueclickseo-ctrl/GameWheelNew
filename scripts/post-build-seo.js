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

  // Squeeze multiple slashes
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
      
      // Recursive helper to update any url/@id fields to standard canonicals
      function updateUrls(obj) {
        if (!obj || typeof obj !== 'object') return;
        
        for (let key in obj) {
          if (typeof obj[key] === 'string') {
            // If it's a domain reference without www or trailing slash, clean it up
            if (obj[key].includes('gamewheelclub.com') || obj[key].includes('spinverse.com')) {
              let urlVal = obj[key]
                .replace(/https?:\/\/(www\.)?(gamewheelclub\.com|spinverse\.com)/gi, canonicalDomain);
              
              // Ensure paths (excluding file extensions) end with trailing slash
              if (!path.extname(urlVal) && !urlVal.endsWith('/')) {
                urlVal = urlVal + '/';
              }
              urlVal = urlVal.replace(/\/+/g, '/').replace('https:/', 'https://');
              obj[key] = urlVal;
            }
          } else if (typeof obj[key] === 'object') {
            updateUrls(obj[key]);
          }
        }
      }
      
      updateUrls(data);
      return `<script type="application/ld+json">${JSON.stringify(data, null, 2)}</script>`;
    } catch (e) {
      // If parsing fails, fall back to string replacement
      let cleanJson = jsonContent
        .replace(/https?:\/\/(www\.)?(gamewheelclub\.com|spinverse\.com)\/([^"'\s]*)/gi, (m, www, dom, p) => {
          let cleanPath = p;
          if (cleanPath && !cleanPath.endsWith('/') && !cleanPath.includes('.')) {
            cleanPath += '/';
          }
          let urlVal = `${canonicalDomain}/${cleanPath}`;
          return urlVal.replace(/\/+/g, '/').replace('https:/', 'https://');
        });
      return `<script type="application/ld+json">${cleanJson}</script>`;
    }
  });

  // 4. Do global replacements on clean paths in href attributes to ensure internal links are standard
  // Find any href="/path" or href="https://gamewheelclub.com/path" that do not end in trailing slash and are not files
  content = content.replace(/(href|src)=["'](\/[^"'\s]*)["']/gi, (match, attr, val) => {
    // Ignore internal next assets, hash anchors, mailto, etc.
    if (val.startsWith('/_next') || val.includes('#') || val.includes('.') || val === '/' || val.startsWith('/out/')) {
      return match;
    }
    // Append trailing slash if missing
    let cleaned = val;
    if (!cleaned.endsWith('/')) {
      cleaned = cleaned + '/';
    }
    cleaned = cleaned.replace(/\/+/g, '/');
    return `${attr}="${cleaned}"`;
  });

  // Also replace absolute domain links in hrefs
  content = content.replace(/(href)=["']https?:\/\/(www\.)?(gamewheelclub\.com|spinverse\.com)(\/[^"'\s]*)?["']/gi, (match, attr, www, dom, p) => {
    let cleanPath = p || '/';
    if (cleanPath !== '/' && !cleanPath.endsWith('/') && !cleanPath.includes('.')) {
      cleanPath += '/';
    }
    let urlVal = `${canonicalDomain}${cleanPath}`;
    urlVal = urlVal.replace(/\/+/g, '/').replace('https:/', 'https://');
    return `${attr}="${urlVal}"`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log(`SEO Canonicalization and link standardization completed successfully for ${htmlFiles.length} files.`);
