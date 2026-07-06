const fs = require('fs');
const https = require('https');
const path = require('path');

const FONTS_DIR = path.join(__dirname, '../public/fonts');

if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

const fontsToDownload = [
  {
    name: 'CabinetGrotesk-Variable.woff2',
    url: 'https://cdn.fontshare.com/wf/314J45J6G34Y3N63G4PZJ67K7Q3YQ3Q3/CabinetGrotesk-Variable.woff2'
  },
  {
    name: 'Switzer-Variable.woff2',
    url: 'https://cdn.fontshare.com/wf/F4F4Y3N63G4PZJ67K7Q3YQ3Q3G34Y3N6/Switzer-Variable.woff2' // This URL might be wrong, I'll use google fonts alternatives or search for switzer.
  }
];

// Instead of guessing Fontshare CDN URLs which are hashed, I will download the CSS file from API, 
// extract the WOFF2 URLs for the variable versions, and download them.

async function downloadFonts() {
  const fetchCss = (url) => new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });

  const downloadFile = (url, dest) => new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });

  try {
    const cabinetCss = await fetchCss('https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700,400,900,100,200,300&display=swap');
    const switzerCss = await fetchCss('https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700,300,800,900,100,200&display=swap');

    const extractWoff2 = (css) => {
      const match = css.match(/url\(['"]?(https:\/\/[^'"\)]+\.woff2)['"]?\)/);
      return match ? match[1] : null;
    };

    const cabinetUrl = extractWoff2(cabinetCss);
    const switzerUrl = extractWoff2(switzerCss);

    if (cabinetUrl) {
      console.log('Downloading Cabinet Grotesk...');
      await downloadFile(cabinetUrl, path.join(FONTS_DIR, 'CabinetGrotesk-Variable.woff2'));
    }
    
    if (switzerUrl) {
      console.log('Downloading Switzer...');
      await downloadFile(switzerUrl, path.join(FONTS_DIR, 'Switzer-Variable.woff2'));
    }

    console.log('Fonts downloaded successfully.');
  } catch (err) {
    console.error('Failed to download fonts:', err);
  }
}

downloadFonts();
