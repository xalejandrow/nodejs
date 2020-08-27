const { Given } = require('cucumber');
require("@babel/register")
const goToPage = require("../../support/actions/goToPage");
const homePage = require("../../pages/HomeDress");

Given(/^the browser is at the "(Home|Login)" page$/, page => {
  goToPage.page(page);
});
