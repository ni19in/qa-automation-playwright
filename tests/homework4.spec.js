import { test, expect } from '@playwright/test';

test("practice", async({page}) => {
    console.log("practice login page");
    await page.goto(" https://practice.expandtesting.com");
    await page.goto(" https://practice.expandtesting.com/inputs");
    await page.goBack("https://practice.expandtesting.com");
    await page.goForward("https://practice.expandtesting.com/inputs");
    await page.reload("https://practice.expandtesting.com/inputs");
    await page.close();
})
