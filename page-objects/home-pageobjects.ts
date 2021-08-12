import { by, element } from "protractor";

export default class {
    public static async btnLearnHTML() {
        return element(by.cssContainingText(`a[class^='w3-button']`, 'Learn HTML'));
    }
}