import { WebDriver, until, WebElement } from "selenium-webdriver";
import { BasePage } from "./BasePage";
import {
  becomeAuthorLocator,
  developmentLocator,
  textDevelopmentLocator,
  writePostLocator,
} from "../locators/locators";
import { driver } from "../driver/webdriver";
import { TIMEOUT } from "../constans/constans";

export class HomePage extends BasePage {
  constructor(protected driver: WebDriver) {
    super(driver);
  }

  async clickDevelopment() {
    const developmentLink: WebElement = await driver.findElement(
      developmentLocator
    );
    await driver.wait(until.elementLocated(developmentLocator), TIMEOUT);
    await developmentLink.click();
    await driver.wait(until.elementLocated(textDevelopmentLocator), TIMEOUT);
    const textDevelopment: WebElement = await driver.findElement(
      textDevelopmentLocator
    );
    return await textDevelopment.getText();
  }
  async becomeAuthor() {
    const sandbox: WebElement = await driver.findElement(becomeAuthorLocator);
    await sandbox.click();
    await driver.wait(until.elementLocated(writePostLocator), TIMEOUT);
  }
  async checkWriteAPost() {
    const writeAPost: WebElement = await driver.findElement(writePostLocator);
    return await writeAPost.isDisplayed();
  }
}
