var assert = require('assert');

describe('Browserstack App', () => {
  it('Should filter and then checkout a samsung phone', async () => {
    await browser.pause(10000);

    let el1 = await $('~filter-btn');
    await el1.click();

    let el2 = await $("//XCUIElementTypeButton[@name=\"Samsung\"]");
    await el2.click();

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

    await browser.pause(3000);
    await browser.touchAction({
      action: 'tap',
      x: 200,
      y: 775,
    });

    await browser.pause(3000);
    await browser.touchAction({
      action: 'tap',
      x: 350,
      y: 605
    });

    await browser.pause(3000);
    let el77 = await $("~password-input");
    await el77.click();

    await browser.pause(3000);
    await browser.touchAction({
      action: 'tap',
      x: 200,
      y: 775
    });

    await browser.pause(3000);

    await browser.touchAction({
      action: 'tap',
      x: 350,
      y: 605
    });

    let el9 = await $("~login-btn");
    await el9.click();

    let el10 = await $("~firstNameInput");
    await el10.setValue("Daniel");

    let el11 = await $("~lastNameInput");
    await el11.setValue("Test");

    let el12 = await $("~addressInput");
    await el12.setValue("123 Street st");

    let el13 = await $("~stateInput");
    await el13.setValue("CA");

    let el14 = await $("~postalCodeInput");
    await el14.setValue("94103");
    await browser.touchAction({
      action: 'tap',
      x: 200,
      y: 90
    });
        
    let el15 = await $("~submit-btn");
    await el15.click();
    assert(true);
  });
});

