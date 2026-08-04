const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch({
      defaultViewport: {
        width: 1440,
        height: 1080,
        deviceScaleFactor: 3,
      }
    });
    
    const page = await browser.newPage();
    
    // Screenshot 1: Nexgen Gaming
    console.log("Navigating to nexgen-gaming...");
    await page.goto('https://nexgen-gaming.vercel.app/', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(__dirname, 'public', 'images', 'nexgen-gaming.png') });
    console.log("Saved nexgen-gaming.png");

    // Screenshot 2: Let's Smile Dental
    console.log("Navigating to lets-smile-dental...");
    await page.goto('https://lets-smile-dental.vercel.app/', { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(__dirname, 'public', 'images', 'lets-smile-dental.png') });
    console.log("Saved lets-smile-dental.png");

    await browser.close();
    console.log("Done!");
  } catch (err) {
    console.error("Error capturing screenshots:", err);
  }
})();
