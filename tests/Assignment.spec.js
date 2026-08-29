const{test, expect} = require('@playwright/test');

test.only('Assignment', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    const Email = await page.locator('[type="email"]').fill("Kranthi3107@gmail.comm");
    const password=await page.locator('[type="password"]').fill("Sarlemawabro#123");
    const LoginButton=await page.locator('[type="submit"]').click();
    

   // await page.locator(".card-body b").first().waitFor();
    const ProductTitles= page.locator(".card-body b");//Here we are using locator to get the multiple elements and store it in a variable
    
    const ProductName= await ProductTitles.textContent()   ;
    console.log("First product title is" + ProductName);
    await page.pause();// comment this line to run the test without pausing
    //Hello there updated


});