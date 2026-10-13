import { test, expect } from '@playwright/test';


test("Amazon Home Page", async({page}) => {
console.log("amazon login");
await page.goto("https://www.amazon.in/");
await page.reload();
await page.screenshot({ path: 'images.png' });

})

test(" Flipkart Home Page", async({page}) => {
 console.log("Flipkart login - feel free to shop");
 await page.goto("https://www.flipkart.com/");
 await page.goBack("https://www.amazon.in/");
   })


test("Myntra Home Page", async({page}) => {
console.log("Myntra login - feel free to shop");
await page.goto("https://www.myntra.com/");
await page.goBack("https://www.flipkart.com/");
   })

test("google Home Page", async({page}) => {
console.log("google login - Search anything");
await page.goto("https://www.google.com/");
await page.goBack("https://www.amazon.in/");
   })