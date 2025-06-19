import {test, expect, request} from '@playwright/test'


const getURL = "https://reqres.in/api/users?page=2"
const putURL = "https://reqres.in/api/users/2"

const payload = {
    name: "Test",
    job: "Testing"
}

test('GET method API automation', async()=>{
    const apiContext = await request.newContext()
    const getResponse = await apiContext.get(getURL)
    await expect(getResponse.status()).toBe(200)
    const data = await getResponse.json()
    // console.log(await data.keys)
})

test('PUT method API automation', async()=>{
    const apiContext = await request.newContext()
    const putResponse = await apiContext.put(putURL,{
        data: payload,
        headers: {
            "x-api-key": "reqres-free-v1"
        }
    })
    await expect(putResponse.status()).toBe(200)
    const data = await putResponse.json()
    // console.log(await data.keys)
    console.log(await data.name);
    console.log(await data.job);
})



