import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ProductViewPage } from '../pages/ProductViewPage'
import { ExcelUtils } from '../utils/ExcelUtils'
import path from 'path'

test.describe.configure({mode : "parallel", timeout: 60000})


const filePath = path.join(__dirname, "../TestData/excel.xlsx")

const sheetName = "Login"

let datas
try{
    datas = ExcelUtils.getDataFromExcel(filePath, sheetName)
}
catch(e){
    console.log(e)
}

let dashboardPage
let productViewPage
let loginPage


test.beforeEach(async ({page})=>{
    dashboardPage = new DashboardPage(page)
    productViewPage = new ProductViewPage(page)
    loginPage = new LoginPage(page)
})
for(let data of datas){
test.describe("Dashboard Page test", async ()=>{
  test(`Search and add the product to the cart for ${data.productName} `, {tag: ['@smoke', '@regression']}, async ()=>{
    test.step("Launch the URL", async ()=>{
      await loginPage.launchURL(data.url)
    })
    test.step("Login into the application", async ()=>{
      await loginPage.validLogin(data.username, data.password)
    })
    test.step("Search product and add to the cart", async ()=>{
      await dashboardPage.searchProductAndAddToCart(data.productName)
    })
      await expect(dashboardPage.addToCartSucceddMsg).toContainText("Product Added To Cart")
  })

  test(`@regression Search and view the product details for ${data.productName}`,  async ()=>{
      await loginPage.launchURL(data.url)
      await loginPage.validLogin(data.username, data.password)
      await dashboardPage.searchProductAndViewDetails(data.productName)
      await expect(productViewPage.productName).toHaveText(data.productName)
  })
})
}
