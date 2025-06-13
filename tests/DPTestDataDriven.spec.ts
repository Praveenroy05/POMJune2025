import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ProductViewPage } from '../pages/ProductViewPage'
import datas from '../TestData/dataDriven.json'
//console.log(datas);


let dashboardPage
let productViewPage
let loginPage


test.beforeEach(async ({page})=>{
    dashboardPage = new DashboardPage(page)
    productViewPage = new ProductViewPage(page)
    loginPage = new LoginPage(page)
})
for(let data of datas){
test(`@smoke Search and add the product to the cart for ${data.productName} `, async ()=>{
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.username, data.password)
    await dashboardPage.searchProductAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartSucceddMsg).toContainText("Product Added To Cart")
})

test(`@regression Search and view the product details for ${data.productName}`, async ()=>{
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.username, data.password)
    await dashboardPage.searchProductAndViewDetails(data.productName)
    await expect(productViewPage.productName).toHaveText(data.productName)
})
}


const array = [
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'test7lYM@gmail.com',
    password: 'Test@123',
    productName: 'IPHONE 13 PRO'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'test7lYM@gmail.com',
    password: 'Test@123',
    productName: 'ZARA COAT 3'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'test7lYM@gmail.com',
    password: 'Test@123',
    productName: 'ADIDAS ORIGINAL'
  }
]

console.log(array[0].productName);

// for of loop

for(let obj of array){
    console.log(obj.productName);
}