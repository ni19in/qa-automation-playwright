import { test, expect } from '@playwright/test';
const users = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
   
  },
  {
    username: 'problem_user',
    password: 'secret_sauce'
  },
{
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
{
    username: 'abcd',
    password: 'secree'
  },
  {
    username: 'xyz',
    password: 'sec'
  },
 
];
 test.skip("SauceDemo Login", async({page})=> {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("#user-name").fill("Admin");
    await page.locator("#password").fill("admin@123");
    await page.locator("#login-button").click();
 
});
 
 users.forEach((item) =>{
 
    test(`SauceDemo Login-${item.username}/ ${item.password}`,  async({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator("#user-name").fill(item.username);
        await page.locator("#password").fill(item.password);
        await page.locator("#login-button").click();
 
    });
 
});