import {test, expect} from '@playwright/test';
 
 
test("Handling Frames", async({page})=> {
   
 
    await page.goto('https://practice.expandtesting.com/iframe');
 
    const frameSection = await page.frameLocator("#mce_0_ifr");
 
    await frameSection.locator("#tinymce").fill("Playwright Test");
 
 
   //await page.locator("#tinymce").fill("Playwright Test");
 
    await page.waitForTimeout(2000);
 
});
 