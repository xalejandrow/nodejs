class Pdp {

    get productName() {return $(' div.product-details.page-title')}


    
    getProductNameText() {
        this.productName.waitForDisplayed()
        return this.productName.getText()
    }

}

module.exports = new Pdp()