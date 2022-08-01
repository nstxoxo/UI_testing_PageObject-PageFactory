import { BasePage } from "./BasePage";
import { WebDriver, WebElement, until, Key } from "selenium-webdriver";
import {
  searchButtonLocator,
  searchFieldLocator,
  searchDropdownLocator,
  failedTextLocator,
} from "../locators/locators";
import { driver } from "../driver/webdriver";
import { RANDOM_TEXT, TEXT_QA, TIMEOUT } from "../constans/constans";

export class SearchPage extends BasePage {
  constructor(protected driver: WebDriver) {
    super(driver);
  }
  async clickSearch() {
    const searchButton: WebElement = await driver.findElement(
      searchButtonLocator
    );
    await searchButton.click();
    await driver.wait(until.elementLocated(searchFieldLocator), TIMEOUT);
    const searchField: WebElement = await driver.findElement(
      searchFieldLocator
    );
    await searchField.sendKeys(TEXT_QA, Key.RETURN);
  }
  async checkSearchFieldFailed() {
    const searchButton: WebElement = await driver.findElement(
      searchButtonLocator
    );
    await driver.wait(until.elementIsVisible(searchButton), TIMEOUT);
    await searchButton.click();
    await driver.wait(until.elementLocated(searchFieldLocator), TIMEOUT);
    const searchField: WebElement = await driver.findElement(
      searchFieldLocator
    );
    await searchField.sendKeys(RANDOM_TEXT, Key.RETURN);
  }
  async getSearchFailedText() {
    await driver.wait(until.elementLocated(failedTextLocator), TIMEOUT);
    const searchFailedText: WebElement = await driver.findElement(
      failedTextLocator
    );
    return await searchFailedText.getText();
  }

  async getSearchDropdownText() {
    const searchDropdown: WebElement = await driver.findElement(
      searchDropdownLocator
    );
    return await searchDropdown.getText();
  }
}
