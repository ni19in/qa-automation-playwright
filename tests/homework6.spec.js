import{ test, expect }  from '@playwright/test';
test("Screensshot", async({page}) => {
await page.goto("https://practice.expandtesting.com")
await page.screenshot({ path: 'Homepage.png' });

})
