import { test, expect } from '@playwright/test';

test("Open Browser", async({page}) => {

console.log("Open Browsers");
await page.goto("https://www.google.com");
await page.reload();

await page.goto("https://www.wikipedia.org/");
await page.goBack();

await page.goto("https://www.facebook.com/");
await page.reload();

await page.goto("https://www.facebook.com/");
await page.goBack();

await page.goForward();


}



)