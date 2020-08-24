const {Then} = require("cucumber");
const checkNoResultsError = require("../../support/assertions/checkNoResultsError");
const checkProducts = require("../../support/assertions/checkProducts");
const checkProductsContain = require("../../support/assertions/checkProductsContain");

Then(/^(no )?products are listed$/, notListed => {
    if (notListed) {
      checkProducts.checkProducts(false);
    } else {
      checkProducts.checkProducts(true);
    }
  });
  

  Then("a no results error message is shown", () => {
    checkNoResultsError.checkNoResultsError();
  });
  
  Then(/^search results show products related to "(.*)"$/, keyword => {
    checkProductsContain.checkProductsContain(keyword);
  });