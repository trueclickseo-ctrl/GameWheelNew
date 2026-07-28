const fs = require('fs');
const path = require('path');

const projectRoot = 'd:/Project-GameWheel';
const searchDirs = [
  path.join(projectRoot, 'src'),
  path.join(projectRoot, 'public')
];

// Helper to recursively list files
function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath));
    } else {
      // Only process text files
      const ext = path.extname(fullPath).toLowerCase();
      if (['.tsx', '.ts', '.js', '.json', '.css', '.xml', '.html', '.md'].includes(ext)) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

console.log("Locating all project files...");
let allFiles = [];
searchDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    allFiles = allFiles.concat(getFilesRecursively(dir));
  }
});
// Add next.config.ts if it exists
const nextConfig = path.join(projectRoot, 'next.config.ts');
if (fs.existsSync(nextConfig)) {
  allFiles.push(nextConfig);
}
const packageJson = path.join(projectRoot, 'package.json');
if (fs.existsSync(packageJson)) {
  allFiles.push(packageJson);
}

console.log(`Found ${allFiles.length} files to scan. Beginning brand renaming...`);

let replaceCount = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace case variations
  content = content.replace(/spinverse\.com/gi, 'gamewheelclub.com');
  content = content.replace(/SpinVerse/g, 'GameWheelClub');
  content = content.replace(/Spin Verse/g, 'Game Wheel Club');
  content = content.replace(/spinverse/g, 'gamewheelclub');
  content = content.replace(/SPINVERSE/g, 'GAMEWHEELCLUB');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${path.relative(projectRoot, file)}`);
    replaceCount++;
  }
});

console.log(`Success! Renamed brand in ${replaceCount} files.`);
