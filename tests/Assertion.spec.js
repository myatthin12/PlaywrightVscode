import {test, expect} from "@playwright/test"



test('Assertion Test1', async ({ page }) => {
    //open URL
    console.log('Navigating to register page...');
    await page.goto('https://demo.nopcommerce.com/register',  { timeout: 120000 });

    //1. expect(page).toHaveURL //Page has URL
    console.log('Asserting URL...');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register',  { timeout: 120000 });

    //2. expect(page).toHaveTitle // Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3. expect(locator).toBeVisible  //Element is visible
    const logo = await page.locator('.header-logo')
    await expect(logo).toBeVisible()

    //4 expect(locator).toBeEnabled() //Control is Enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

    //5 expected(locator).toBeChecked //checkbox/Radio button is checked
    
    //Radio button
    const gender = await page.locator('#gender-male')
    await gender.click()
    await expect(gender).toBeChecked()

    //checkbox
    const newsLetter = await page.locator('#Newsletter')
    await expect(newsLetter).toBeChecked()

    
});