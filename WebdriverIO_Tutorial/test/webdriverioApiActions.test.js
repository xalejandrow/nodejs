const internetPage = require('../pages/internet.page')
const { assert } = require('chai')

describe('WebdriverIO API Actions', function() {
    it ('should hover on figure 1', () => {
        browser.url('/hovers')
        internetPage.hoverOnFigure(3)
        assert.equal("name: user1", internetPage.getFigureDetailsText(3))
        browser.pause(2000)
    })

    it ('should hover on figure 2', () => {
        browser.url('/hovers')
        internetPage.hoverOnFigure(4)
        assert.equal("name: user2", internetPage.getFigureDetailsText(4))
    })

    it ('should hover on figure 3', () => {
        browser.url('/hovers')
        internetPage.hoverOnFigure(5)
        assert.equal("name: user3", internetPage.getFigureDetailsText(5))
    })

    it('shold send keyboard value Backspace', () => {
        browser.url('/key_presses')
        internetPage.clickTarget()
        internetPage.sendKeysToTarget("Backspace")
        assert.equal("You entered: BACK_SPACE", internetPage.getResultText())
        //browser.pause(3000)
    })

    it('shold send keyboard value Tab', () => {
        browser.url('/key_presses')
        internetPage.clickTarget()
        internetPage.sendKeysToTarget("Tab")
        assert.equal("You entered: TAB", internetPage.getResultText())
    })

    it('shold send keyboard value Shift', () => {
        browser.url('/key_presses')
        internetPage.clickTarget()
        internetPage.sendKeysToTarget("Shift")
        assert.equal("You entered: SHIFT", internetPage.getResultText())
    })
})