import { WebDriver } from "selenium-webdriver";
import { HomePage } from "./HomePage";
import { SearchPage } from "./SearchPage";
import { TechSupportPage } from "./TechSupportPage";
import { BasePage } from "./BasePage";

export class PageFactory {
  static getPage(driver: WebDriver, pageName: string) {
    switch (pageName) {
      case "Home":
        return new HomePage(driver);
      case "Search":
        return new SearchPage(driver);
      case "TechSupport":
        return new TechSupportPage(driver);
      case "Base":
        return new BasePage(driver);
      default:
        return new BasePage(driver);
    }
  }
}
