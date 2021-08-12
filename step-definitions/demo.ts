import { Given, Then, When } from "cucumber";
import { browser, by, element, ExpectedConditions } from "protractor";
import HomePageObjcet from '../page-objects/home-pageobjects'
import Utils from '../utils/util';
import chai from "chai";
const expect = chai.expect;

Given('I launch w3 schools website',  {timeout: 60 * 1000}, async () => {
    await browser.get(browser.params.url)
    // expect(await browser.getTitle()).to.contain('W3Schools Online Web Tutorials');
}) 

When('I click learnHTML link',  {timeout: 60 * 1000}, async () => {
    await Utils.clickElement(await HomePageObjcet.btnLearnHTML());
})

Then('I should land on html learning page',  {timeout: 60 * 1000}, async () => {
    // await browser.sleep(10000);
    await Utils.waitForPresenceOfElement(await element(by.css(`span[class='color_h1']`)));
    expect(await browser.getTitle()).to.equal('HTML Tutorial');
})