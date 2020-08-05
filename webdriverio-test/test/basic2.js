const assert = require('assert')
let oculow = require('../../oculow.js')
oculow = new oculow.Oculow();


// describe(`Preparing oculow driver`, () => {
//     before(() => {
//         // dev {"keys":[{"api":"YD4Q5o7LRJBsrg83vPuCV2s7EVK+ynLz","created_on":"Mon, 11 May 2020 00:21:48 GMT","secret":"J8vQG0nkGgmHmqLyjp8NgjGwjS0qy+L1"}]}

//         oculow.setKeys("10eVwxGqZMkJILKrlPnL8RmHZjAhDiNy","qzSqIAHye2MJvrt37VxzBsv4ADwO9Q7G")
//         oculow.setAppId("oculowjs")
//         oculow.setBaselineManagement(oculow.ASSISTED)
//         oculow.setComparisonLogic(oculow.PIXEL_DIFF)
//   });
// })

// describe('webdriver.io page', () => {
//     it('should have the right title', () => {
//         browser.url('https://webdriver.io')
//         const title = browser.getTitle()
//         assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
//     })
// })

describe('oculow sdk test', () => {
    before(() => {
        oculow.setKeys("YD4Q5o7LRJBsrg83vPuCV2s7EVK+ynLz","J8vQG0nkGgmHmqLyjp8NgjGwjS0qy+L1") //admin1
        // oculow.setKeys("WZSQEzVPinuUF0nnDgoLNCBX+rkN91zi","R1ZJUm83exyVPgnekFNMFmZVGJKk/36X") //use no tests
        oculow.setAppId("oculowjs")
        oculow.setBaselineManagement(oculow.ASSISTED)
        oculow.setComparisonLogic(oculow.PIXEL_DIFF)
    });
    

    

    it('Should not contain a baseline', () => {
        browser.setWindowSize(1936, 1056)
        
        browser.url('https://lince-232621.firebaseapp.com/shopping')
        oculow.captureScreen(browser, "Store home3");

        $("#app > div > div > div.section > div.container.center > div > div:nth-child(16) > div > a").scrollIntoView();

        browser.url('https://lince-232621.firebaseapp.com/shopping')
        oculow.captureScreen(browser, "Store home4");
        

    })

    after(() => {

        oculow.dispose(browser)

    })
})


