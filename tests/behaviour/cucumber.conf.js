// @ts-nocheck
require("dotenv").config();
const {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
// you can choose other browsers like webkit or firefox according to your requirement
const { chromium } = require("playwright");
setDefaultTimeout(60000);

// launch the browser
BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: process.env.CUKE_BASE_URL?.includes("localhost") ? false : true,
    slowMo: 1000,
  });
});

// close the browser
AfterAll(async function () {
  await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
  await global.page.close();
  await global.context.close();
});
