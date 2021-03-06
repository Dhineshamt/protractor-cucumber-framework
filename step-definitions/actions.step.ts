import { Given, Then } from "cucumber";
import { browser, by, element, ExpectedConditions } from "protractor";
import {expect} from 'chai';

Given('I open heroku app',  {timeout: 60 * 1000}, async () => {
    await browser.get("http://the-internet.herokuapp.com/drag_and_drop");
})

Then('I land on heroku app', async () => {
    expect(await browser.getTitle()).to.equal('The Internet');
})

Then('I drag and drop', {timeout: 60 * 1000}, async () => {
    // await browser.wait(ExpectedConditions.presenceOf(element(by.id('column-a'))))

    await browser.actions().dragAndDrop(
        element(by.id("column-a")),
        element(by.id("column-b"))
    ).perform();

    await browser.sleep(5000);
})