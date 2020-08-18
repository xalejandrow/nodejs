class Categories{


    gridElementButton(index)  {return $(`div.product__listing.product__grid > div:nth-child(${index}) .addtocart .has-stock-text `)}
   
     gridElement(index) {
        
        return $(`div.product__listing.product__grid > div:nth-child(${index})`)
    }

    gridElementName(index){
        return $(`div.product__listing.product__grid > div:nth-child(${index}) .details .name`).getText()
    }

    addToCart(index) {
        this.gridElementButton(index).click()
    }

}

module.exports = new Categories()

//span.out-of-stock-text
//.addtocart .has-stock-text 