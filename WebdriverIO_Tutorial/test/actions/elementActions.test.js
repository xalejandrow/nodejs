const internetPage = require('../../pages/internet.page')
const { assert } = require('chai')
 const loginData = require('../../data/logindata')

//internetPage = require('../pages/internet.page')

describe('Test element acions', function(){
    it ('should click element', () => {
        browser.url('/')
        internetPage.clickOnLink()
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    })
    it('should get Test', () => {
        browser.url('/')
        //console.log('Este es el texto a verificar: '+internetPage.getSpecificElementText(1))
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })
    it('should click checkbox', () =>{
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)
    })
    it('should uncheck checkbox', () => {
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(false)
    })
    it('should enter username', () => {
        //browser.url(`${browser.options.baseURL}/login`)
        browser.url(`/login`)
        internetPage.enterUsername(loginData.userName)
        assert.equal(loginData.userName, internetPage.username.getValue())
    })
    it('should enter password', () => {
        browser.url(`/login`)
        internetPage.enterPassword(loginData.password)
        assert.equal(loginData.password, internetPage.password.getValue())
    })
    it('should clear Value', () => {
        internetPage.username.click()
        internetPage.username.clearValue()
        assert.equal('', internetPage.username.getValue())
    })

})