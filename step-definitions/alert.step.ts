import { Given, Then, When } from "cucumber"
import { browser, element, by, protractor } from "protractor"
import { Alert } from 'selenium-webdriver';
import chai from "chai";
import Utils from "../utils/util";
const expect = chai.expect;

let alert: Alert;

Given('I open guru99 website',  {timeout: 60 * 1000}, async() => {
    await browser.get('https://www.seleniumeasy.com/test/javascript-alert-box-demo.html');
})

When('I double click on a button',  {timeout: 60 * 1000},async () => {
    await element(by.css(`button[onclick='myAlertFunction()']`)).click();
    await browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);
    alert = await browser.switchTo().alert();
})

Then('I should accept the alert' ,async () => {
    await alert.dismiss();    
})
