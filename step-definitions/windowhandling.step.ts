import { Given, Then } from "cucumber"
import { browser, by, element } from "protractor"
import chai from "chai";
const expect = chai.expect;

import Utils from "../utils/util";
import PracticePage from "../page-objects/practicesite-pageobjects";

let switchWindow: string[];

Given('I launch webdriver university', async () => {
    await browser.get('http://webdriveruniversity.com/index.html');
    console.log(browser.getWindowHandle());
})

Then('I navigate to webdriver university', async () => {
    expect(await browser.getTitle()).to.equal('WebDriverUniversity.com');
})

Given('I click on login portal button',  {timeout: 60 * 1000}, async () => {
    await (await PracticePage.btnLoginPortal()).click();
    // await Utils.clickElement(await PracticePage.btnLoginPortal());
})

Then('I navigate to login portal', async () => {
    await browser.getAllWindowHandles().then((handles) => {
        switchWindow = handles;
    });

    await browser.switchTo().window(switchWindow[1]);
    expect(await browser.getTitle()).to.equal('WebDriver | Contact Us');
    
})

Given('I switch to webdriver university window', async () => {
    await browser.switchTo().window(switchWindow[0]);
    expect(await browser.getTitle()).to.equal('WebDriverUniversity.com');
})
