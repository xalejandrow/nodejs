const { When } = require("cucumber");
const search = require("../../support/actions/searchDress");

When(/^the user searches for "(.*)"$/, keyword => {
  search.search(keyword);
});
