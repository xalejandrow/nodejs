const internetPage = require('../pages/internet.page')
const { assert } = require('chai')

describe('WaitUntil', function(){
    it('should wait until the button text changes', ()=>{
        browser.url( '/dynamic_controls')
        internetPage.clickPageButton()
        browser.waitUntil(()=>{
            browser.pause(2000)
            return internetPage.pageButton.getText()=== 'Add'
        },{timeout:6000,timeoutMsg:'Expects button to change'})
        assert.equal('Add',internetPage.pageButton.getText())
    })
    it('should wait until the button text changes to Remove', ()=>{
        internetPage.clickPageButton()
        browser.waitUntil(()=>{
            browser.pause(2000)
            return internetPage.pageButton.getText()=== 'Remove'
        },{timeout:6000,timeoutMsg:'Expects button to change'})
        assert.equal('Remove',internetPage.pageButton.getText())
    })
    //browser.pause(2000)
})