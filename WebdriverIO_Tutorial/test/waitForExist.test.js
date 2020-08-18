const internetPage = require('../pages/internet.page')

describe('Wait For Exist', function(){
    it('sould wait until the delete button exists', ()=>{
        browser.url('/add_remove_elements/')
        internetPage.clickExampleButton()
        internetPage.deleteButton(1).waitForExist()
        assert.equal(true, internetPage.deleteButton(1).isExisting())
        browser.pause(2000)
    })
    it('sould wait until the delete button not exists', ()=>{
        internetPage.clickDeleteButton(1)
        internetPage.deleteButton(1).waitForExist( {timeout:500,reverse:true})
        assert.equal(false, internetPage.deleteButton(1).isExisting())
        browser.pause(2000)
    })
})