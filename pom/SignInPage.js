const { DashboardPage } = require("./DashboardPage");
var config = require('../config');

class SignInPage {
  constructor(page) {
    this.page = page;
  }

  async openSignInPage() {
    await this.page.goto(config.web.url);
  }

  async signInAs(user) {
    await this.page.fill("css=#form-username", user.username);
    await this.page.fill("css=#form-password", user.password);
    await this.page.click("css=button[type='submit']");
    return new DashboardPage(this.page);
  }
}
module.exports = { SignInPage };
