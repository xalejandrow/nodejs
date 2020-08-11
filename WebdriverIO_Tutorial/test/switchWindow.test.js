const internetPage = require("../pages/internet.page");
const { assert } = require("chai");


describe('Switch Window', function(){
    it ('Should switch to the next window', ()=>{
        browser.url('/windows')
        internetPage.clickHereLink()
        browser.switchWindow('/windows/new')
        assert.equal(true, internetPage.h3Header.isExisting())
        assert.equal(true, internetPage.h3Header.isDisplayed())
        assert.equal('New Window', internetPage.h3Header.getText())
        browser.pause(5000)
    })

})