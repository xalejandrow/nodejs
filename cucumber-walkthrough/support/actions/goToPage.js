const home = require ("../../pages/HomeDress");
const login = require("../../pages/Login");

exports.page = (page) =>  {

  switch (page) {
    case "Home":
      browser.url(home.url);
      break;

    case "Login":
      browser.url(login.url);
       break;

    default:
      console.log(`Invalid Page ${page}`);
  }
};
