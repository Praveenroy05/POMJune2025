import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"
const incorrectPassword = "abcd"

let loginPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
})

test("Login test using valid credential", async () => {
    await loginPage.validLogin(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()

})
test("Login test using invalid credential", async () => {
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errMessage).toContainText("Incorrect email or password.")
})