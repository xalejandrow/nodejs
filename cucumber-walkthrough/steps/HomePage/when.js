require("@babel/register")
const {When} = require('cucumber');

When(/^the user enters "(.*)" into the search bar$/, keyword => {
    $(".gLFyf.gsfi").waitForDisplayed({timeout:5000});
    $(".gLFyf.gsfi").click();
    $(".gLFyf.gsfi").setValue(keyword);
    browser.pause(3000)
    $(".aajZCb .gNO89b").waitForDisplayed({timeout:5000});
    $(".aajZCb .gNO89b").click();
});