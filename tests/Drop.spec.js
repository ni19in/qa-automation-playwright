import {test, expect} from '@playwright/test';

class dropdown {
    constructor (page) {
    this.page = page;
}
async selectOption(value) {
    await this.page.selectOption('#dropdown', value);

}}
 test.beforeAll(async ()=>{
    console.log("radio and form check and automation has started")
 });
test.afterAll(async ()=>{
    console.log("Radio and dropcheck completed - hence automation has been completed");

});

test("dropradio", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log("Form testing");
    await page.getByPlaceholder("Enter Name").nth(0).fill("Nithin");
    await page.getByPlaceholder("Enter EMail").nth(0).fill("aa@bb.cc");
    await page.getByPlaceholder("Enter Phone").nth(0).fill("96969696");
      await page.getByLabel("Address:").fill("sdsdsd, sdssdsd, sds");
    await page.locator('#male').check()
    console.log("Gender - male ");
    await page.locator('#wednesday').check()
    console.log ("Day is Wednesday");
    await page.getByLabel('Country:').selectOption('Brazil');
    console.log("Country: is Brazil");
    await page.getByLabel('Sorted List:').nth(0).selectOption('zebra')
    console.log("Zebra is selected as animal");
    await page.getByLabel('Colors:').nth(0).selectOption('Yellow')
    console.log("Yellow selected");



})


