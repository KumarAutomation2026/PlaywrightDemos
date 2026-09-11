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

   //await page.pause();

   await page.locator("[routerlink*='cart']").click();// click on the cart button
   await page.locator("div li").first().waitFor();// wait for the cart page to load
   const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible();// check if the product is visible in the cart
   expect(bool).toBeTruthy();// assert that the product is visible in the cart

   await page.locator("text=Checkout").click();
   await page.locator("[Placeholder ='Select Country']").pressSequentially("ind",{delay:100}); // wait for the suggestions to load
   //await page.locator(".ta-results").waitFor();
   
   
   await page.locator(".ta-results button").nth(1).click(); // pick the country suggestion
   await page.locator(".action__submit").click()
   //await page.pause();    

   const OrderPageconfirmation = await page.locator(".hero-primary").textContent();// get the order confirmation text
   expect(OrderPageconfirmation).toBe(" Thankyou for the order. ");
   console.log(OrderPageconfirmation);// print the order confirmation text

   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();// get the orderId
   console.log(orderId);// print the orderId

   await page.locator("button[routerlink*='myorders']").click();    // click on the my orders button
   await page.locator("tbody").waitFor();   //  wait for the table to load
   const rows = page.locator("tbody tr"); // get all the rows in the table

   //const rowCount = await rows.count();

   for(let i=0; i<await rows.count(); i++){   // loop through the rows to find the orderId
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if(orderId.includes(rowOrderId))  {
        await rows.nth(i).locator("button").first().click();    // click on the view button for that order
        break;  
    }}
   
   // await page.locator(".col-text").waitFor();// wait for the order details to load

    const MyOrderDeatils= await page.locator(".col-text").textContent();  // get the order details
    
    expect(orderId.includes(MyOrderDeatils)).toBeTruthy();   //  assert that the order details contain the orderId
    console.log("You have Sucessfully ordered: " + MyOrderDeatils);  // print the order details
   
});