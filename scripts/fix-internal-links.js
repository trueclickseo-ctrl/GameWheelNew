const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Find href="/..." patterns
      // We want to match: href="/something" or href={'/something'}
      // And we want to append a trailing slash if:
      // - It doesn't have one
      // - It does not end with an extension (like .png, .jpg, .svg, .js, .css, .xml, .txt)
      // - It doesn't have an anchor (#) or query parameter (?) already at that character
      // - It's not just "/"
      
      const newContent = content.replace(/(href=["']\/[a-zA-Z0-9_\-\/]+)(["'])/g, (match, p1, p2) => {
        // If it ends with slash, or has extension, or is root /, keep it
        if (p1.endsWith('/') || p1 === 'href="/' || p1.match(/\.[a-zA-Z0-9]{2,4}$/)) {
          return match;
        }
        return p1 + '/' + p2;
      });

      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated internal links in: ${fullPath}`);
      }
    }
  });
}

processDir(path.join(__dirname, '../src'));
