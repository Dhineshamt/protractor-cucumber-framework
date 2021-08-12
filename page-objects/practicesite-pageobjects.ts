import { by, element, ElementFinder } from "protractor";

export default class PracticePage{
    public static async btnLoginPortal(): Promise<ElementFinder> {
        return element(by.cssContainingText('#contact-us div div' , 'CONTACT US'));
    }


}