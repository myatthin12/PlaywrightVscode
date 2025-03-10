const{test, except, expect} = require('@playwright/test')

test('Home Page', async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    //capture title 
    const pageTitle = await page.title();
    console.log('Page Title is : ' , pageTitle);

    //validate the title
    await expect(page).toHaveTitle("Test Login | Practice Test Automation");

    //capture URL 
    const pageURL = await page.url();
    console.log ("Page URL is : ",pageURL);

    //validate the URL -> expect is used for validation
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

    await page.close();
})

