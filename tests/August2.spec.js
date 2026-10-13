import {test, expect} from '@playwright/test';

//mouse click effets
test ("mouse click- left one", async({page}) => {
    await page.goto("https://practice.expandtesting.com/login");
    await page.getByRole("button", {name : 'Login'}).click({button: "left"});
    await expect (page.locator("#flash")).toContainText("Your username is invalid!");

})

test("Mouse click- right", async({page})=>{
        await page.goto("https://practice.expandtesting.com/login");
        await page.getByRole("button",{name : "Login"}).click({button:"right"});
        await expect(page.locator("#flash")).toContainText("Your username is invalid!");

})