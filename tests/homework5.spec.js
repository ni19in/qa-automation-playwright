import{test, expect} from '@playwright/test';

test("Amazon validation check", async({page}) => {
console.log("amazon login");
await page.goto("https://www.amazon.in/");
     const title  = await page.title();
    console.log("Amazon shopping");
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
await page.waitForTimeout(2000); 
await expect(page).toHaveScreenshot('amazon-home.png');
const url = page.url();
    console.log("url verification- https://www.amazon.in/");
    await expect(page).toHaveURL('https://www.amazon.in/');
})

test("google validation check", async({page}) => {
    console.log("google login");
    await page.goto("https://www.google.com/");
    const title = await expect(page).toHaveTitle("Google");
     const url = await expect(page).toHaveURL("https://www.google.com/");
     console.log("google url https://www.google.com/");
     await page.waitForTimeout(2000); 

     await expect(page).toHaveScreenshot('google.png')
})



