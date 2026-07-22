const fs = require('fs');
const path = require('path');

const inputDbPath = path.join(__dirname, '..', 'src', 'data', 'pages-db.json');
const localesOutputDir = path.join(__dirname, '..', 'src', 'data', 'locales');

const LOCALES = [
  { code: 'es', name: 'Spanish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'sv', name: 'Swedish' },
  { code: 'no', name: 'Norwegian' },
  { code: 'it', name: 'Italian' },
  { code: 'fr', name: 'French' },
  { code: 'nl', name: 'Dutch' },
  { code: 'de', name: 'German' },
  { code: 'da', name: 'Danish' },
  { code: 'fi', name: 'Finnish' },
  { code: 'el', name: 'Greek' },
  { code: 'tr', name: 'Turkish' }
];

async function translateBatch(texts, targetLang) {
  // Filter out empty or letter-only strings
  const cleanedTexts = texts.map(t => {
    if (!t) return '';
    if (t.length <= 2 && /^[A-Z0-9]$/i.test(t.trim())) return t;
    return t;
  });

  // Join with a unique delimiter that translate won't break
  const delimiter = ' ___ ';
  const combinedText = cleanedTexts.join(delimiter);

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(combinedText)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const translatedCombined = json[0].map(x => x[0]).join('');
    
    // Split back by delimiter
    const results = translatedCombined.split(/___|___/i).map(s => s.trim());
    
    // Map back to original texts size
    return cleanedTexts.map((orig, idx) => {
      if (orig.length <= 2 && /^[A-Z0-9]$/i.test(orig.trim())) return orig;
      return results[idx] || orig;
    });
  } catch (err) {
    console.error(`Batch translation error for target ${targetLang}:`, err.message);
    return cleanedTexts; // Fallback to original
  }
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function translateDatabase() {
  if (!fs.existsSync(localesOutputDir)) {
    fs.mkdirSync(localesOutputDir, { recursive: true });
  }

  const rawData = fs.readFileSync(inputDbPath, 'utf-8');
  const pages = JSON.parse(rawData);
  const routes = Object.keys(pages);

  console.log(`Starting optimized translation for ${routes.length} pages into 12 languages...`);

  for (const locale of LOCALES) {
    const targetFile = path.join(localesOutputDir, `${locale.code}.json`);
    
    if (fs.existsSync(targetFile)) {
      console.log(`Translation for ${locale.name} already exists. Skipping.`);
      continue;
    }

    console.log(`\nTranslating to ${locale.name} (${locale.code})...`);
    const translatedDb = {};

    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      const page = pages[route];
      
      process.stdout.write(`Progress: ${i + 1}/${routes.length} (${Math.round((i + 1) / routes.length * 100)}%)\r`);

      // Collect all translatable strings from the page
      const textsToTranslate = [
        page.title,
        page.metaDescription,
        page.h1,
        page.description
      ];

      // Add options
      if (page.options && page.options.length > 0) {
        textsToTranslate.push(...page.options);
      }

      // Add FAQ questions and answers
      if (page.faqs && page.faqs.length > 0) {
        for (const faq of page.faqs) {
          textsToTranslate.push(faq.q, faq.a);
        }
      }

      // Translate the whole batch in one call
      const translatedTexts = await translateBatch(textsToTranslate, locale.code);

      // Reconstruct page object
      let ptr = 0;
      const translatedPage = {
        route: page.route,
        type: page.type,
        title: translatedTexts[ptr++] || page.title,
        metaDescription: translatedTexts[ptr++] || page.metaDescription,
        h1: translatedTexts[ptr++] || page.h1,
        description: translatedTexts[ptr++] || page.description,
        options: []
      };

      if (page.options && page.options.length > 0) {
        for (let j = 0; j < page.options.length; j++) {
          translatedPage.options.push(translatedTexts[ptr++] || page.options[j]);
        }
      }

      translatedPage.faqs = [];
      if (page.faqs && page.faqs.length > 0) {
        for (let j = 0; j < page.faqs.length; j++) {
          translatedPage.faqs.push({
            q: translatedTexts[ptr++] || page.faqs[j].q,
            a: translatedTexts[ptr++] || page.faqs[j].a
          });
        }
      }

      translatedDb[route] = translatedPage;
      await delay(120); // Be respectful to the public API
    }

    fs.writeFileSync(targetFile, JSON.stringify(translatedDb, null, 2), 'utf-8');
    console.log(`\nFinished ${locale.name}. Saved to locales/${locale.code}.json.`);
  }

  console.log('All translations completed successfully!');
}

translateDatabase();
