/* describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
}); */

//Oculow Configs

const oculow = require("oculow");
const oc = new oculow.Oculow();
const element = 

describe('Simple visual validation with oculow.', () => {
    it('Should be rendered correctly', () => {
        oc.setKeys("bmFtclMBRA0OEMH6qxc65mMw4roREa31","P9Ah6xCmVIwOy/BceFCoejPLkbJJpNVp")
        oc.setAppId("Oculow S")
        oc.setBaselineManagement(oc.ASSISTED)
        //oc.setComparisonLogic(oc.FORCE_ALL)
        oc.setComparisonLogic(oc.PIXEL_DIFF)
        browser.setWindowSize(1920,1080)
        //browser.url('https://lince-232621.firebaseapp.com/shopping')
        
        browser.url('https://dev-esika.tiendabelcorp.com/pe/perfumes/c/esika-02')
        const elem = $('#.product-item')
            console.log("scroll to specific element")
            elem.scrollIntoView();
        /* it('should demonstrate the scrollIntoView command', () => {
            const elem = document.getElementById('product_labels_30000016')
            console.log("scroll to specific element")
            elem.scrollIntoView();
        }); */
        
   /*      it('should pause the execution', () => {
            const starttime = new Date().getTime()
            browser.pause(3000)
            const endtime = new Date().getTime()
            console.log(endtime - starttime) // outputs: 3000
        }); */
        oc.captureScreen(browser, "PruebaEsika")

        oc.dispose(browser)
        //oc.close()
    })
});

