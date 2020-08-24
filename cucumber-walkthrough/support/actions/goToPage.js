const home = require ("../../pages/HomeDress");

exports.page = (page) =>  {

  switch (page) {
    case "Home":
      browser.url(home.url);
      break;

    default:
      console.log(`Invalid Page ${page}`);
  }
};
