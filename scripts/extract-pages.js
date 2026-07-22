const fs = require('fs');
const path = require('path');

const srcAppDir = path.join(__dirname, '..', 'src', 'app');
const outputDbPath = path.join(__dirname, '..', 'src', 'data', 'pages-db.json');

const pagesDb = {};

function getPageType(content) {
  if (content.includes('DiceRoller')) return 'dice-roller';
  if (content.includes('CoinFlipper')) return 'flip-a-coin';
  if (content.includes('NumberGenerator')) return 'number-generator';
  if (content.includes('CountdownTimer')) return 'timer';
  if (content.includes('WheelSpinner')) return 'wheel';
  return 'general';
}

function extractMeta(content) {
  const titleMatch = content.match(/title:\s*["'`](.*?)["'`]/);
  const descMatch = content.match(/description:\s*["'`](.*?)["'`]/);
  return {
    title: titleMatch ? titleMatch[1] : '',
    description: descMatch ? descMatch[1] : ''
  };
}

function extractOptions(content) {
  const initOptMatch = content.match(/initialOptions=\{\[([\s\S]*?)\]\}/);
  if (initOptMatch) {
    return initOptMatch[1]
      .split(',')
      .map(s => s.trim().replace(/["'`]/g, ''))
      .filter(Boolean);
  }
  
  const defaultVarMatch = content.match(/const\s+default[a-zA-Z0-9_]*\s*=\s*\[([\s\S]*?)\];/);
  if (defaultVarMatch) {
    return defaultVarMatch[1]
      .split(',')
      .map(s => s.trim().replace(/["'`]/g, ''))
      .filter(Boolean);
  }

  return [];
}

function extractFAQs(content) {
  const faqs = [];
  const faqArrayMatch = content.match(/\[\s*\{\s*"q"\s*:\s*"(.*?)",\s*"a"\s*:\s*"(.*?)"\s*\}\s*\]/);
  if (faqArrayMatch) {
    faqs.push({ q: faqArrayMatch[1], a: faqArrayMatch[2] });
  }

  const faqBlocks = [...content.matchAll(/<h3[^>]*>[\s\S]*?<HelpCircle[^>]*>[\s\S]*?<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g)];
  faqBlocks.forEach(block => {
    const qTextMatch = block[0].match(/<\/HelpCircle>([\s\S]*?)<\/h3>/);
    const qText = qTextMatch ? qTextMatch[1].trim() : '';
    const aText = block[1].trim();
    if (qText && aText && !faqs.some(f => f.q === qText)) {
      faqs.push({ q: qText, a: aText });
    }
  });

  return faqs;
}

function scanDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (file === 'page.tsx') {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const relativeRoute = path.relative(srcAppDir, dirPath).replace(/\\/g, '/');
      const route = relativeRoute === '' ? '/' : '/' + relativeRoute;
      
      const type = getPageType(content);
      const meta = extractMeta(content);
      const options = extractOptions(content);
      const faqs = extractFAQs(content);

      const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const h1 = h1Match ? h1Match[1].trim().replace(/["'`{}]/g, '') : '';

      const descP = content.match(/<p className="text-lg[^>]*>([\s\S]*?)<\/p>/);
      const subDesc = descP ? descP[1].trim().replace(/["'`{}]/g, '') : '';

      pagesDb[route] = {
        route,
        type,
        title: meta.title || h1,
        metaDescription: meta.description,
        h1,
        description: subDesc,
        options,
        faqs
      };
    }
  }
}

const dataDir = path.dirname(outputDbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

scanDir(srcAppDir);
fs.writeFileSync(outputDbPath, JSON.stringify(pagesDb, null, 2), 'utf-8');
console.log(`Successfully extracted ${Object.keys(pagesDb).length} pages.`);
