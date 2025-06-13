import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ProductViewPage } from '../pages/ProductViewPage'


const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"
const pn = "IPHONE 13 PRO"

let dashboardPage
let productViewPage
test.beforeEach(async ({page})=>{
   // await page.pause()
    dashboardPage = new DashboardPage(page)
    productViewPage = new ProductViewPage(page)
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
})

test("Search and add the product to the cart", async ()=>{
    await dashboardPage.searchProductAndAddToCart(pn)
    await expect(dashboardPage.addToCartSucceddMsg).toContainText("Product Added To Cart")

})

test("Search and view the product details", async ()=>{
    await dashboardPage.searchProductAndViewDetails(pn)
    await expect(productViewPage.productName).toHaveText(pn)
})

