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
        
        //browser.url('https://dev-esika.tiendabelcorp.com/pe/perfumes/c/esika-02')
        browser.url('https://loi.com.uy/')
       $("#colecciones-home > ul > li:nth-child(1) > section > ul > li:nth-child(2)").scrollIntoView()
        oc.captureScreen(browser, "PruebaLOI")

        oc.dispose(browser)
        
    })
});
