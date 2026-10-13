import { test, expect } from '@playwright/test';

test("Open Browser", async({page}) => {

console.log("google verification  Browsers");
await page.goto("https://www.google.com");
await page.reload();
const hyperlink  = await page.url();
    console.log(hyperlink)
    await expect(page).toHaveTitle('Google');
})

test("url verification Wikipedia", async({page}) => {


await page.goto("https://www.wikipedia.org");
await page.goBack();
const title  = await page.title();
    console.log(title)
    await expect(page).toHaveTitle('GWikioogle');

})

test("title and url verification youtube", async({page}) => {

await page.goto("https://www.youtube.com/");
const header  = await page.title();
    console.log(header)
    await expect(page).toHaveURL('www.youtube.com/');

})