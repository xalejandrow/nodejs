
const { Then } = require("cucumber");
const checkAuthError = require("../../support/assertions/CheckAuthError");

Then(/^an authentication error message should say "(.*)"$/, errorMessage => {
  checkAuthError.errorMessage(errorMessage);
});