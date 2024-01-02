const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");
const {
  fetchEnrollmentImport,
  enrollment,
  invalidEnrollment,
} = require("../../fixtures/enrollment");
const { fetchUserReset, user } = require("../../fixtures/user");
const { fetchUserToken } = require("../../fixtures/user_token");
const { BASE_URL } = require("../../fixtures/env");

let selectedEnrollment;
let enrollmentResponse;
let selectedUser;
let tokenResponse;
let login;

Given("A Valid user and enrollment", async () => {
  const resp = await fetchUserReset(user.user_id);
  selectedEnrollment = enrollment;
});

Given("An incomplete user and enrollment", async () => {
  selectedEnrollment = invalidEnrollment;
});

When("The payload is sent to the enrollment API", async () => {
  enrollmentResponse = await fetchEnrollmentImport(selectedEnrollment);
});

Then("the API should respond with a {string} code", function (code) {
  expect(enrollmentResponse.status).toBe(Number(code));
});

Given("A valid user ID", async () => {
  selectedUser = user;
});

When("The user token API is sent the valid user ID", async () => {
  tokenResponse = await fetchUserToken(selectedUser.user_id);
});

Then(
  "The user token API should respond with a {string} code and a link to login",
  function (string) {
    expect(tokenResponse.loginUrl).toEqual(
      `${BASE_URL}/token/${tokenResponse.token}`,
    );
  },
);

Given("A valid login link", async () => {
  login = tokenResponse.loginUrl;
});

When("The login link is visited", async () => {
  await page.goto(login);
});

Then("the user should land on the question flow", async () => {
  const taxonomy = await page.getByTestId("QuestionItem-Taxonomy");
  await expect(taxonomy).toBeVisible();

  const stem = await page.getByTestId("QuestionItem-Stem");
  await expect(stem).toBeVisible();
});

Then("be able to navigate to the dashboard", async () => {
  await page.getByRole('button', { name: 'Dashboard' }).click();
  await page.getByTestId('OnClose-Confirm').click();
  await expect(page).toHaveURL(`${BASE_URL}/dashboard`);
});
