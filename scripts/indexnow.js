const fs = require('fs');
const path = require('path');

const API_KEY = '558a7398bdd142a9a8025299699bd9ea';
const HOST = 'gamewheelclub.com';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

async function submitIndexNow() {
  console.log('=== Starting IndexNow Submission for GameWheelClub ===');
  console.log(`API Key: ${API_KEY}`);
  console.log(`Key Location: ${KEY_LOCATION}`);

  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`Sitemap file not found at: ${SITEMAP_PATH}`);
    process.exit(1);
  }

  const xmlContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const locMatches = xmlContent.match(/<loc>(https:\/\/gamewheelclub\.com\/[^<]*)</g);

  if (!locMatches) {
    console.error('No URLs found in sitemap.xml!');
    process.exit(1);
  }

  const urls = locMatches.map((m) => m.replace('<loc>', ''));
  // Remove duplicates
  const uniqueUrls = Array.from(new Set(urls));
  console.log(`Extracted ${uniqueUrls.length} unique URLs from sitemap.xml`);

  // IndexNow accepts up to 10,000 URLs per POST request
  const BATCH_SIZE = 10000;
  const batches = [];
  for (let i = 0; i < uniqueUrls.length; i += BATCH_SIZE) {
    batches.push(uniqueUrls.slice(i, i + BATCH_SIZE));
  }

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (let bIndex = 0; bIndex < batches.length; bIndex++) {
    const batch = batches[bIndex];
    console.log(`Submitting batch ${bIndex + 1}/${batches.length} (${batch.length} URLs)...`);

    const payload = {
      host: HOST,
      key: API_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch,
    };

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        console.log(`[${endpoint}] Status: ${response.status} ${response.statusText}`);
        if (response.ok || response.status === 200 || response.status === 202) {
          console.log(`✅ Batch ${bIndex + 1} successfully submitted to ${endpoint}`);
        } else {
          const bodyText = await response.text();
          console.warn(`⚠️ Warning from ${endpoint}: ${bodyText}`);
        }
      } catch (err) {
        console.error(`❌ Error submitting to ${endpoint}:`, err.message);
      }
    }
  }

  console.log('=== IndexNow Submission Completed Successfully! ===');
}

submitIndexNow();
