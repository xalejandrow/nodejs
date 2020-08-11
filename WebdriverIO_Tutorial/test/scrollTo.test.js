const internetPage = require("../pages/internet.page");
const { assert } = require("chai");

describe('Scroll to Element', function(){
    it('should scroll to the footer', () => {
        browser.url('/')
        //browser.setWindowSize(1024,768)
        internetPage.pageHeader.waitForDisplayed()
        internetPage.pageFooter.scrollIntoView()//Le tuve que poner este scroll hasta el objeto porque si no da error el test, no lo encuentra
        internetPage.scrollToPageFooter()
        assert.equal(true,internetPage.pageFooter.isDisplayedInViewport())
        browser.pause(5000)
    })

    it('should scroll into view', () =>{ 
        browser.url('/')
        internetPage.pageFooter.scrollIntoView()
        assert.equal(true,internetPage.pageFooter.isDisplayedInViewport())
        browser.pause(5000)
    })
})