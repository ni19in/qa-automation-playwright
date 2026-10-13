import { test, expect } from '@playwright/test';

test("Login page", async({page}) => {

await page.goto("https://practice.expandtesting.com/login");
await page.getByLabel('Username').fill('adminqq');
  await page.getByLabel('Password').fill('pass123');


})