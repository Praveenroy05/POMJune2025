import { Locator } from "playwright";

export class ProductViewPage{

    page
    productName : Locator

    constructor(page){
        this.page = page
        this.productName = this.page.locator('div h2')
    }
}