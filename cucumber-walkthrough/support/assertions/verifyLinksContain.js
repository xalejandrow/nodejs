const assert = require("assert");
const searchResultsPage = require('../../pages/SearchResults');

/**
 * Ensure link text includes keyword
 * @param {Array.Object} links List of WebdriverIO elements
 * @param {String} keyword Search keyword
 */
/* exports.verifyLinksContain = (links, keyword) => {
  links.forEach(link => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      assert(
        linkText.includes(keyword),
        `Link ${linkText} does not include ${keyword}`
      );
    }
  });
};  */


//Chapter 4.5
exports.verifyLinksContain = (keyword) => {
  searchResultsPage.SearchResultsLinks.forEach(link => {
    const linkText = link.getText().toLowerCase();
    if (linkText) {
      assert(
        linkText.includes(keyword),
        `Link ${linkText} does not include ${keyword}`
      );
    }
  });
}; 