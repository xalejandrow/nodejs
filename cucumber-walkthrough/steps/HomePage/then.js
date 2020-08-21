const {Then} = require('cucumber');

const assert = require('assert');
const verifyLinksContain = require('../../support/assertions/verifyLinksContain');

//Chapter 4.4
/* Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
  const links = $$(".LC20lb");
  links.forEach(link => {
    const linkText = link.getText().toLowerCase();

    if (linkText) {
      assert(
        linkText.includes(keyword),
        `Link text does not include ${keyword}`
      );
    }
  });
}); */

//Chapter 4.4
/* Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
  const links = $$(".LC20lb");
  verifyLinksContain.verifyLinksContain(links,keyword);
}); */

//Chapter 4.5
Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
  verifyLinksContain.verifyLinksContain(keyword);
});