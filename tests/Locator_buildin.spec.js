/*
page.getByAltText() - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/
import {test,expect} from '@playwright/test'

test('Testing', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logo = await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //use for link , button etc
    await page.getByRole('button', {type : 'submit'}).click();

    //check username with dynamically after logged in
    const name = await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p').textContent()
    await expect(await page.getByText(name)).toBeVisible()

})