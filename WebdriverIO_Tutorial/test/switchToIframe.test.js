const internetPage = require('../pages/internet.page')
const { assert } = require('chai')

describe('Switch to Iframe', function(){
    it ('should switch to iframe', ()=>{
        browser.url('/iframe')
        internetPage.h3Header.waitForDisplayed()
        internetPage.iframe.waitForDisplayed()
        browser.switchToFrame(internetPage.iframe)
        internetPage.sendTextToBody('This is the text in the iframe body')
        assert.equal('This is the text in the iframe body', internetPage.iframeBody.getText())
        //browser.pause(3000)
    })
})