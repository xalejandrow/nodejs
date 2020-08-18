const oculow = require("oculow");

const categoryPage = require('../pageobjects/categories.page')
const pdpPage = require('../pageobjects/pdp.page');
const { assert } = require("chai");
const oc = new oculow.Oculow();
//const element = 

describe('Check PDP product Name.', () => {
    it('Should be verify product name', () => {
        oc.setKeys("bmFtclMBRA0OEMH6qxc65mMw4roREa31","P9Ah6xCmVIwOy/BceFCoejPLkbJJpNVp")
        oc.setAppId("Oculow S")
        oc.setBaselineManagement(oc.ASSISTED)
        //oc.setComparisonLogic(oc.FORCE_ALL)
        oc.setComparisonLogic(oc.PIXEL_DIFF)
        browser.setWindowSize(1920,1080)
    
        //browser.url('https://dev-esika.tiendabelcorp.com/pe/maquillaje/c/esika-01')
        browser.url('https://dev-esika.tiendabelcorp.com/pe/perfumes/c/esika-02')
        var parentGUID = browser.getWindowHandle()
        console.log(parentGUID)
        //categoryPage.gridElement(7).scrollIntoView()
        //oc.captureScreen(browser,"PruebaEsikaGrid")
        //categoryPage.gridElement(7).click()
       // categoryPage.addToCart(2)
       var pos = 3
        var gridProductName = categoryPage.gridElementName(pos)
        categoryPage.gridElement(pos).click()
    
        var allGUID = browser.getWindowHandles()

        for(var i=0; i<allGUID.length;i++){
            if(allGUID[i] != parentGUID){
                browser.switchToWindow(allGUID[i])
                break;
            }
        }
         //pdpPage.productName.waitForDisplayed()
         //assert.equal('PERFUME MOMENTOS LIBERTAD',pdpPage.getProductNameText())
         assert.equal(gridProductName.toUpperCase(),pdpPage.getProductNameText())

        oc.captureScreen(browser,"EsikaPDP3")

       /*  browser.url('https://loi.com.uy/')
       $("#colecciones-home > ul > li:nth-child(1) > section > ul > li:nth-child(2)").scrollIntoView()
        oc.captureScreen(browser, "PruebaLOI") */
        browser.pause(3000)
        oc.dispose(browser)
        
    })
});
