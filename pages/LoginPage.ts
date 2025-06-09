// page - locators and methods related to that particular(Login) page

import { Locator, Page } from "playwright";


export class LoginPage{

    // Locators  - properties/variable of a class - 

    private page : Page
    private username 
    private password 
    private loginBtn : Locator
    errMessage : Locator
    homePageIdentifier : Locator

    // Constructor - method which is called when an object of a class is created
    constructor(page){
        // this - refer to an object of a class
        this.page = page
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.getByRole('button', {name: 'Login', exact : true})
        this.errMessage  = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator(".fa-sign-out")
    }

    async launchURL(url){
        await this.page.goto(url)
    }

    async validLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

     async invalidLogin(username, incorrectPassword){
        await this.username.fill(username)
        await this.password.fill(incorrectPassword)
        await this.loginBtn.click()
    }

}