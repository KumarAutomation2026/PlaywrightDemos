const{test,expect} = require('@playwright/test');

test('TestSchema', async({page})=>{
    test.setTimeout(120000);
    await page.goto("https://testapps.aquilasoftware.com/CaterXpertSales2026_0905HF1");
    console.log("Page Title is " + await page.title());
    await expect(page).toHaveTitle(/CaterXpert/);
    const CatarerId = await page.locator("#CatererId").fill("behindthescenestest");
    const Username = await page.locator("#UserName").fill("superadmin");
    const Password = await page.locator("#Password").fill("Test2025#");
    const LoginButton = page.getByRole('button', { name: 'Login' });
    await LoginButton.click();

    const HamburgerMenu = page.getByText('menu', { exact: true }).first().first() ;
    await HamburgerMenu.first().click();

    const CreateEvent= page.getByRole('link', { name: 'Create Event' });
    await CreateEvent.click();
});