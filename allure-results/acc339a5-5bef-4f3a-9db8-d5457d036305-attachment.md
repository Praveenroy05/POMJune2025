# Test info

- Name: Dashboard Page test >> Search and add the product to the cart for ADIDAS ORIGINAL 
- Location: C:\Users\prave\Music\POMPWTSMay\tests\DPTestDataDrivenUsingExcel.spec.ts:35:7

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://rahulshettyacademy.com/client", waiting until "load"

    at LoginPage.launchURL (C:\Users\prave\Music\POMPWTSMay\pages\LoginPage.ts:29:25)
    at C:\Users\prave\Music\POMPWTSMay\tests\DPTestDataDrivenUsingExcel.spec.ts:37:23
    at C:\Users\prave\Music\POMPWTSMay\tests\DPTestDataDrivenUsingExcel.spec.ts:36:10
```

# Test source

```ts
   1 | // page - locators and methods related to that particular(Login) page
   2 |
   3 | import { Locator, Page } from "playwright";
   4 |
   5 |
   6 | export class LoginPage{
   7 |
   8 |     // Locators  - properties/variable of a class - 
   9 |
  10 |     private page : Page
  11 |     private username 
  12 |     private password 
  13 |     private loginBtn : Locator
  14 |     errMessage : Locator
  15 |     homePageIdentifier : Locator
  16 |
  17 |     // Constructor - method which is called when an object of a class is created
  18 |     constructor(page){
  19 |         // this - refer to an object of a class
  20 |         this.page = page
  21 |         this.username = this.page.getByPlaceholder("email@example.com")
  22 |         this.password = this.page.getByPlaceholder("enter your passsword")
  23 |         this.loginBtn = this.page.getByRole('button', {name: 'Login', exact : true})
  24 |         this.errMessage  = this.page.locator("#toast-container")
  25 |         this.homePageIdentifier = this.page.locator(".fa-sign-out")
  26 |     }
  27 |
  28 |     async launchURL(url){
> 29 |         await this.page.goto(url)
     |                         ^ Error: page.goto: Test ended.
  30 |     }
  31 |
  32 |     async validLogin(username, password){
  33 |         await this.username.fill(username)
  34 |         await this.password.fill(password)
  35 |         await this.loginBtn.click()
  36 |     }
  37 |
  38 |      async invalidLogin(username, incorrectPassword){
  39 |         await this.username.fill(username)
  40 |         await this.password.fill(incorrectPassword)
  41 |         await this.loginBtn.click({timeout : 20000})
  42 |     }
  43 |
  44 | }
```