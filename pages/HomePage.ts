import { WebDriver,until, WebElement } from "selenium-webdriver";
import {BasePage} from "./BasePage";
import { becomeAuthorLocator, developmentLocator,textDevelopmentLocator,writePostLocator } from "../locators/locators";
import { driver } from "../driver/webdriver";

export class HomePage extends BasePage {

    constructor(protected driver:WebDriver){
        super(driver);
    }

    async clickDevelopment(){

        const developmentLink: WebElement = await driver.findElement(developmentLocator)
        await driver.wait(until.elementLocated(developmentLocator), 5000);
        await developmentLink.click();
        await driver.wait(until.elementLocated(textDevelopmentLocator), 5000);
        const textDevelopment: WebElement = await driver.findElement(textDevelopmentLocator)
        return await textDevelopment.getText();
    };
    async becomeAuthor(){

        const sandbox: WebElement = await driver.findElement(becomeAuthorLocator);
        await sandbox.click();
        await driver.wait(until.elementLocated(writePostLocator), 5000);
}
    async checkWriteAPost(){

        const writeAPost: WebElement = await driver.findElement(writePostLocator);
        return await writeAPost.isDisplayed();
    }
}