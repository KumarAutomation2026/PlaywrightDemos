const {test,expect} = require('@playwright/test')

test('My First Test Case', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const UserName = page.locator("#username");
    const Password = page.locator("#password");
    const SignInButton = page.locator('[type="submit"]');
    const CardTitles= page.locator(".card-body a");//Here we are using locator to get the multiple elements and store it in a variable
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    // get tilte  --using  asertion

    console.log("Page title is " + await page.title());

    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    
    // Using locators -- 2 ways to use locators
    await UserName.fill("rahulshettyacademy");
    await Password.fill("Learning@830$3mK2");
    await SignInButton.click();
    
    //console.log(await page.locator("[style*='block']").textContent());
    try {
    await page.locator("[style*='block']")
    } catch (error) {
        //textContent() is used to get the text from the element
     console.log("Wrong UserName",await page.locator("[style*='block']").textContent());
    } 
    
   const AllTitles= await CardTitles.allTextContents();
   console.log(AllTitles);

});
