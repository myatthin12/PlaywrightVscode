import {test, expect } from "@playwright/test";

//only PNG
test('Animate Caravan',async({page})=>{
    await page.goto('https://animate-caravan.loftal-dev.com')
    const homepagePic = page.locator('//*[@id="topAboutBox"]/div/div[1]/img');
    await expect(homepagePic).toHaveScreenshot('Visual.png')
})

test('Div Animate Caravan',async({page})=>{
    await page.goto('https://animate-caravan.loftal-dev.com');
    const divPic = page.locator('//*[@id="topAboutBox"]/div/div[1]')
    await expect(divPic).toHaveScreenshot('DivPic.png')
})
