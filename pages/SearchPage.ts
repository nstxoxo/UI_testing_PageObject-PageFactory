import { BasePage } from "./BasePage";
import { WebDriver, WebElement,until, Key } from "selenium-webdriver";
import { searchButtonLocator, searchFieldLocator, searchDropdownLocator, failedTextLocator} from "../locators/locators";
import { driver } from "../driver/webdriver";

export class SearchPage extends BasePage{

  constructor(protected driver: WebDriver) {
    super(driver);
  };
    async clickSearch(){
      const searchButton: WebElement =  await driver.findElement(searchButtonLocator);
      await searchButton.click();
      await driver.wait(until.elementLocated(searchFieldLocator), 5000);
      const searchField: WebElement = await driver.findElement(searchFieldLocator);
      await searchField.sendKeys("QA Automation", Key.RETURN);

    }
    async checkSearchFieldFailed() {
      const searchButton: WebElement = await driver.findElement(searchButtonLocator);
      await driver.wait(until.elementIsVisible(searchButton), 5000);
      await searchButton.click();
      await driver.wait(until.elementLocated(searchFieldLocator), 5000);
      const searchField: WebElement = await driver.findElement(searchFieldLocator);
      await searchField.sendKeys("cK/.,2er4)%vbh", Key.RETURN);

  }
    async getSearchFailedText() {
      await driver.wait(until.elementLocated(failedTextLocator), 5000);
      const searchFailedText: WebElement = await driver.findElement(failedTextLocator)
      return await searchFailedText.getText();
}

    async getSearchDropdownText() {
      const searchDropdown: WebElement = await driver.findElement(searchDropdownLocator)
      return await searchDropdown.getText();
}
    async getCurrentUrl() {
       const urlValue: string = await this.driver.getCurrentUrl();
       console.log("urlValue===", urlValue);
    }
  
}