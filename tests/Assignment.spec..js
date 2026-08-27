const{test, expect} = require('@playwright/tests');

test.only('CaterxpertCat Schema Login', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    const Email = await page.locator('[type="email"]');
    const password=await page.locator('[type="password"]');
    const LoginButton=await page.locator('[type="submit"]');
    const ProductTitles= page.locator(".card-body b");//Here we are using locator to get the multiple elements and store it in a variable
    await Email.fill("Kranthi3107@gmail.comm");
    await password.fill("Sarlemawabro#123");
    await LoginButton.click();

    console.log("First product title is" + await ProductTitles.first().textContent());



});