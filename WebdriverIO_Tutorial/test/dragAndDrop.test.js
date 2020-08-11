const internetPage = require('../pages/internet.page')
const { assert } = require('chai')

describe('Drag and Drop', function(){
    it.skip ('should drag column A to column B', ()=>{
        browser.url('/drag_and_drop')
        internetPage.dragColumnAToColumnB()
        browser.pause(3000)
        assert.equal("A", internetPage.columnBHeader.getText())
    })
    it('Should drag and drop', ()=>{
        browser.url('http://crossbrowsertesting.github.io/drag-and-drop.html')
        internetPage.dragDraggableToDroppable()
        browser.pause(3000)
        assert.equal('Dropped!',internetPage.droppableParagraph.getText())
    })
})