const{test,expect} = require('@playwright/test');

test('TestSchema', async({page})=>{
    test.setTimeout(240000);
    await page.goto("https://testapps.aquilasoftware.com/CaterXpert.action");
    console.log("Page Title is " + await page.title());
    await expect(page).toHaveTitle(/CaterXpert/);
    const CatarerId = page.locator("#CatererId");
    const Username  = page.locator("#UserName");
    const Password  = page.locator("#Password");
    const GoButton  = page.locator("[value='Go']");
    
    await CatarerId.fill("behindthescenestest");
    await Username.fill("superadmin");
    await Password.fill("Test2025#");
    await GoButton.click();

    const FrameOne= page.frameLocator('[name="header"]');
    await FrameOne.getByRole('img', { name: 'Home' }).click();

    const RightFrame = page.frameLocator('[name="right"]');
    const SalesNewLink =RightFrame.getByRole('link', { name: 'Sales New' });
    await SalesNewLink.click();
    
    
    
    const HamburgerMenu = page.getByText('menu', { exact: true }).first() ;
    await expect(HamburgerMenu).toBeVisible({ timeout: 150000 });
    await HamburgerMenu.click();

    const CreateEvent= page.getByRole('link', { name: 'Create Event' });
    await CreateEvent.click();

    const businessUnit = page.getByText('- Select Business Unit -');
    await expect(businessUnit).toBeVisible({ timeout: 60000 });
    await businessUnit.click();
    await page.getByRole('option', { name: 'Drop off' }).click();

    // Verify the selection
    await expect(page.locator('.p-dropdown-label').first()).toHaveText('Drop off');

});