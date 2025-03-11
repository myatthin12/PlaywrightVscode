import { test, expect } from "@playwright/test";

test('SnapShot Testing', async ({ page }) => {
    // 1️⃣ Website ကို Visit
    await page.goto("https://animate-caravan.loftal-dev.com");

    // 2️⃣ Screenshot Compare with maxDiffPixels
    await expect(page).toHaveScreenshot("Testing1.png", { 
        maxDiffPixels: 100,  // Allow up to 100 different pixels
        fullPage: true       // Ensure full-page screenshot
    });
});
