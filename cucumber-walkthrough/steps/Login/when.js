const { When } = require("cucumber");
const signIn = require("../../support/actions/signIn");

When(
    /^the user tries to use "(valid|invalid)" credentials, "(.*)" to login$/,
    (valid, email) => {
      signIn.signin(valid === "valid" ? true : false, email);
    }
  );