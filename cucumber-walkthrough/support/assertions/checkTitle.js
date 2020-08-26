const assert = require("assert");

/**
 * @param {boolean} title expected title
 */
exports.title = (title) => {
  assert(
    browser.getTitle() === title,
    `Title, ${browser.getTitle()} not equal to ${title}`
  );
}; 