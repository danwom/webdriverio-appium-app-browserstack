var assert = require('assert');

describe('Browserstack App', () => {
  it('Should filter and then checkout a samsung phone', async () => {
    await browser.pause(3000);

    let el1 = await $('~filter-btn');
    await el1.click();

    let el2 = await $("//XCUIElementTypeButton[@name=\"Samsung\"]");
    await el2.click();

    // await browser.touchAction({actions: 'tap', x: 200, y: 200});
    await browser.touchAction({
      action: 'tap',
      x: 200,
      y: 200
    });
  
    let el3 = await $("~add-to-cart-12");
    await el3.click();
    let el4 = await $("~nav-cart");
    await el4.click();
    let el5 = await $("~checkout-btn");
    await el5.click();
    let el6 = await $("~username-input");
    await el6.click();
    // await browser.touchAction({actions: 'tap', x: 200, y: 775});

    // await browser.touchAction({
    //   action: 'tap',
    //   x: 200,
    //   y: 775
    // });
    // let el66 = await $("//XCUIElementTypePicker[@name=\"ios_picker\"]/XCUIElementTypePickerWheel");
    let el66 = await $("~ios_picker");
    await el66.sendKeys("demouser");


        
    let el7 = await $("~done_button");
    await el7.click();
    let el77 = await $("~password-input");

    // let el71 = await $("//XCUIElementTypePicker[@name=\"ios_picker\"]/XCUIElementTypePickerWheel");
    let el71 = await $("~ios_picker");
    await el71.sendKeys("testingisfun99");
    // await el77.click();
    // await browser.touchAction({
    //   action: 'tap',
    //   x: 200,
    //   y: 775
    // });
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
    await browser.touchAction({
      action: 'tap',
      x: 200,
      y: 90
    });
        
    let el15 = await $("submit-btn");
    await el15.click();
    assert(true);
  });
});

