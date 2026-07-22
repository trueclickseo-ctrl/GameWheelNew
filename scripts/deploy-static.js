const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = 'd:/Project-GameWheel';
const outDir = path.join(projectRoot, 'out');

if (!fs.existsSync(outDir)) {
  console.error("Error: out/ directory does not exist. Run npm run build first.");
  process.exit(1);
}

// Read current .gitignore contents to preserve it
const gitignorePath = path.join(projectRoot, '.gitignore');
const gitignoreContent = fs.existsSync(gitignorePath) ? fs.readFileSync(gitignorePath, 'utf8') : '';

// 1. Save current work to "source" branch
console.log("Saving source code to 'source' branch...");
try {
  execSync('git add -A', { cwd: projectRoot, stdio: 'inherit' });
  execSync('git commit -m "chore: save source branch progress"', { cwd: projectRoot, stdio: 'inherit' });
  execSync('git push -f origin source', { cwd: projectRoot, stdio: 'inherit' });
} catch (e) {
  console.log("Note: Source branch commit/push warning:", e.message);
}

// 2. Go back to main
console.log("Switching back to main branch...");
execSync('git checkout main', { cwd: projectRoot, stdio: 'inherit' });

// 3. Temporarily copy out/ to a folder outside the project
const tempOut = 'd:/Project-GameWheel-temp_out';
if (fs.existsSync(tempOut)) {
  fs.rmSync(tempOut, { recursive: true, force: true });
}
fs.mkdirSync(tempOut);

console.log("Copying build artifacts to temp folder...");
function copyFolderRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyFolderRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
copyFolderRecursive(outDir, tempOut);

// 4. Delete all tracked files in main branch to make it purely static
console.log("Cleaning main branch directory using git...");
execSync('git rm -rf .', { cwd: projectRoot, stdio: 'inherit' });

// 5. Copy temp folder contents back to project root
console.log("Placing static build files at the root...");
const tempEntries = fs.readdirSync(tempOut);
tempEntries.forEach(entry => {
  const srcPath = path.join(tempOut, entry);
  const destPath = path.join(projectRoot, entry);
  if (fs.statSync(srcPath).isDirectory()) {
    copyFolderRecursive(srcPath, destPath);
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
});

// Clean up temp
fs.rmSync(tempOut, { recursive: true, force: true });

// 6. Restore .gitignore
if (gitignoreContent) {
  fs.writeFileSync(gitignorePath, gitignoreContent, 'utf8');
}

// 7. Commit and force push to main
console.log("Committing and force pushing static files to main branch...");
execSync('git add -A', { cwd: projectRoot, stdio: 'inherit' });
execSync('git commit -m "deploy: publish static build artifacts"', { cwd: projectRoot, stdio: 'inherit' });
execSync('git push -f origin main', { cwd: projectRoot, stdio: 'inherit' });

console.log("SUCCESS! Static build is now live on the main branch of GitHub. Switch back to 'source' branch locally to continue editing.");
execSync('git checkout source', { cwd: projectRoot, stdio: 'inherit' });
