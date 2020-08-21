require("@babel/register")
const {When} = require('cucumber');
const search = require('../../support/actions/search');


//Primeros videos
/* When(/^the user enters "(.*)" into the search bar$/, keyword => {
    $(".gLFyf.gsfi").waitForDisplayed({timeout:5000});
    $(".gLFyf.gsfi").click();
    $(".gLFyf.gsfi").setValue(keyword);
    browser.pause(3000)
    $(".aajZCb .gNO89b").waitForDisplayed({timeout:5000});
    $(".aajZCb .gNO89b").click();
}); */



//Chapter 4.4
/* When(/^the user enters "(.*)" into the search bar$/, keyword => {
    search.search(keyword,$(".gLFyf.gsfi"),$(".aajZCb .gNO89b"));
}); */

//Chapter 4.5
When(/^the user enters "(.*)" into the search bar$/, keyword => {
    search.search(keyword);
});