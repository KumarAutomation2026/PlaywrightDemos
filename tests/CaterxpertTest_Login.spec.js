const{test, expect} = require('@playwright/test');

test('CaterxpertCat Schema Login', async ({page})=>{
    await page.goto("https://catapps.aquilasoftware.com/CaterXpert.action");
    
    console.log("Page Title is " + await page.title());
    await expect(page).toHaveTitle(/CaterXpert/);
    console.log("The Page title is verified Successfully");
    const CatarerId = await page.locator("#CatererId").fill("caterxpertcat");
    const Username = await page.locator("#UserName").fill("superadmin");
    const Password = await page.locator("#Password").fill("(@t$np3r2026^");
    const HomeIcon = await page.frameLocator('[name="header"]');
    await page.locator("[value='Go']").click();
    //await page.waitForURL("**/appAuthenticate.action", { timeout: 50000 });
    //await page.waitForLoadState('networkidle', { timeout: 5000 });
    await page.locator("[name*='right']").first().waitFor();
    //await page.pause();

    
      // Wait for a specific element that indicates login success
    //await page.waitForSelector('[title="Logout"]', { timeout: 40000 });
    //await page.waitForLoadState('networkidle', { timeout: 2000 });
    
    await page.screenshot({path: "C:\\Users\\Syena Developer\\OneDrive\\Pictures\\Screenshots\\PlaywrightScreenshots\\CaterxpertLogin.png"});
    const Parallel = await Promise.all([
    page.frameLocator('[name="right"]').getByText('SuperAdmin Login').textContent(),
    page.frameLocator('[name="header"]').click(),
    HomeIcon.textContent()  // or .isVisible() depending on intent
    ]);
    

});