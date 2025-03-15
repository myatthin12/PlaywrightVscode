import {test, expect} from '@playwright/test'

test ('Login', async({page})=>{
    await page.goto("https://www.demoblaze.com")

    await page.click('#login2');
    await page.fill('#loginusername','atestuser2');
    await page.fill('#loginpassword','Password');
    await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]');

    const logoutLink = await page.locator("//*[@id='logout2']");
    await expect(logoutLink).toBeVisible();
})