/**
 * Search for a keyword
 * @param {String} keyword keyword to search for
 * @param {object} inputField WebdriverIO input field element
 * @param {object} submitButton WebdriverIO submit button element
 */
exports.search = (keyword, inputField, submitButton) => {
    inputField.waitForDisplayed({timeout:5000});
    inputField.click();
    inputField.setValue(keyword);
    submitButton.waitForDisplayed({timeout:5000});
    submitButton.click();
  }; 