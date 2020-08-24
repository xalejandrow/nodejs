const catalog = require( "../../pages/Catalog");
const assert  = require("assert");

/**
 * @param {boolean} toBeFound If true, products should be present, else they should not be present
 */
exports.checkProducts = (toBeFound) => {
  //catalog.waitForDisplayed({timeuot:3000});
  const products = catalog.products;
  //console.log(products);
  
  if (toBeFound) {
    assert(products.length > 0, "No products were found");
  } else {
    assert(products.length === 0, "Products were found");
  }
};