const{test, expect} = require('@playwright/test');

test.only('CaterxpertTest Login', async ({page})=>{
    await page.goto("https://testapps.aquilasoftware.com/CaterXpert.action");
    
    console.log("Page Title is " + await page.title());
    const CatarerId = await page.locator("#CatererId").fill("caterxperttest");
    const Username = await page.locator("#UserName").fill("superadmin");
    const Password = await page.locator("#Password").fill("(@t$np3r2026^");
    const GoButton = await page.locator("[value='Go']").click();


});