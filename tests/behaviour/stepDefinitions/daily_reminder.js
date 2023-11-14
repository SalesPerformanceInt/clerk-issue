const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

const baseUrl = process.env.CUKE_BASE_URL

//define selectors

Given('quickcheck has sent me a notification with a token', async () => {
  // navigate to the app
  await page.goto(baseUrl)
  // locate the element in the webUI
  const locator = await page.locator(homepageElement)
  // assert that it's visible
  await expect(locator).toBeVisible()
})

When('the user visits the notification url', async (item) => {
  // fill the item that was input from the feature file , to the inputText field in the UI
  await page.fill(todoInput , item)
  // click the button
  await page.click(todoButton)
})

Then('the user should be taken into the question flow as an authenticated', async (item) => {
  // get text of the item that is visible in the UI
  const text = await page.innerText(todoItem)
  // assert that its name is similar to what we provided
  await expect(text).toBe(item)
})