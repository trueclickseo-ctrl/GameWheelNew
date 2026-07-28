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
      if (content.includes('https://gamewheelclub.com')) {
        // Replace base domain with www.
        content = content.replace(/https:\/\/gamewheelclub\.com/g, 'https://www.gamewheelclub.com');
        
        // Let's also check for specific redirect paths like /blog/some-path and make sure they end with slash
        // We can do it by replacing the schema URL matches specifically, but standardizing all urls in schema is good.
        // Wait, let's check: in blog posts, schema contains:
        // "@id": "https://www.gamewheelclub.com/blog/best-icebreaker-games-for-work"
        // We should add trailing slash: "@id": "https://www.gamewheelclub.com/blog/best-icebreaker-games-for-work/"
        content = content.replace(/("@id":\s*"https:\/\/www\.gamewheelclub\.com\/blog\/[^"]+)([^/]")/g, '$1/$2');
        content = content.replace(/("inDefinedTermSet":\s*"https:\/\/www\.gamewheelclub\.com\/learn\/encyclopedia)([^/]")/g, '$1/$2');
        
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated URLs in: ${fullPath}`);
      }
    }
  });
}

processDir(path.join(__dirname, '../src'));
