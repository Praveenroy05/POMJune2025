# Test info

- Name: Dashboard Page test >> Search and add the product to the cart for IPHONE 13 PRO 
- Location: C:\Users\prave\Music\POMPWTSMay\tests\DPTestDataDrivenUsingExcel.spec.ts:35:7

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('#toast-container')
Expected string: "Product Added To Cart"
Received string: ""
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('#toast-container')

    at C:\Users\prave\Music\POMPWTSMay\tests\DPTestDataDrivenUsingExcel.spec.ts:45:55
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 | import { LoginPage } from '../pages/LoginPage'
   3 | import { DashboardPage } from '../pages/DashboardPage'
   4 | import { ProductViewPage } from '../pages/ProductViewPage'
   5 | import { ExcelUtils } from '../utils/ExcelUtils'
   6 | import path from 'path'
   7 |
   8 | test.describe.configure({mode : "parallel", timeout: 60000})
   9 |
  10 |
  11 | const filePath = path.join(__dirname, "../TestData/excel.xlsx")
  12 |
  13 | const sheetName = "Login"
  14 |
  15 | let datas
  16 | try{
  17 |     datas = ExcelUtils.getDataFromExcel(filePath, sheetName)
  18 | }
  19 | catch(e){
  20 |     console.log(e)
  21 | }
  22 |
  23 | let dashboardPage
  24 | let productViewPage
  25 | let loginPage
  26 |
  27 |
  28 | test.beforeEach(async ({page})=>{
  29 |     dashboardPage = new DashboardPage(page)
  30 |     productViewPage = new ProductViewPage(page)
  31 |     loginPage = new LoginPage(page)
  32 | })
  33 | for(let data of datas){
  34 | test.describe("Dashboard Page test", async ()=>{
  35 |   test(`Search and add the product to the cart for ${data.productName} `, {tag: ['@smoke', '@regression']}, async ()=>{
  36 |     test.step("Launch the URL", async ()=>{
  37 |       await loginPage.launchURL(data.url)
  38 |     })
  39 |     test.step("Login into the application", async ()=>{
  40 |       await loginPage.validLogin(data.username, data.password)
  41 |     })
  42 |     test.step("Search product and add to the cart", async ()=>{
  43 |       await dashboardPage.searchProductAndAddToCart(data.productName)
  44 |     })
> 45 |       await expect(dashboardPage.addToCartSucceddMsg).toContainText("Product Added To Cart")
     |                                                       ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  46 |   })
  47 |
  48 |   test(`@regression Search and view the product details for ${data.productName}`,  async ()=>{
  49 |       await loginPage.launchURL(data.url)
  50 |       await loginPage.validLogin(data.username, data.password)
  51 |       await dashboardPage.searchProductAndViewDetails(data.productName)
  52 |       await expect(productViewPage.productName).toHaveText(data.productName)
  53 |   })
  54 | })
  55 | }
  56 |
```