const { When } = require("cucumber");
const search = require("../../support/actions/searchDress");
const selectMenuOption = require("../../support/actions/selectMenuOption");

When(/^the user searches for "(.*)"$/, keyword => {
  search.search(keyword);
});

When(/^the user clicks on the "(.*)" menu option in the menu$/, option => {
  selectMenuOption.option(option);
});