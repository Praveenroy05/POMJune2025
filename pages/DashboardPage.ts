export class DashboardPage{
    // locators - 

    private page
    private products 
    addToCartSucceddMsg 

    constructor(page) {
        this.page = page;
        this.products = this.page.locator("div.card-body")
        this.addToCartSucceddMsg = this.page.locator("#toast-container")
    }


    async searchProductAndAddToCart(productName){
        await this.products.nth(1).waitFor()
        const countOfProduct = await this.products.count() 
        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("h5").textContent()  
            if(productText === productName){
                await this.products.nth(i).locator('button').last().click()
                break
            }
        }
    }

    async searchProductAndViewDetails(productName){
        await this.products.nth(1).waitFor()
        const countOfProduct = await this.products.count() 
        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("h5").textContent()  
            if(productText === productName){
                await this.products.nth(i).locator('button').first().click()
                break
            }
        }
    }







}