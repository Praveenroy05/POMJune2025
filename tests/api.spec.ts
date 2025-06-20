// Web application
// Front End - JS, TS, html
// Back End - Java, Python, go .....
// Database - 

// API - 

// Request format
// URL - https://rahulshettyacademy.com/api/ecom/auth/login
// Method - POST                          GET - /POST - /PUT - /DELETE
// header - 
// body(payload) - JSON - { "key" : "value" } - {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}

// Response format
// Status code  - 
// response header
// response - json {"string" : "string"}


import {test, expect, request} from '@playwright/test'

const url = "https://rahulshettyacademy.com/api/ecom/auth/login"
const loginPayload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}



const orderURL = "https://rahulshettyacademy.com/api/ecom/order/create-order"
const orderPayload = {orders: [{country: "Australia", productOrderedId: "67a8df1ac0d3e6622a297ccb"}]}

test("Post API Call", async ()=>{
   
    const apiContext = await request.newContext()
    const apiResponse = await apiContext.post(url, {
        data: loginPayload
    })
    //console.log(await apiResponse.json())

    await expect( apiResponse.status()).toBe(200)

    const jsonResponse = await apiResponse.json()
    const token = await jsonResponse.token
    console.log(token);



    const orderResponse = await apiContext.post(orderURL, {
        data: orderPayload,
        headers : {
            "authorization" : token
        }
    })

    const orderResponseJson = await orderResponse.json()

    const orderID = await orderResponseJson.orders[0]
    console.log("Order ID  = ", orderID);



    // const a = 
    // {
    // orders: [
    //     "6837217c81a20695304e7fed"
    // ],
    // productOrderId: [
    //     "67a8df1ac0d3e6622a297ccb"
    // ],
    // message: "Order Placed Successfully"
    // }

    // console.log(a.orders[0])


})

