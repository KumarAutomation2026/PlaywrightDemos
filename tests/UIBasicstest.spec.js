const {test,expect} = require('@playwright/test')

test('My First Test Case', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // get tilte  --using  asertion

    console.log("Page title is " + await page.title());

    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    
    // Using locators -- 2 ways to use locators
    await page.locator("#username").fill("rahulshetty");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await page.locator("[style*='block']").textContent().then(function(errorMessage){
        console.log(errorMessage);
    }); 

});
