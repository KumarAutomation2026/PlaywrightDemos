const{test, expect} = require('@playwright/test');

test('CaterxpertCat Schema Login', async ({page})=>{
    test.setTimeout(90000);
    await page.goto("https://catapps.aquilasoftware.com/CaterXpert.action");
    
    console.log("Page Title is " + await page.title());
    await expect(page).toHaveTitle(/CaterXpert/);
    console.log("The Page title is verified Successfully");
    const CatarerId = await page.locator("#CatererId").fill("caterxpertcat"); 
    const Username = await page.locator("#UserName").fill("superadmin");
    const Password = await page.locator("#Password").fill("(@t$np3r2026^");

    const FrameOne = await page.frameLocator('[name="header"]');

    await page.locator("[value='Go']").click();
   
    //await page.waitForURL("**/appAuthenticate.action", { timeout: 50000 });
    
    //await page.locator("[name*='right']").first().waitFor();
  

   //click on the home icon to go to the home page
    await FrameOne.getByRole('img', { name: 'Home' }).click();

    //click on the Sales New link to go to the Sales New page 
    const RightFrame = await page.frameLocator('[name="right"]');

    await RightFrame.getByRole('link', { name: 'Sales New' }).click();
    //await page.waitForLoadState('networkidle', { timeout: 30000 });

    // Wait until Sales New application is actually ready
    //await page.waitForLoadState('domcontentloaded');

    /*await page.waitForURL('/CaterXpertSales/');
    await expect(page.getByText('Event Listing', { exact: true })).toBeVisible({timeout: 90000});
    console.log('Sales New application loaded successfully'); */

    //Open Hamburger menu 
    const HamburgerMenu = page.getByText('menu', { exact: true });
    //await expect(HamburgerMenu.first()).toBeVisible({timeout: 90000});
    await HamburgerMenu.first().waitFor({state: 'visible', timeout: 90000 });
    await HamburgerMenu.first().click();
    /*const HamburgerMenu= await page.getByRole('button' , {name : 'menu'});
    await HamburgerMenu.click();*/

    //click Create Event link to go to the Create Event page
    const CreateEvent= await page.getByRole('link', { name: 'Create Event' });
    await CreateEvent.click();

    //await page.getByRole('textbox', { placeholder: 'Event #' }).fill('');
    await page.title();
    await page.pause(5000);
    //await page.waitForLoadState('networkidle', { timeout: 2000 });
    //await page.screenshot({path: "C:\\Users\\Syena Developer\\OneDrive\\Pictures\\Screenshots\\PlaywrightScreenshots\\CaterxpertLogin.png"});
   


});