import { Given, When, Then } from "cucumber"
import { browser, by, element, protractor, WebElement } from "protractor"
import chai from "chai";
const expect = chai.expect;

When('I open jqury website' , {timeout: 60 * 1000}, async () => {
    await browser.get('https://jqueryui.com/autocomplete/');
    expect(await browser.getTitle()).to.equal('Autocomplete | jQuery UI');
})

Then('I switch to frame and access controls', {timeout: 60 * 1000}, async () => {
    let frame1:WebElement = element(by.css(".demo-frame")).getWebElement();
    await browser.switchTo().frame(frame1);
  
    const elmt = await element(by.id(`tags`));
    await browser.sleep(3500);
  
    browser.driver.actions().mouseMove(elmt);
    await elmt.sendKeys('c');
    await elmt.sendKeys(protractor.Key.ARROW_DOWN);
    await elmt.sendKeys(protractor.Key.TAB);

    await browser.switchTo().defaultContent();
    await element(by.css(`a[href='https://jqueryui.com/button/']`)).click();


    let frame2:WebElement = element(by.css(".demo-frame")).getWebElement();
    await browser.switchTo().frame(frame2);
    await element(by.css(`div.widget button[class^='ui-button']`)).click();
})
// Then('I should be able to see auto suggestion', (

// ) => {})