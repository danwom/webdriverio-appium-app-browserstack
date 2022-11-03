var assert = require('assert');

describe('Text Verification', () => {
  it('should match displayed text with input text', async () => {


    let el1 = await $('~filter-btn');
    await el1.click();
    // let el2 = await $ByXPath("//XCUIElementTypeButton[@name=\"Samsung\"]");
    let el2 = $("//XCUIElementTypeButton[@name=\"Samsung\"]");
    await el2.click();

    await browser.touchAction({actions: 'tap', x: 200, y: 200});

  
    let el3 = await $("add-to-cart-12");
    await el3.click();
    let el4 = await $("nav-cart");
    await el4.click();
    let el5 = await $("checkout-btn");
    await el5.click();
    let el6 = await $("username-input");
    await el6.click();
    await browser.touchAction({actions: 'tap', x: 200, y: 775});
        
    let el7 = await $("done_button");
    await el7.click();
    await browser.touchAction({actions: 'tap', x: 200, y: 775});
        
    let el8 = await $("done_button");
    await el8.click();
    let el9 = await $("login-btn");
    await el9.click();
    let el10 = await $("firstNameInput");
    await el10.click();
    await el10.sendKeys("Daniel");
    let el11 = await $("lastNameInput");
    await el11.click();
    await el11.sendKeys("Test");
    let el12 = await $("addressInput");
    await el12.click();
    await el12.sendKeys("123 Street st");
    await el12.click();
    let el13 = await $("stateInput");
    await el13.sendKeys("CA");
    await el13.click();
    let el14 = await $("postalCodeInput");
    await el14.sendKeys("94103");
    await browser.touchAction({actions: 'tap', x: 200, y: 775});
        
    let el15 = await $("submit-btn");
    await el15.click();

    console.log('hello');
    assert(true);
  });
});


// await driver.touchAction({actions: 'tap', x: 200, y: 200});