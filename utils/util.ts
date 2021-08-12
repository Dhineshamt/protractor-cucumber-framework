import { browser, element, ElementFinder, ExpectedConditions } from 'protractor';
import chai from "chai";
const expect = chai.expect;

const EC = ExpectedConditions;
const defaultTimeOut = browser.params.defaultTimeoutInterval;

export default class Utils {
    public static async scrollToViewElement(elmt: any) {
        return await browser.executeScript('arguments[0].scrollIntoView(true)', elmt.getWebElement())
    }

    public static async waitForPresenceOfElement(elmt: any, time?: number) {
        const timeout = time || defaultTimeOut;
        await browser.wait(EC.presenceOf(elmt), timeout);
    }

    public static async isElementDisplayed(elmt: any) {
        await this.scrollToViewElement(elmt);
        await this.waitForPresenceOfElement(elmt);
        return await elmt.isDisplayed();
    }

    public static async clickElement(elmt: any) {
        await this.scrollToViewElement(elmt);
        await this.waitForPresenceOfElement(elmt);
        await elmt.click();
    }

    public static async validateExpectedTextPresent(elmt: ElementFinder, expectedText: string) {
        if(this.isElementDisplayed(elmt)) {
            expect(await elmt.getText()).to.contain(expectedText);
        }
    }
}