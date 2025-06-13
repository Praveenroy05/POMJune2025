import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

import loginData from '../TestData/login.json'
console.log(loginData)

let loginPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(loginData.url)
})

test("@smoke @regression Login test using valid credential", async () => {
    await loginPage.validLogin(loginData.username, loginData.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()

})
test("Login test using invalid credential", {tag: '@smoke'},async () => {
    await loginPage.invalidLogin(loginData.username, loginData.incorrectPassword)
    await expect(loginPage.errMessage).toContainText("Incorrect email or password.")
})





