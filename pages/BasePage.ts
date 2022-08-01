import { WebDriver } from "selenium-webdriver";

export class BasePage {
  protected readonly url: string;
  constructor(protected driver: WebDriver) {
    this.url = "https://habr.com/ru/all/";
  }
  async visitPage() {
    await this.driver.manage().window().maximize();
    await this.driver.get(this.url);
  }

  async getWindowHandle() {
    await this.driver.getWindowHandle();
  }

  async closeBrowser() {
    await this.driver.quit();
  }
}
