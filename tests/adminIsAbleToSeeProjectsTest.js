const { chromium } = require("playwright");
const { SignInPage } = require("../pageobjectmodels/SignInPage");
const { roles } = require("../enums/roles");
const assert = require("assert");
var config = require("../config");
let browser;
let page;

beforeAll(async () => {
  console.log("headless : " + config.web.headless);
  console.log("sloMo : " + config.web.sloMo);
  browser = await chromium.launch({
    headless: config.web.headless == "true",
    slowMo: parseInt(config.web.sloMo, 10),
  });
});
afterAll(async () => {
  await browser.close();
});
beforeEach(async () => {
  page = await browser.newPage();
  if (config.web.networkSubscription) {
    page.on("request", (request) =>
      console.log(">>", request.method(), request.url())
    );
    page.on("response", (response) =>
      console.log("<<", response.status(), response.url())
    );
  }
});
afterEach(async () => {
  await page.close();
});

test("An admin is able to see a dashboard", async () => {
  const signInPage = new SignInPage(page);
  await signInPage.openSignInPage();
  const dashboardPage = await signInPage.signInAs(roles.ADMIN);
  const dashboard = await dashboardPage.page.$("#dashboard");
  assert(dashboard);
});
