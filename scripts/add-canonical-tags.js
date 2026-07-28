const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, '../src/app');

function getPageFiles(dir) {
  let files = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(getPageFiles(fullPath));
    } else if (file === 'page.tsx') {
      files.push(fullPath);
    }
  });
  return files;
}

const pageFiles = getPageFiles(srcAppDir);

pageFiles.forEach(filePath => {
  // Compute route path
  let relativePath = path.relative(srcAppDir, path.dirname(filePath)).replace(/\\/g, '/');
  
  // Skip root page and [lang] folder
  if (relativePath === '' || relativePath.startsWith('[lang]')) {
    return;
  }
  
  const canonicalUrl = `https://www.gamewheelclub.com/${relativePath}/`;

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if alternates is already defined
  if (content.includes('alternates:') || content.includes('canonical:')) {
    console.log(`Skipping (already has canonical): ${relativePath}`);
    return;
  }

  // Look for: export const metadata = {
  // or export const metadata: Metadata = {
  const metadataRegex = /(export\s+const\s+metadata\s*(?::\s*Metadata)?\s*=\s*\{)/;
  if (metadataRegex.test(content)) {
    content = content.replace(metadataRegex, `$1\n  alternates: {\n    canonical: "${canonicalUrl}",\n  },`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated canonical for: ${relativePath}`);
  } else {
    console.log(`No metadata object found in: ${relativePath}`);
  }
});
