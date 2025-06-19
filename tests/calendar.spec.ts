import {test, expect} from '@playwright/test'

test('calendar date selection in dynamic way', async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    const month = "March"
    const year = "2030"
    const date = "20"

    await page.locator(".ui-datepicker-trigger").click()
    const monthDatePicker = page.locator(".ui-datepicker-month")
    const yearDatePicker = page.locator(".ui-datepicker-year")
    while((await monthDatePicker.textContent() !== month) || (await yearDatePicker.textContent() !==year)){
            await page.getByText('Next').click()
    }

    //await page.getByText(`${date}`).click()
    await page.getByRole('cell', { name: `${date}`, exact: true }).click()
    await page.waitForTimeout(5000)

    await page.reload()
    await page.goBack()
    await page.goForward()

})