require("dotenv").config();
const {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { fetchTenantClean } = require("../fixtures/tenant");

setDefaultTimeout(60000);
const isLocal = process.env.CUKE_BASE_URL?.includes("localhost");

BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: isLocal ? false : true,
    slowMo: 2000,
  });
});

AfterAll(async function () {
  await global.browser.close();
  await fetchTenantClean();
});

Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async function () {
  await global.page.close();
  await global.context.close();
});
