import {test, expect} from '@playwright/test';

test.beforeAll(async()=>{
    console.log("Execution Started");
    
})

test.beforeEach(async()=>{
    console.log("===Launch the browser.===");
    console.log("-----Open the Login page-----");
})

test.afterEach(async({page}) =>{
    console.log("Test Case Completed");
    await page.close();
    
})

test.afterAll(async()=>{
    console.log("===== Execution Finished =====");
})

test ("Hooks login check - correct credentials", async({page}) => {
    await page.goto("https://practice.expandtesting.com/login");
    console.log("Login validation");
    await page.getByLabel("Username").fill("practice");
    await page.getByLabel("Password").fill("SuperSecretPassword!")
    await page.getByRole("button", {name: 'Login'}).click();
    await expect(page.locator('#flash')).toContainText("You logged into a secure area!");


})


test ("Test Case 2 – Invalid Username", async({page})=>{
    await page.goto("https://practice.expandtesting.com/login");
    console.log("Username validation check");
    await page.getByLabel("Username").fill("admin");
    await page.getByLabel("Password").fill("SuperSecretPassword")
    await page.getByRole("button", { name: 'Login' }).click();
    await expect(page.locator("#flash")).toContainText("Your username is invalid!");
    await page.waitForTimeout(10000);


})


test ("Test Case 3 – Invalid Password", async({page})=>{
    await page.goto("https://practice.expandtesting.com/login");
    console.log("Username validation check");
    await page.getByLabel("Username").fill("practice");
    await page.getByLabel("Password").fill("admin123")
    await page.getByRole("button", { name: 'Login' }).click();
    await expect(page.locator("#flash")).toContainText("Your password is invalid!");
    await page.waitForTimeout(10000);


})
