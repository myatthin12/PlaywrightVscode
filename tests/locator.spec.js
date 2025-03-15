import {test, expect} from '@playwright/test';

test ('Locators',async ({page})=>{
    await page.goto("https://www.demoblaze.com")

    //click on login button - property
    //await page.locator('id=login2').click()

    //Sign Up
    await page.click('id=signin2')

    //username 
    await page.fill('#sign-username','testuser')

    //password
    await page.fill("input[id='sign-password']",'password')

    //Sign up button
    await page.click('//*[@id="signInModal"]/div/div/div[3]/button[2]')



})
 