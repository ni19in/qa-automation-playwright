import {test, expect} from '@playwright/test';
//Xpath

test.beforeAll(async ()=> {
 console.log ("Login ongoin-> Xpath identification ")
})

test.afterAll(async()=>{
    console.log("Xpath automation completed")
})

test ("Xpath integration",async({page})=>{
   await page.goto("https://demoqa.com/text-box");
   await page.locator("//input[@id='userName']").fill("Nithin");
   await page.locator("//input[@id='userEmail']").fill("nits@hash.kk");
   await page.locator("//textarea[@id='currentAddress']").fill("Ernakulam, Kerala, India");
   await page.locator("//textarea[@id='permanentAddress']").fill("India, Asia, Earth");
   await page.getByRole("button",{name:"submit" }).click()
   await page.waitForTimeout(2100);
})


  test("xpath for radio buttion", async ({page})=>{
    await page.goto("https://demoqa.com/radio-button");
    await page.locator("//label[@for='impressiveRadio']").click()
    await page.getByLabel("Impressive").click()
     await page.waitForTimeout(2100);

})


test("xpath identifiers", async ({page})=>{
  console.log("Form xpath");
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  const emailInput = page.locator("//input[@title='Email']");
  await emailInput.click();
  await emailInput.fill("aa@nn.sd");
  //const emailInput = page.getByTitle("Email") 
  //await page.getByTitle("Email").click()
  //await page.getByTitle("Email").fill("aa@kk.iin");
  await expect(emailInput).toHaveValue("aa@nn.sd");
  await page.locator("//input[@title='Password']").nth(0).fill("sss");
  await page.getByPlaceholder("Enter your company").nth(0).fill("Nits Corps");
  await page.locator("//input[@type = 'number' and  @placeholder = 'Enter your mobile number']").nth(0).fill("9666666");
  await page.getByLabel("Country").nth(0).fill("India");
  await page.getByRole("button",{name: "Submit"}).click()

})

test("redirection - page", async({page})=>{
 await page.goto("https://sqlpd.com/");
  await Promise.all([
  page.waitForURL(),
  await page.locator('.guest-login.button.try-a-few-cases', { hasText: 'Try a few cases' }).click()  ])
  await page.waitForTimeout(10000);
})
