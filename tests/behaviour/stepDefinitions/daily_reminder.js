const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");

const BASE_URL = process.env.CUKE_BASE_URL;
const API_AUTH = process.env.IMPORT_SECRET_KEY;
const userId = "d61afea6-bdbb-4b66-93d9-377d4c06cc29";
const tenantId = "";

//define selectors

let user = null;

Given("quickcheck has sent me a notification with a token", async () => {
  // get the user's token and login url
  // Request (6) (POST http://localhost:4010/api/user/token)
  const responseJson = await fetch("http://localhost:4010/api/user/token", {
    method: "POST",
    headers: {
      Authorization: API_AUTH,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ userId }),
  });

  user = await responseJson.json();
  console.log({ user });
  expect(user.id).toBe(userId);
});

When("the user visits the notification url", async () => {
  // navigate to the app
  await page.goto(user.loginUrl);
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
