const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { fetchUserToken, user } = require("../../fixtures/user_token");

let currentUser = null;

Given("quickcheck has sent me a notification with a token", async () => {
  currentUser = await fetchUserToken(user.user_id);
  expect(currentUser.id).toBe(user.user_id);
});

When("the user visits the notification url", async () => {
  // navigate to the app
  await page.goto(currentUser.loginUrl);
});

Then("the user should see a question in the UI", async () => {
  const taxonomy = await page.getByTestId("QuestionItem-Taxonomy");
  await expect(taxonomy).toBeVisible();

  const stem = await page.getByTestId("QuestionItem-Stem");
  await expect(stem).toBeVisible();
});

When("I choose one of the choices", async () => {
  const choices = await page.getByTestId("QuestionItem-Choices");
  await choices.locator("button").locator("nth=0").click();
});

Then("the {string} button appears", async (string) => {
  const checkBtn = page.getByText(string);
  await expect(checkBtn).toBeVisible();
});

When("I click the {string} button", async (string) => {
  await page.getByText(string).locator("visible=true").click();
});

Then("the choice feedback displays", async () => {
  const feedback = page.getByTestId("QuestionItem-ChoiceFeedback");
  await expect(feedback).toBeVisible();
});
