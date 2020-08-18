class Internet {
    get pageHeader() { return $('h1.heading')}
    get subHeading() { return $('h2')}
    get h3Header() { return $('h3')}
    get pageFooter() { return $('#page-footer')}
    get parent() { return $('ul')}
    get childElements() { return this.parent.$$('li')}
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`)}

    get firstLink() { return $('ul li:nth-child(1) a' )}
    link(index) { return $(`ul li:nth-child(${index}) a`)}

    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`)}

    get username() { return $('#username')}
    get password() { return $('#password')}

    figures(index) { return $(`.example .figure:nth-child(${index}) img`)}
    figureDetails(index) { return $(`.example .figure:nth-child(${index}) .figcaption h5`)}

    get target() { return $('.example #target')}
    get result() { return $('.example #result')}

    get hereLink() { return $('.example a')}
    
    get iframeBody() { return $('#tinymce')}
    get iframe() { return $('#mceu_27 #mce_0_ifr') }

    get columnA() {return $('#column-a')}
    get columnB() {return $('#column-b')}

    get columnAHeader(){ return $('#column-a header')}
    get columnBHeader(){ return $('#column-b header')}

    get draggable() { return $('#draggable')}
    get droppable() { return $('#droppable')}
    get droppableParagraph() { return $('#droppable p')}

    get dropdownMenu(){ return $('#dropdown')}
    get dropdownMenuOption1() { return $('#dropdown option:nth-child(2)')}
    get dropdownMenuOption2() { return $('#dropdown option:nth-child(3)')}

    javascriptAlertButton(index) { return $(`.example li:nth-child(${index}) button`)}

    get exampleButton() { return $('.example button')}
    deleteButton(index) { return $(`#elements button:nth-child(${index})`)}

    get pageButton() { return $('#checkbox-example button')}

    clickPageButton(){
        this.pageButton.waitForDisplayed()
        this.pageButton.click()
    }

    clickExampleButton() {
        this.exampleButton.waitForDisplayed()
        this.exampleButton.click()
    }

    clickDeleteButton(index){
        this.deleteButton(index).waitForDisplayed()
        this.deleteButton(index).click()
    }

    get enableButton() {return $('#input-example button')}
    get inputEnabledField() { return $('#input-example input')}

    /**
     * Click the Enable/Disable Button
     */
    clickEnableButton(){
        this.enableButton.waitForDisplayed()
        this.enableButton.click()
    }

    /**
     * Click the specified javascript alert button
     * @param {Number} index the index of the element
     */
    clickJavascriptAlertButton(index) {
        this.javascriptAlertButton(index).waitForDisplayed()
        this.javascriptAlertButton(index).click()
    }
    clickDropdownMenu(){
        this.dropdownMenu.waitForDisplayed()
        this.dropdownMenu.click()
    }

    clickDropdownMenuOtion1(){
        this.dropdownMenuOption1.waitForDisplayed()
        this.dropdownMenuOption1.click()
    }

    clickDropdownMenuOtion2(){
        this.dropdownMenuOption2.waitForDisplayed()
        this.dropdownMenuOption2.click()
    }

    /**
     * Drag and drop
     */
    dragDraggableToDroppable(){
        this.draggable.waitForDisplayed()
        this.draggable.dragAndDrop(this.droppable)
    }

    /**
     * Drag box A to box B
     */
    dragColumnAToColumnB(){
        this.columnA.waitForDisplayed()
        this.columnA.dragAndDrop(this.columnB)
    }

    /**
     * Enter text in the iframe
     * @param {String} text the text to be entered 
     */
    sendTextToBody(text){
        this.iframeBody.waitForDisplayed()
        this.iframeBody.clearValue()
        this.iframeBody.click()
        this.iframeBody.keys(text)
    }

    /**
     *  Click the "click here" link
     */
    clickHereLink(){
        this.hereLink.waitForDisplayed()
        this.hereLink.click()
    }

    /**
     * scrolls to page footer
     */
    scrollToPageFooter() {
      this.pageFooter.moveTo()
      //this.pageFooter.scrollIntoView()
    }

    /**
     * Clicks the target input field
     */
    clickTarget() {
        this.target.waitForDisplayed()
        this.target.click()
    }

    /**
     * Send keyboard the specified image
     * @param {String} text The keyboard text to enter
     */
    sendKeysToTarget(text){
        this.target.waitForDisplayed()
        this.target.keys(text)
    }

    /**
     * return the text of the return element
     */
    getResultText(){
        this.result.waitForDisplayed()
        return this.result.getText()
    }

    /**
     * Hover over the specified image
     * @param {Number} index the specific index of the image
     */
    hoverOnFigure(index) {
        this.figures(index).waitForDisplayed()
        this.figures(index).moveTo(1,1)
        //moveToObject en la nueva versión
    }

    /**
     * Returns the text of the figure details
     * @param {Number} index the index of the element 
     */
    getFigureDetailsText(index){
        this.figureDetails(index).waitForDisplayed()
        return this.figureDetails(index).getText()
    }


    /**
     * Enter the username into the field
     * @param {String} text username to be entered 
     */
    enterUsername(text){
        this.username.waitForDisplayed()
        this.username.setValue(text)
    }

    /**
     * Enter the password into the field
     * @param {String} text password to be entered 
     */
    enterPassword(text){
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }

    /**
     * Clicks in the link based on the index provided
     * @param {index} index the index of the element 
     */
    clickLink(index) {
        this.link(index).waitForDisplayed()
        this.link(index).click()
    }
    clickCheckbox(index){
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }

    getLiText(){
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }

    getSpecificElementText(index){
       //console.log(this.specificChildElement(index).getText())
       this.specificChildElement(index).waitForDisplayed()
       return this.specificChildElement(index).getText()
    }

    clickOnLink(){
       if(this.firstLink.isDisplayed() === true){
            this.firstLink.click()
       }
       this.h3Header.waitForDisplayed()
       //browser.pause(5000)
    }

}
module.exports = new Internet()