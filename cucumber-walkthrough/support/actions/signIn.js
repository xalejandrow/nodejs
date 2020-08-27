const login = require("../../pages/Login");
const credentials = require("../../data/credentials");

exports.signin = (isValid, email) => {
  const password = isValid
    ? credentials.find(creds => creds.email === email).password
    : "randomPassword";
    console.log(password);
  login.signIn(email, password);
}; 