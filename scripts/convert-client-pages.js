const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, '../src/app');

// The 4 routes that must remain client components
const exceptionDirs = [
  'contact',
  'embed',
  'generators/number-wheel',
  'party-games/adult-truth-or-dare'
];

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
  let relativePath = path.relative(srcAppDir, path.dirname(filePath)).replace(/\\/g, '/');
  
  if (relativePath === '' || relativePath.startsWith('[lang]')) {
    return;
  }

  // If this is an exception path, we skip it (we will create layout.tsx files for them separately)
  if (exceptionDirs.includes(relativePath)) {
    console.log(`Skipping exception client component page: ${relativePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // We only process if it starts with "use client"
  if (!content.trim().startsWith('"use client";') && !content.trim().startsWith("'use client';")) {
    return;
  }

  // Extract H1 title
  let title = '';
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (h1Match) {
    title = h1Match[1].replace(/["']/g, '').trim();
  }

  // Extract first paragraph description
  let description = '';
  const pMatch = content.match(/<p className="text-lg[^>]*>([\s\S]*?)<\/p>/);
  if (pMatch) {
    description = pMatch[1].replace(/["']/g, '').trim();
  }

  if (!title) {
    // Fallback title from path
    title = relativePath.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) + " Wheel";
  }
  if (!description) {
    description = `Spin the interactive ${title} spinner to make random selections. Free, customizable, and mobile-friendly.`;
  }

  // Clean strings
  title = title.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  description = description.replace(/&quot;/g, '"').replace(/&amp;/g, '&');

  // standardise title and description suffix
  if (!title.includes('GameWheelClub') && !title.includes('Random Choice Wheel')) {
    title = `${title} | GameWheelClub`;
  }

  const canonicalUrl = `https://www.gamewheelclub.com/${relativePath}/`;

  // Remove "use client";
  content = content.replace(/^"use client";\s*/, '').replace(/^'use client';\s*/, '');

  // Inject metadata block
  const metadataBlock = `export const metadata = {
  title: "${title}",
  description: "${description}",
  alternates: {
    canonical: "${canonicalUrl}",
  },
};

`;

  // Insert before the default function export
  const defaultExportIndex = content.indexOf('export default function');
  if (defaultExportIndex !== -1) {
    content = content.slice(0, defaultExportIndex) + metadataBlock + content.slice(defaultExportIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully converted ${relativePath} to server component with metadata.`);
  } else {
    console.log(`Warning: could not find default function export in ${relativePath}`);
  }
});
