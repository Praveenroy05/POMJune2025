import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"
const incorrectPassword = "abcd"

test.beforeEach(async ({page})=>{
    const loginPage = new LoginPage(page)
    //const dash
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
})

test("Search and add the product to the cart", async ()=>{

})