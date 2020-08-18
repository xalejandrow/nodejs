const internetPage = require('../pages/internet.page')

describe('Dropdown menu', function(){
    it ('should selectoption 1', ()=>{
        browser.url('/dropdown')
        internetPage.clickDropdownMenu()
        internetPage.clickDropdownMenuOtion1()
        assert.equal(true, internetPage.dropdownMenuOption1.isSelected())
    })

    it ('should selectoption 2', ()=>{
        browser.url('/dropdown')
        internetPage.clickDropdownMenu()
        internetPage.clickDropdownMenuOtion2()
        assert.equal(true, internetPage.dropdownMenuOption2.isSelected())
    })
})