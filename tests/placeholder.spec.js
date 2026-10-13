import { test, expect }  from '@playwright/test';

test ( "Placeholder", async ({page}) => {
    await page.goto ("https://bugbug.io/blog/software-testing/sample-web-application/");
    console.log("Testing with Placeholder");++
    await page.getByPlaceholder("Your e-mail").nth(0).fill("nits@gmail.co");

}
) 
 
test("role", async({page})=>{
await page.goto ("https://practicetestautomation.com/practice-test-login/");
console.log("Login check");
  await page.getByLabel("Username").fill("student");
  await page.getByLabel("Password").fill("Password123");
      await page.waitForTimeout(10000);
        await page.getByRole("button", { name: "Submit" }).click();
              await page.waitForTimeout(10000);

}
)

test("logint sucess", async ({page}) =>{
    await page.goto ("https://practicetestautomation.com/practice-test-login/");
    console.log("login module");
    await page.getByLabel("Username").fill("student");
    await page.getByLabel("Password").fill("Password123");
    await page.getByRole("button", {name: "Submit"}).click();
    await expect(page.getByText ("Congratulations student. You successfully logged in!")).toBeVisible();
    await page.screenshot({ path: 'HomeLOGIN.png' });
})


test ("form page with place holder", async ({page}) => {
await page.goto("https://formsmarts.com/html-form-example");
console.log("Place holder testing with playwright");
const frame = page.frameLocator('iframe[src*="formsmarts.com/form/yx"]');
await frame.getByPlaceholder("Your first name").fill("Nithin");
await frame.getByPlaceholder("Your last name").fill("Raj");
await frame.getByLabel("Email").fill("nn@gg.in");
await frame.locator('#u_PYy_338367').selectOption("Website Feedback");
await frame.getByPlaceholder("Your comment").fill("hellow, its for test");
await frame.getByRole('button',{name: "Continue →"}).click();
await expect(frame.getByText("Email address, like alice@example.com.")).toBeVisible({ timeout: 10000 });
await page.waitForTimeout(20000);

})


test("Registration", async ({ page }) => {
  await page.goto("https://formsmarts.com/form-builder-features");

  await Promise.all([
    page.waitForURL(/signup|register/), 
    page.getByRole("button", { name: "Create a Free Account " }).click(),
  ]);
  await page.getByPlaceholder("First name").fill("NEAL"); 
  await page.locator("#lname").fill("smith");
 
})