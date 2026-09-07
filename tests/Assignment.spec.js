const { test, expect } = require('@playwright/test');
 
 
 
 
test.only('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "Kranthi3107@gmail.com";
   const productName = 'iphone 13 pro';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Sarlemawabro#123");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
       if (await products.nth(i).locator("b").textContent() === productName)
        {
           await products.nth(i).locator("text= Add To Cart").click();
           break;
       }
   }
   await page.pause();
   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
   expect(bool).toBeTruthy();
   
});