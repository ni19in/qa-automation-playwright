import { test, expect } from '@playwright/test';

test("Amazon Home Page", async({page}) => {
console.log("amazon login");
await page.goto("https://www.amazon.in/");
await page.reload();
})

test.skip(" Flipkart Home Page", async({page}) => {
 console.log("Flipkart login - feel free to shop");
 await page.goto("https://www.flipkart.com/");
 await page.goBack("https://www.amazon.in/");
   })


test("google Home Page", async({page}) => {
console.log("google login - Search anything");
await page.goto("https://www.google.com/");
await page.goBack("https://www.amazon.in/");
   })