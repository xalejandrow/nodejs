
const { Then } = require("cucumber");
const checkAuthError = require("../../support/assertions/CheckAuthError");

Then(/^an authentication error message should say "(.*)"$/, errorMessage => {
  checkAuthError.errorMessage(errorMessage);
});

Then("they are successfully logged in", () => {
  try {
    browser.call(() => eyes.open(browser));
    browser.call(() => eyes.check("Login Page", Target.window().fully()));
    browser.call(() => eyes.close(false));
  } catch (e) {
    console.log(e);
  } finally {
    browser.call(() => eyes.abortIfNotClosed());
  }
});