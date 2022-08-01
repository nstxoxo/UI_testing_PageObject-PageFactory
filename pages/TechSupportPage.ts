import { BasePage } from "./BasePage";
import { WebDriver, WebElement, until } from "selenium-webdriver";
import { feedbackLocator, sendButtonLocator } from "../locators/locators";
import { driver } from "../driver/webdriver";
import { TIMEOUT } from "../constans/constans";

export class TechSupportPage extends BasePage {
  constructor(protected driver: WebDriver) {
    super(driver);
  }

  async techSupport() {
    const feedback: WebElement = await driver.findElement(feedbackLocator);
    await feedback.click();
    await driver.wait(until.elementLocated(sendButtonLocator), TIMEOUT);
  }

  async checkButtonSendFeedback() {
    const checkButton: WebElement = await driver.findElement(sendButtonLocator);
    return await checkButton.isDisplayed();
  }
}
