const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Set viewport to desktop size to see all mockups
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Navigate to the mockup file
  await page.goto('file:///Users/fbal98/Documents/personal/projects/mockup-designer/prototypes/hayamez/mockup.html');

  // Wait for page to load
  await page.waitForTimeout(2000);

  // Get all mobile mockup screens
  const screens = await page.locator('.mobile-mockup').all();
  console.log(`Found ${screens.length} screens`);

  const outputDir = '/Users/fbal98/Documents/personal/projects/my-portfolio/public/images/snippet-projects/era';

  // Take screenshot of each screen
  for (let i = 0; i < screens.length; i++) {
    const screen = screens[i];

    // Scroll to element
    await screen.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    // Get the screen label to name the file
    const label = await page.locator('.screen-wrapper').nth(i).locator('.screen-label').textContent();
    const fileName = `screen-${(i + 1).toString().padStart(2, '0')}-${label.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.png`;

    // Take screenshot
    await screen.screenshot({ path: path.join(outputDir, fileName) });
    console.log(`Captured: ${fileName}`);
  }

  await browser.close();
  console.log('Done!');
})();
