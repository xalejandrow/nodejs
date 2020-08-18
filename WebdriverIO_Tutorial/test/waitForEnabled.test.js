const internetPage = require('../pages/internet.page')

describe('Wait For Enabled', function(){
    it('should wait for the input field to be enabled',()=>{
        browser.url('/dynamic_controls')
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled({timeout:4000})
        assert.equal(true, internetPage.inputEnabledField.isEnabled())
        browser.pause(3000)
    })
    it('should wait for the input field to be disable',()=>{
        //browser.url('/dynamic_controls')
        internetPage.inputEnabledField.waitForDisplayed()
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled({timeout:5000, reverse:true}) 
        assert.equal(false, internetPage.inputEnabledField.isEnabled())
        browser.pause(3000)
    })
})