import {test, expect} from '@playwright/test'

test('Multi Element Locators',async({page})=>{
    await page.goto('https://animate-caravan.loftal-dev.com')

    const links = await page.$$('a')

    for (const linkCapture of links){
        const linkText = await linkCapture.textContent()
        console.log(linkText)
    }
})

test('ProductName',async({page})=>{
    await page.goto('https://animate-caravan.loftal-dev.com')

    page.waitForSelector('//*[@id="pageTop"]/section/div')
    const products = await page.$$('//*[@id="pageTop"]/section/div')

    for (const productName of products){
        const name = await productName.textContent()
        console.log(name)
    }
})