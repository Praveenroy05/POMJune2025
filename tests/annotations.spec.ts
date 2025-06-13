/*


    test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
    test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
    test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
    test.slow() marks the test as slow and triples the test timeout.

*/

test.describe.configure({mode : "parallel"})

// test.describe("Title", async ()=>{

// })

// test.step("TItle", async()=>{

// })




import {test, expect} from '@playwright/test'
test.skip("skip", async() =>{
    console.log("Skip");
})


test("only", async()=>{
    console.log("only");
})


test.fail("fail", async()=>{
    console.log("fail");
    await expect(25).toBe(20)
})


test.fixme("fixme", async()=>{
    console.log("fixme");
})

test("slow", async()=>{
    test.slow()
    console.log("slow");
})



// Tagging a test case


// 1. @smoke @regression inside the title of the test case
// 2. {tag : ['@smoke', '@regression']}