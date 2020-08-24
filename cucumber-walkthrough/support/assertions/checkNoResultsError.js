const catalog = require("../../pages/Catalog");
const assert = require("assert");

exports.checkNoResultsError = () => {
  const noResultErrorMessage = catalog.noResultsErrorMessage;
  assert(
    noResultErrorMessage
      .getText()
      .includes("No results were found for your search"),
    "No results error message was not found"
  );
};
